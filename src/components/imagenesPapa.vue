<template>
  <section id="servicios">
    <h3>IMÁGENES DE LA PAPA</h3>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="image in images" :key="image">
        <img :src="image" alt="Imagen de la papa" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        './src/assets/111.jpg',
        './src/assets/fondomain.jpg',
        './assets/papa3.jpg',
      ]
    };
  }
}
</script>

<style scoped>
h3 {
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
