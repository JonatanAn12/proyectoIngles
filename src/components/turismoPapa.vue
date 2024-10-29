<template>
  <section id="contenido2">
    <div class="contenido2">
      <div class="tituloa">
        <p class="titulo-seccion">¿Como surgio la papa en el tolima?</p>
        <h2>turismo de la papa en el <span>Tolima</span> a continuación...</h2>
        <h2>Museo de la Papa <span>(Tunja, Boyacá)</span></h2>
        <img src="../assets/descarga.jpeg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
        <img src="../assets/museo.jpg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
        <p class="parrafo">This small museum is located in Tunja, the capital of Boyacá, a key potato-producing department in Colombia. The museum offers exhibits on the history of potato cultivation, its varieties and the economic and cultural importance for the region.</p>
      </div>
      <h6> Here are some images of the museum</h6>
      <br>
      <h2>Festival Nacional de la Papa <span>(Villapinzón, Cundinamarca)</span></h2>
      <img src="../assets/festivalpapa.jpg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/festival2.jpg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">Villapinzón is a municipality well known for its potato production. Every year, in June, they celebrate the National Potato Festival, where there are cultural activities, contests, gastronomic fairs, parades and events related to the potato.</p>
      <h6>Below are images of the festival</h6>
      <br>
      <h2>Cumbre Mundial de la Papa  <span>(Duitama, Boyacá)</span></h2>
      <img src="../assets/cumbrepapa.jpg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/cumbrepapa2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">Although this event is not exclusively for tourism, it is organized in Duitama with the participation of producers, experts and industry professionals. It is a space to exchange knowledge about potato production and consumption in Colombia and the world.</p>
      <h6>Below are images of the summit</h6>
      <br>
      <h2> Ruta de la Papa <span>(Boyaca)</span></h2>
      <img src="../assets/rutapapa.jpg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/rutapapa2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">It is a tourist and cultural tour in several municipalities of Boyacá, where visitors can learn about the process of potato cultivation, from planting to harvesting. It is often combined with visits to agro-ecological farms, farmers' markets and historical sites.</p>
      <h6>Below are images of the route</h6>
      <br>
      <h2>Plaza de Mercado de Bogotá <span>(Corabastos)</span></h2>
      <img src="../assets/plaza.jpg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/plaza2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">In this gigantic marketplace, you can see the magnitude of the potato trade in Colombia. Corabastos is a key point of distribution and sale of potatoes, and although it is not a traditional tourist site, it is fascinating for those who want to learn about the logistics and culture of agricultural markets.</p>
      <h6>The following are images of the marketplace</h6>
    </div>
  </section>
</template>
  
  <script>
  export default {
    name: 'turismoPaapa',
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
    transition: .5s;
    align-items: flex-start; 
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
    margin: 30px 0;
    letter-spacing: 2px;
}

#contenido2 .contenido2 h2 span {
    color: #1bd624;
}

#contenido2 .contenido2 h6 {
    margin: 30px 0;
}

#contenido2 .contenido2 img {
    margin: 20px;
}

#contenido2 .contenido2 .parrafo {
    font-size: 18px;
    line-height: 1.6;
    color: #565656;
    margin: 20px 0;
}

#contenido2:hover {
    box-shadow: 5px 5px 10px #1beb00fb, -5px -5px 10px #f0f0f0;
}

  </style>