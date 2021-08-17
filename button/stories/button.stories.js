import Button from '../src/Button.vue';
import '~/md-layout';

export default {
  parameters: { layout: 'centered' },
};

export const anonymous = () => ({
  components: { Button },
  template: `<Button />`,
});

export const named = () => ({
  components: { Button },
  template: `<Button name='Dave' />`,
});
