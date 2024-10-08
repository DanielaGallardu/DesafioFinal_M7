<script>
export default {
  name: 'AboutView',
};
</script>

<template>
  <div class="container mt-5 text-center">
    <h1>Acerca de Esta Aplicación</h1>
    <p>
      En la vista principal de esta aplicación se muestra un contador que puede incrementarse y decrementarse mediate el
      uso de botones,
      también contine una interacción entre componentes que permite enviar texto desde un componente hijo y ser mostrado
      por un componete padre.
    </p>
  </div>
</template>

<style scoped>
h1 {
  color: #86172f;
  margin-bottom: 1rem;
}

p {
  color: #333;
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}
</style>
