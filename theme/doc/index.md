```js script
import '@divriots/dockit-core/sass-showcases';
import { html } from '~/md-layout';
```

<vue-logo></vue-logo>

# Vue Theme

This _theme_ for [Vue.js](https://vuejs.org/) is using tokens defined at the top level (i.e. `:where(html)`) to build its own internal tokens. It also defines specific variants (`light` and `dark`) at `html` level based on the top-level tokens.

It then use those internal tokens to defines theme-specific tokens depending on the context. E.g.:

```css
:root {
  color-scheme: light;

  --vue-color-focus: var(--vue-color-focus-light);
  --vue-color-primary: var(--vue-color-primary-light);
  --vue-color-surface: var(--vue-color-surface-light);
  --vue-color-border: var(--vue-color-border-light);
}
```

## Theme Tokens

### font-family

```html:html
<dockit-sass-showcases
  css-props-names="--vue-font-family,--vue-font-family-code"
  component-type="text"
  style-key="font-family"
></dockit-sass-showcases>
```

### font-size

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-font-size"
  component-type="text"
  style-key="font-size"
></dockit-sass-showcases>
```

### font-weight

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-font-weight"
  component-type="text"
  style-key="font-weight"
></dockit-sass-showcases>
```

### letter-spacing

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-letter-spacing"
  component-type="text"
  style-key="letter-spacing"
></dockit-sass-showcases>
```

### line-height

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-line-height"
  component-type="text"
  style-key="line-height"
  long-text
></dockit-sass-showcases>
```

### background-color

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-color"
  component-class="box"
  style-key="background-color"
></dockit-sass-showcases>
```

### color

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-color"
  component-type="text"
  style-key="color"
></dockit-sass-showcases>
```

### spaces

```html:html
<dockit-sass-showcases css-props-prefix="--vue-spacing"></dockit-sass-showcases>
```

### box-shadow

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-shadow"
  component-class="box"
  style-key="box-shadow"
  checkered-background="false"
></dockit-sass-showcases>
```

```html:html
<dockit-sass-showcases
  css-props-prefix="--vue-border-radius"
  component-class="box"
  style-key="border-radius"
  checkered-background="false"
></dockit-sass-showcases>
```
