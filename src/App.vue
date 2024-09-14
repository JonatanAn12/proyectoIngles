<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
    <div class="h-6" />
  

<section id="servicios">
<h3 class="titulo-seccion">LA PAPA EN EL TOLIMA.</h3>
<div class="fila">
    <div class="servicio">
        <h4>INTRODUCCIÓN</h4>
        <hr>
        <p>La papa en el Tolima
            La papa es un cultivo de gran relevancia en el departamento del Tolima, Colombia. Está región Andina,  conocida por su diversidad de micro climas y suelos fértiles, ofrece condiciones ideales para el cultivo de papa, un alimento básico y valioso en la dieta colombiana.
            La papa no es solo crucial para la seguridad alimentaria local, sino que también desempeña un papel significativo en la economía y la cultura del Tolima</p>
    </div>
</div>
</section>
<section id="servicios">
<h3>IMAGENES DE LA PAPA</h3>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  
</section>
</template>

<script>

</script>

<style>
body {
background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("./assets/111.jpg");
width: 100%;
}
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

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
 }

</style>