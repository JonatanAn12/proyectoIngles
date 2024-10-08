<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="goTo('/')">LA PAPA EN EL TOLIMA</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Secciones</template>
        <el-menu-item index="2-1" @click="goTo('/imagenes')">IMÁGENES DE LA PAPA</el-menu-item>
        <el-menu-item index="2-2" @click="goTo('/historia')">HISTORIA</el-menu-item>
        <el-menu-item index="2-3" @click="goTo('/turismo')">TURISMO</el-menu-item>
        <el-menu-item index="2-4" @click="goTo('/comidas')">COMIDAS TIPICAS</el-menu-item>
        <el-menu-item index="2-5" @click="goTo('/introduccion')">INTRODUCCION</el-menu-item>
        <el-menu-item index="2-6" @click="goTo('/evaluacion')">Quizz</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  watch: {
    '$route.path'(newPath) {
      this.activeIndex = newPath;
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
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