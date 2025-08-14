

body {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
  background: linear-gradient(45deg, #ff9a9e, #fecfef, #fecfef, #ffecd2, #fcb69f, #a8edea, #fed6e3);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  margin: 0;
  padding: 20px;
  min-height: 100vh;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h1 {
  color: #ff4757;
  margin-bottom: 30px;
  font-size: 3em;
  text-shadow: 3px 3px 0px #ffb347, 6px 6px 0px #ff6b9d;
  animation: bounce 2s infinite;
  transform-origin: center;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
  40% { transform: translateY(-10px) scale(1.05); }
  60% { transform: translateY(-5px) scale(1.02); }
}

.floating-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.floating-star {
  position: absolute;
  font-size: 2em;
  animation: floatUpDown 6s ease-in-out infinite;
  opacity: 0.7;
}

@keyframes floatUpDown {
  0%, 100% { 
    transform: translateY(100vh) rotate(0deg) scale(1); 
    opacity: 0;
  }
  10%, 90% { 
    opacity: 0.7; 
  }
  50% { 
    transform: translateY(-20px) rotate(180deg) scale(1.2); 
    opacity: 1;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  max-width: 1200px;
  margin: 0 auto 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

canvas {
  border: 8px solid transparent;
  background: linear-gradient(white, white) padding-box, 
              linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #5f27cd, #00d2d3, #ff9ff3) border-box;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(255, 107, 157, 0.5), 
              0 0 50px rgba(196, 69, 105, 0.3),
              inset 0 0 20px rgba(255, 255, 255, 0.1);
  animation: wheelGlow 3s ease-in-out infinite alternate;
}

@keyframes wheelGlow {
  from { box-shadow: 0 0 30px rgba(255, 107, 157, 0.5), 0 0 50px rgba(196, 69, 105, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1); }
  to { box-shadow: 0 0 40px rgba(255, 107, 157, 0.8), 0 0 70px rgba(196, 69, 105, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2); }
}

.controls {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

button {
  font-size: 22px;
  padding: 18px 45px;
  background: linear-gradient(45deg, #ff6b9d, #c44569);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(255, 107, 157, 0.4);
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
}

button:hover::before {
  left: 100%;
}

button:hover {
  background: linear-gradient(45deg, #ff9ff3, #ff6b9d);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 25px rgba(255, 107, 157, 0.6);
  animation: wiggle 0.5s ease-in-out;
}

@keyframes wiggle {
  0%, 7% { transform: translateY(-5px) scale(1.05) rotateZ(0); }
  15% { transform: translateY(-5px) scale(1.05) rotateZ(-5deg); }
  20% { transform: translateY(-5px) scale(1.05) rotateZ(5deg); }
  25% { transform: translateY(-5px) scale(1.05) rotateZ(-5deg); }
  30% { transform: translateY(-5px) scale(1.05) rotateZ(5deg); }
  35% { transform: translateY(-5px) scale(1.05) rotateZ(-5deg); }
  40%, 100% { transform: translateY(-5px) scale(1.05) rotateZ(0); }
}

button:disabled {
  background: linear-gradient(45deg, #95a5a6, #7f8c8d);
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

#winner {
  margin-top: 30px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(255, 107, 157, 0.2);
}

#winner h2 {
  color: #ff4757;
  margin-bottom: 20px;
  font-size: 2em;
  text-shadow: 2px 2px 4px rgba(255, 71, 87, 0.3);
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { text-shadow: 2px 2px 4px rgba(255, 71, 87, 0.3); }
  50% { text-shadow: 2px 2px 4px rgba(255, 71, 87, 0.3), 0 0 10px rgba(255, 71, 87, 0.8), 0 0 20px rgba(255, 107, 157, 0.6); }
}

#winnerPhoto {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid transparent;
  background: linear-gradient(white, white) padding-box, 
              linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #5f27cd, #00d2d3, #ff9ff3) border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 80px;
  color: white;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
  box-shadow: 0 8px 30px rgba(255, 107, 157, 0.4),
              0 0 0 4px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  animation: photoFloat 3s ease-in-out infinite;
}

@keyframes photoFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

#winnerPhoto img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

#winnerName {
  font-size: 28px;
  font-weight: bold;
  color: #2c2c54;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
  animation: nameGlow 2s ease-in-out infinite alternate;
}

@keyframes nameGlow {
  from { color: #2c2c54; }
  to { color: #5f27cd; }
}

.reset-btn {
  background: linear-gradient(45deg, #ff6348, #e74c3c);
  font-size: 18px;
  padding: 15px 30px;
}

.reset-btn:hover {
  background: linear-gradient(45deg, #ff7675, #ff6348);
}

.students-left {
  margin: 20px 0;
  color: #2c2c54;
  font-size: 20px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  padding: 15px 30px;
  border-radius: 25px;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(44, 44, 84, 0.2);
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.celebration {
  animation: celebrate 0.8s ease-in-out;
}

@keyframes celebrate {
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(-5deg); }
  50% { transform: scale(1.3) rotate(5deg); }
  75% { transform: scale(1.2) rotate(-3deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.students-list {
  margin: 30px auto;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(255, 107, 157, 0.2);
}

.students-list h3 {
  color: #ff4757;
  margin-bottom: 20px;
  font-size: 1.8em;
  text-shadow: 2px 2px 4px rgba(255, 71, 87, 0.3);
}

.students-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  text-align: left;
}

.student-name {
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 15px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  position: relative;
  overflow: hidden;
}

.student-name::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.student-name:hover::before {
  left: 100%;
}

.student-name:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.student-name.selected {
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.5);
  animation: selectedPulse 1s ease-in-out infinite;
}

@keyframes selectedPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.student-name.removed {
  background: linear-gradient(135deg, #95a5a6, #7f8c8d);
  color: #ecf0f1;
  text-decoration: line-through;
  opacity: 0.6;
  box-shadow: 0 2px 8px rgba(149, 165, 166, 0.3);
}

@keyframes confettiFall {
  0% {
    transform: translateY(-10px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 20px;
  }
  
  canvas {
    width: 300px;
    height: 300px;
  }
  
  .students-grid {
    grid-template-columns: 1fr;
  }
  
  h1 {
    font-size: 2.5em;
  }
  
  button {
    font-size: 18px;
    padding: 15px 35px;
  }
}
