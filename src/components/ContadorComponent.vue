<script setup>
import { useCounterStore } from '@/stores/contador';

const { count, increment, decrement } = useCounterStore();
</script>

<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
  </div>
</template>
