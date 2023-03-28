const botones = document.querySelectorAll('.btn');
const enviarBtn = document.querySelector('.enviar');
let puntuacion = 1;

botones.forEach(function(boton){
    boton.addEventListener('click',function(e){
      if(!boton.classList.contains('activado')){
        botones.forEach(function(b){
          if(b.classList.contains('activado')){
            b.classList.remove('activado');
          }
        })

        boton.classList.add('activado');
        puntuacion = e.target.dataset.num;
        console.log(puntuacion);
      } else {
        boton.classList.remove('activado');
      }
    });
});


enviarBtn.addEventListener('click', function() {

    const container = document.querySelector('.container');
    container.innerHTML = '';
  
    
    const nuevoContenido = `
      <div class="container-principal2">
        <img src="./images/ilustracion.svg" alt="">
        <h4>Nos diste ${puntuacion} de 5 </h4>
        <h1>¡Gracias!</h1>
        <p>Nos importa mucho lo que piensas y trabajaremos duro para mejorar. ¡Regresa pronto!</p>
        <button class="enviar">ATRAS</button>
      </div>
    `;
    container.innerHTML = nuevoContenido;
  
    
    const regresarBtn = document.querySelector('.enviar');
    regresarBtn.addEventListener('click', function() {
  
      window.location.reload();
    });
});
