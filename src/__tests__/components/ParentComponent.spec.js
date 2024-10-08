import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest'
import ParentComponent from '@/components/ParentComponent.vue';

describe('ParentComponent', () => {
  it('Recibir el texto enviado desde ChildComponent', async () => {
    const wrapper = mount(ParentComponent);

    const input = wrapper.find('input');
    await input.setValue('Enviar');

    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.text()).toContain('Enviar');
  });
});