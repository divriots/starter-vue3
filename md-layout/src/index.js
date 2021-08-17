export { html } from 'lit-html';
import '~/theme/src/theme.scss';

const setTheme = () => {
  const body = document.querySelector('body');
  body.setAttribute('class', 'vue-theme-ds');
};

setTheme();
