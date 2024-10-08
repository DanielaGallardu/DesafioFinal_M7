<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent,
  },
  data() {
    return {
      receivedText: '',
    };
  },
  methods: {
    handleText(text) {
      this.receivedText = text;
    },
  },
};
</script>

<template>
  <div>
    <h2>Texto recibido: {{ receivedText }}</h2>
    <ChildComponent @textSent="handleText" />
  </div>
</template>
