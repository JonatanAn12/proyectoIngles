<template>
  <section id="servicios">
    <h3 class="titulo-seccion">INTRODUCCIÓN</h3>
    <div class="fila">
      <div class="servicio">
        <h4>INTRODUCCION ACERCA DEL TRABAJO</h4>
        <hr />
        <p>Desarrollo de software al lado del servidor usando el lenguaje de Java junto a Springboot para crear aplicaciones web rápidas y efectivas.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroduccionPapa', 
};
</script>


<style scoped>
#servicios {
  padding: 100px 15px;
  text-align: center;
  }
  
  #servicios .titulo-seccion {
  font-size: 30px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #d3d3d3;
  text-decoration-thickness: 5px;
  }
  
  #servicios .fila {
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 30px auto;
  }
  
  #servicios .fila .servicio {
  max-width: 700px;
  background-color: #ffff;
  padding: 30px;
  margin: 0 200px;
  border-radius: 5px;
  transition: .5s;
  height: 400px;
  }
  
  #servicios .fila .servicio:hover {
  box-shadow: 5px 5px 10px #1beb00fb, -5px -5px 10px #f0f0f0;
  
  }
  
  #servicios .fila .servicio h4 {
  font-size: 24px;
  margin-bottom: 25px;
  }
  
  #servicios .fila .servicio .icono {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d3d3d3;
  padding: 20px;
  margin-bottom: 25px;
  }
  
  #servicios .fila .servicio hr {
  width: 30%;
  margin: auto;
  color: #000;
  margin-bottom: 25px;
  }
  
  #servicios .fila .servicio ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  }
  
  #servicios .fila .servicio p {
  font-size: 17px;
  line-height: 22px;
  }
</style>
