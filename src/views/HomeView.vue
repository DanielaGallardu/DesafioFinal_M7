<script>
import { useCounterStore } from '@/stores/contador.js';
import { ref } from 'vue';
import ChildComponent from '@/components/ChildComponent.vue';

export default {
  name: 'HomeView',
  components: {
    ChildComponent,
  },
  setup() {
    const counterStore = useCounterStore();

    const incrementCounter = () => {
      counterStore.increment();
    };

    const decrementCounter = () => {
      counterStore.decrement();
    };

    const receivedText = ref('');

    const handleText = (text) => {
      receivedText.value = text;
    };

    return {
      counterStore,
      incrementCounter,
      decrementCounter,
      receivedText,
      handleText,
    };
  },
};
</script>

<template>
  <div class="container mt-5 text-center">
    <h1 class="text-dark">Contador</h1>
    <div class="mb-4">
      <h3>El Contador se encuentra en: {{ counterStore.count }}</h3>
      <button class="btn btn-dark me-3" @click="incrementCounter">Incrementar</button>
      <button class="btn btn-danger" @click="decrementCounter">Decrementar</button>
    </div>

    <hr class="my-4 divider" />
    <h1>Interacción entre componentes</h1>
    <ChildComponent @textSent="handleText" />
    <h3 class="text-dark">Texto recibido: <span class="text-danger">{{ receivedText }}</span></h3>
  </div>
</template>

<style scoped>
h3 {
  margin: 1.5rem 0;
  color: #86172f;
}

.btn {
  font-weight: bold;
  padding: 0.5rem 1.5rem;
}

.btn-dark {
  background-color: #86172f;
  border-color: #86172f;
  color: white;
}

.btn-danger {
  background-color: #b22234;
  border-color: #b22234;
  color: white;
}

.btn:hover {
  opacity: 0.9;
}

.btn-dark:hover {
  background-color: #a03040;
}

.btn-danger:hover {
  background-color: #a6303f;
}

.divider {
  border: 1px solid #86172f;
  width: 80%;
  margin: 0 auto;
}
</style>
