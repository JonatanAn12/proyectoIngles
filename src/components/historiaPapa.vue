<template>
  <section id="contenido2">
    <div class="contenido2">
      <div class="tituloa">
        <p class="titulo-seccion">¿Como surgio la papa en el tolima? </p>
        <h2>La papa en el <span>Tolima</span> surgio...</h2>
        <br>
        <p>Bootstrap establece estilos básicos de visualización, tipografía y enlaces globales. Cuando se necesita más control, consulta las clases de utilidades textuales.
          Utiliza una pila de fuentes nativas que seleccione la mejor font-family para cada sistema operativo y dispositivo.
          Para una escala de tipos más inclusiva y accesible, utilizamos el font-size raíz predeterminado del navegador (normalmente 16x) 
          para que los visitantes puedan personalizar los valores predeterminados de su navegador según sea necesario.
          Usa los atributos $font-family-base, $font-size-base y $line-height-base como nuestra base tipográfica aplicada al <strong>"body"</strong>
          Establece el color global de enlaces a través de $link-color.
          Usa $body-bg para establecer un background-color en <strong>"body"</strong> (#fff por defecto).
          Estos estilos se pueden encontrar dentro de _reboot.scss, y las variables globales se definen en _variables.scss. Asegúrate de configurar $font-size-base en rem.</p>
        </div>
          <br>
          <h6>A continuación le mostraremos ejemplos y usos</h6>
          
    <br>  
    </div>
  </section>
  </template>
  
  <script>
  export default {
    name: 'HistoriaPapas',
  };
  </script>
  <style scoped>
  #contenido2 {
    background-color: aliceblue;
    max-width: 1100px;
    margin: 40px auto;
    padding: 100px 15px;
    color: #111135;
    display: flex;
    justify-content: center;
  }
  
  #contenido2 .contenido2 {
    margin: 0 40px;
  }
  
  #contenido2 .contenido2 .titulo-seccion {
    font-size: 22px;
    text-transform: uppercase;
    color: #6e2cf3;
    text-decoration: underline;
    text-decoration-color: #d3d3d3;
    text-decoration-thickness: 5px;
  }
  
  #contenido2 .contenido2 h2 {
    font-size: 34px;
    font-weight: bold;
    margin: 20px 0;
    letter-spacing: 2px;
  }
  
  #contenido2 .contenido2 h2 span {
    color: #1bd624;
  }
  
  #contenido2 .contenido2 span  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }
  
  #contenido2 .contenido2 .tituloa p {
    font-size: 22px;
    line-height: 25px;
    color: #565656;
    margin-bottom: 15px;
  }
  </style>