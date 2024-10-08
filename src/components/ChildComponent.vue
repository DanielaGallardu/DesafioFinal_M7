<script>
export default {
  name: 'ChildComponent',
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    emitText() {
      this.$emit('textSent', this.inputText);
    },
  },
};
</script>

<template>
  <div class="text-center">
    <input v-model="inputText" placeholder="Ingresa un texto" class="form-control mb-2" />
    <button @click="emitText" class="btn btn-primary">Enviar</button>
  </div>
</template>


<style scoped>
input {
  border: 2px solid #86172f;
  max-width: 300px;
  margin: 0 auto;
}

input:focus {
  border-color: #86172f;
  box-shadow: 0 0 5px rgba(134, 23, 47, 0.5);
}

.btn-primary {
  background-color: #86172f;
  border: none;
  font-weight: 700;
}

.btn-primary:hover {
  background-color: #a03040;
}
</style>
