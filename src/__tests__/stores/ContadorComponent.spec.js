import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/stores/contador';
describe('useCounterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('inicializar el contador en 0', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
  });

  it('incrementar y decrementar el contador correctamente', () => {
    const counterStore = useCounterStore();

    counterStore.increment();
    expect(counterStore.count).toBe(1);

    counterStore.decrement();
    expect(counterStore.count).toBe(0);
  });

  it('manejar múltiples incrementos y decrementos correctamente', () => {
    const counterStore = useCounterStore();
    // múltiples aumentos
    counterStore.increment();
    counterStore.increment();
    counterStore.increment();
    expect(counterStore.count).toBe(3); // Verifica que el contador sea 3

    //múltiples disminuciones 
    counterStore.decrement();
    counterStore.decrement();
    expect(counterStore.count).toBe(1); // Verifica que el contador vuelva a 1
  });

});
