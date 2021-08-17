```js script
import 'https://gitcdn.link/repo/PrismJS/prism-themes/master/themes/prism-vsc-dark-plus.css';
import Button from '../src/Button.vue';
import * as stories from '../stories/button.stories.js';
import '~/md-layout';
```

# Button

This is a very simple example of a button

## Usage

### Specifying a name

```jsx
<Button name="Dave"></Button>
```

Results in

```js story
export const named = stories.named;
```

### Without a name

```jsx
<Button></Button>
```

Results in

```js story
export const anonymous = stories.anonymous;
```
