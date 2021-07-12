import Button from '../src/Button.vue';
import './button.scss';

export const normal = () => ({
  components: { Button },
  template: `<Button style='background-color: --aria-color-primary'/>`,
});
