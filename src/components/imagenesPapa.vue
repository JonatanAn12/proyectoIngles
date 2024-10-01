<template>
  <section id="servicios">
    <h3>IMÁGENES DE LA PAPA</h3>
    <el-carousel :interval="4000" type="card" height="550px">
      <el-carousel-item v-for="item in mediaItems" :key="item.src" class="rounded">
        <img v-if="item.type === 'image'" :src="item.src" alt="Imagen de la papa" />
        <video v-else-if="item.type === 'video'" controls>
          <source :src="item.src" :type="item.videoType">
        </video>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mediaItems: [
        { type: 'image', src: 'https://boyaca7dias.com.co/wp-content/uploads/2019/10/PA%CC%81G-5-7-1024x681.jpg' },
        { type: 'image', src: 'https://estaticos.elcolombiano.com/binrepository/1200x767/0c0/1200d627/none/11101/BBBT/whatsapp-image-2022-02-15-at-19-45-59_39485000_20220215195034.jpg',   },
        { type: 'video', src: 'https://res.cloudinary.com/dh3ixolct/video/upload/v1727817131/socio/ncibl699tjrxmol4chrx.mp4', videoType: 'video/mp4' },
        { type: 'image', src: 'https://www.boyaca.gov.co/secretariaagricultura/wp-content/uploads/sites/71/2015/06/images_Paperos1.JPG' },
        { type: 'image', src: 'https://static01.nyt.com/images/2016/11/19/science/19tb-potato2/19tb-potato2-superJumbo.jpg' },
        { type: 'image', src: 'https://www.boyaca.gov.co/wp-content/uploads/2023/05/2287ce96-692d-4cad-a450-a86cfbc04188.jpg' },
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
  Clip-path: inset(0px 0px 0px 0px);
}
</style>
