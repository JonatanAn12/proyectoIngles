<template>
    <section id="contactos">
      <h3 class="titulo-seccion">Preguntas</h3>
      <div class="contenedor-form">
        <form @submit.prevent="submitForm">
          <h4>1). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta1" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>2). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta2" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>3). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta3" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>4). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta4" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>5). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta5" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>6). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta6" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>7). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta7" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>8). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <input type="text" v-model="respuesta8" placeholder="Tema..." class="input-full">
          </div>
  
          <h4>9). ¿josjef eofijoaeijf oiej foaif iea</h4>
          <div class="fila">
            <textarea v-model="respuesta9" cols="30" rows="10" placeholder="Tu mensaje..." class="input-full"></textarea>
          </div>
  
          <input type="submit" value="Enviar mensaje" class="btn-enviar">
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'quizzComponent',
    data() {
      return {
        respuesta1: '',
        respuesta2: '',
        respuesta3: '',
        respuesta4: '',
        respuesta5: '',
        respuesta6: '',
        respuesta7: '',
        respuesta8: '',
        respuesta9: ''
      };
    },
    methods: {
      async submitForm() {
        const respuestas = {
          respuesta1: this.respuesta1,
          respuesta2: this.respuesta2,
          respuesta3: this.respuesta3,
          respuesta4: this.respuesta4,
          respuesta5: this.respuesta5,
          respuesta6: this.respuesta6,
          respuesta7: this.respuesta7,
          respuesta8: this.respuesta8,
          respuesta9: this.respuesta9
        };
  
        try {
          const response = await fetch('http://localhost:3001/api/quizz/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(respuestas),
          });
  
          if (response.ok) {
            alert('Formulario enviado exitosamente');
            // Limpia los campos después de enviar
            this.respuesta1 = '';
            this.respuesta2 = '';
            this.respuesta3 = '';
            this.respuesta4 = '';
            this.respuesta5 = '';
            this.respuesta6 = '';
            this.respuesta7 = '';
            this.respuesta8 = '';
            this.respuesta9 = '';
          } else {
            console.log('Error al enviar el formulario');
          }
        } catch (error) {
          console.error('Error en la petición:', error);
        }
      }
    }
  };
  </script>
  
  
  <style scoped>
    #contactos {
      padding: 100px 15px;
  }
  
  #contactos .titulo-seccion {
  margin-bottom: 20px;
  text-align: center;
  font-size: 40px;
  text-transform: uppercase;
  color: #9292ce;
  text-decoration: underline;
  text-decoration-color: #d3d3d3;
  text-decoration-thickness: 5px;
  }
  
  #contactos .contenedor-form {
      max-width: 1300px;
      margin: auto;
      background-color: #ffff;
      transition: .5s;
      border-radius: 20px;
  }
  
  #contactos .contenedor-form h4 {
      font-size: 25px;
      padding: 20px;
  }
  
  #contactos .contenedor-form .fila {
      margin-bottom: 15px;
  
  }
  
  #contactos .contenedor-form .mitad {
      display: flex;
      justify-content: space-between;
  }
  
  #contactos .contenedor-form input,
  #contactos .contenedor-form textarea {
      padding: 20px;
      border-radius: 25px;
      border: none;
      border: 1px solid #919191;
  }
  
  #contactos .contenedor-form .mitad input {
      width: 48%;
  }
  
  #contactos .contenedor-form .input-full {
      width: 100%;
  }
  
  #contactos .btn-enviar {
      display: block;
      margin: auto;
      cursor: pointer;
      transition: .5s;
      padding: 10px 15px;
      font-size: 18px;
      font-weight: bold;
  }
  
  #contactos .contenedor-form:hover {
      box-shadow: 5px 5px 10px #1beb00fb, -5px -5px 10px #f0f0f0;
  }
  
  #contactos .btn-enviar:hover {
      background-color: #17d117;
      color: #f3f3f3;
  }
    </style>