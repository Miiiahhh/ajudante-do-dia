let alunos = [...originalAlunos];
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin');
const resetBtn = document.getElementById('reset');
const winnerName = document.getElementById('winnerName');
const winnerPhoto = document.getElementById('winnerPhoto');
const studentsCount = document.getElementById('studentsCount');

let angle = 0;
let spinning = false;

function updateStudentsCount() {
  studentsCount.textContent = `${alunos.length} alunos restantes`;
  if (alunos.length === 0) {
    spinBtn.disabled = true;
    winnerName.textContent = "Todos os alunos já foram sorteados!";
  } else {
    spinBtn.disabled = false;
  }
}

function drawWheel() {
  if (alunos.length === 0) {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "#ddd";
    ctx.fillRect(0, 0, 500, 500);
    ctx.fillStyle = "#999";
    ctx.font = "24px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.fillText("Lista vazia!", 250, 250);
    return;
  }

  const anglePerSector = 2 * Math.PI / alunos.length;
  const colors = ["#ff9999", "#99ccff", "#99ff99", "#ffcc99", "#ff99cc", "#ccff99"];
  
  for (let i = 0; i < alunos.length; i++) {
    const angleStart = i * anglePerSector;
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 250, angleStart, angleStart + anglePerSector);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(angleStart + anglePerSector / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#333";
    ctx.font = "bold 12px Comic Sans MS";
    
    const nome = alunos[i].nome;
    if (nome.length > 12) {
      const palavras = nome.split(' ');
      if (palavras.length > 1) {
        ctx.fillText(palavras[0], 230, -5);
        ctx.fillText(palavras.slice(1).join(' '), 230, 10);
      } else {
        ctx.fillText(nome, 230, 5);
      }
    } else {
      ctx.fillText(nome, 230, 5);
    }
    
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(250, 250, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffcc00";
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(250, 20);
  ctx.lineTo(270, 50);
  ctx.lineTo(230, 50);
  ctx.closePath();
  ctx.fillStyle = "#ff6600";
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function spinWheel() {
  if (spinning || alunos.length === 0) return;
  spinning = true;

  const rotation = 360 * 5 + Math.floor(Math.random() * 360);
  const duration = 4000;
  const start = performance.now();

  function animate(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    angle = eased * rotation;
    drawRotation();
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      showWinner();
      spinning = false;
    }
  }
  requestAnimationFrame(animate);
}

function drawRotation() {
  ctx.clearRect(0, 0, 500, 500);
  ctx.save();
  ctx.translate(250, 250);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.translate(-250, -250);
  drawWheel();
  ctx.restore();
}

function showWinner() {
  const index = Math.floor(((360 - (angle % 360)) / 360) * alunos.length) % alunos.length;
  const sorteado = alunos.splice(index, 1)[0];
  
  winnerName.textContent = sorteado.nome;
  
  const img = new Image();
  img.onload = function() {
    winnerPhoto.innerHTML = `<img src="${sorteado.arquivo}" alt="${sorteado.nome}">`;
  };
  img.onerror = function() {
    winnerPhoto.innerHTML = "🌟";
  };
  img.src = sorteado.arquivo;
  
  winnerPhoto.classList.add('celebration');
  
  setTimeout(() => {
    winnerPhoto.classList.remove('celebration');
  }, 600);
  
  updateStudentsCount();
  drawRotation();
}

function resetList() {
  alunos = [...originalAlunos];
  angle = 0;
  winnerName.textContent = "Clique em 'Girar' para sortear!";
  winnerPhoto.innerHTML = "🎯";
  updateStudentsCount();
  drawRotation();
}

spinBtn.addEventListener("click", spinWheel);
resetBtn.addEventListener("click", resetList);

updateStudentsCount();
drawRotation();