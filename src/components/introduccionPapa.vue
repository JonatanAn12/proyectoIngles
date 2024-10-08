<template>
  <section id="servicios">
    <h3 class="titulo-seccion">INTRODUCTION</h3>
    <div class="fila">
      <div class="servicio">
        <h4>THE PAPA IN THE TOLIMA</h4>
        <hr />
        <p>The potato is a crop of great importance in the department of Tolima, Colombia. This Andean region, known for its diversity of microclimates and fertile soils, offers ideal conditions for growing potatoes, a valuable staple in the Colombian diet.
          Potatoes are not only crucial for local food security, but also play a significant role in Tolima's economy and culture.</p>
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