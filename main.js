document.activeElement("DOMContentLoaded",function(){
  
    const redRoser = document.querySelector('.red-roser')
    function createFirework(){
     const roser= document.createAttribute('div');
     roser.className = 'roser';
 
     const posX = Math.random()* window.innerWidth;
     const posY = Math.random() * Window.innerHeight;
     firework.style.left = '$(posX)px';
     firework.style.top ='$(posY)px';
 
      redRoser.appendChild(roser);
    }
    function launchroser(){
     setInterval(createFirework,1000);
    }
    launchroser();
 });