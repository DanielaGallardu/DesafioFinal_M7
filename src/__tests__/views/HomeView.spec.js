import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import HomeView from '@/views/HomeView.vue';
import { useRouter } from 'vue-router';

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Navegar a la vista HomeView', () => {
    const router = useRouter();
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Contador');
  });
});
