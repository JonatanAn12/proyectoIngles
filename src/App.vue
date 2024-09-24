<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="goTo('/')">INTRODUCCIÓN</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Secciones</template>
      <el-menu-item index="2-1" @click="goTo('/imagenes')">IMÁGENES DE LA PAPA</el-menu-item>
      <el-menu-item index="2-2" @click="goTo('/historia')">HISTORIA</el-menu-item>
      <el-menu-item index="2-3" @click="goTo('/turismo')">TURISMO</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style>
body {
background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("./assets/fondomain.jpg");
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