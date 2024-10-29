<template>
  <section id="contenido2">
    <div class="contenido2">
      <div class="tituloa">
        <p class="titulo-seccion">¿Como surgio la papa en el tolima?</p>
        <h2>comidas tipicas de la papa en el <span>Tolima</span> a continuación...</h2>
        <h2>Sancocho Tolimense <span>(Ibague, Tolima)</span></h2>
        <img src="../assets/sancocho.jpg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
        <img src="../assets/sancocho2.jpg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
        <p class="parrafo">El sancocho es una sopa robusta que combina diferentes tipos de carne (como pollo, cerdo o res), y la papa es un ingrediente básico.
          Ingredientes:
              • 2 Papas grandes peladas y cortadas en trozos
              • 1 Yuca cortada
              • Plátano verde cortado en trozos
              • Mazorca (maíz) partida
              • Carne (pollo, res o cerdo)
              • Cebolla, ajo, cilantro y especias al gusto. </p>
      </div>
      <h6>estas son imagenes del sancocho tolimense</h6>
      <br>
      <h2> Pastel de Papa Tolimense <span>(Ibague, Tolima)</span></h2>
      <img src="../assets/pastelpapa.jpeg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/pastelpapa2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">Este pastel es típico de la región, hecho a base de puré de papa con un relleno de carne o pollo.
        Ingredientes:
            • 5 papas grandes cocidas y machacadas
            • 1/2 taza de leche
            • 1 huevo batido
            • Carne molida (o pollo desmechado)
            • Cebolla, ajo, sal y pimienta
            • Queso rallado.</p>
      <h6>estas son algunas imagenes del pastel de papa</h6>
      <br>
      <h2>Arepas de Papa <span>(Ibague, Tolima)</span></h2>
      <img src="../assets/arepaspapa.jpeg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/arepaspapa2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">Ingredientes:
            • 4 papas cocidas y hechas puré
            • 1 taza de harina de maíz precocida
            • Sal al gusto
        Preparación:
            1. Mezclar el puré de papa con la harina de maíz y la sal.
            2. Amasar hasta obtener una masa homogénea.
            3. Formar pequeñas arepas y asar en una parrilla.
            4. Puedes añadir queso en el centro de la masa antes de cocinar para un toque especial.</p>
      <h6>Estas son algunas imagenes de las arepas</h6>
      <br>
      <h2> papa chorriada<span>(Ibague, Tolima)</span></h2>
      <img src="../assets/papachoriada.jpeg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/papachoriada2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">Ingredientes:
            • 4 papas grandes peladas
            • 1 taza de crema de leche
            • 1 taza de queso rallado
            • Cebolla, ajo y cilantro picado
            • Sal y pimienta al gusto
        Preparación:
            1. Hervir las papas hasta que estén tiernas.
            2. En una sartén, sofreír la cebolla y el ajo, agregar la crema de leche y el queso hasta que se derrita.
            3. Verter la salsa sobre las papas cocidas y espolvorear cilantro.</p>
      <h6>Estas son algunas imagenesde papa chorriada</h6>
      <br>
      <h2>Tamal Tolimense <span>(Ibague,Tolima)</span></h2>
      <img src="../assets/tamal.jpg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/tamal2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo"> El tamal tolimense es uno de los platos más representativos del Tolima. Aunque lleva varios ingredientes, la papa es una parte importante del relleno.
        Ingredientes:
            • 2 papas grandes cortadas en rodajas finas
            • Harina de maíz
            • Pollo, cerdo o costilla
            • Arroz
            • Guiso de tomate, cebolla, ajo y especias
            • Hojas de plátano para envolver
            • Zanahoria, huevo duro, y arvejas (opcional)</p>
      <h6>Estas son algunas imagenes del tamal</h6>
      <h2> Empanadas de papa <span>(Ibague, Tolima)</span></h2>
      <img src="../assets/empanadas.jpeg" class="rounded float-start" alt="..." style="width: 280px; height: 250px;">
      <img src="../assets/empanadas2.jpeg" class="rounded float-end" alt="..." style="width: 280px; height: 250px;">
      <p class="parrafo">Aunque las empanadas se preparan en muchas partes de Colombia, en Tolima es común encontrar versiones con relleno de papa.
        Ingredientes:
            • Masa de harina de maíz
            • Papas cocidas y machacadas
            • Carne molida o pollo desmechado (opcional)
            • Cebolla, ajo y especias al gusto
            • Aceite para freír</p>
      <h6>estas son algunas imagenes de las empanadas</h6>
    </div>
  </section>
  </template>
  
  <script>
  export default {
    name: 'ComidasTipicas',
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