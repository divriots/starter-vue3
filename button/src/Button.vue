<template>
  <button :class="{ outlined }">{{ `${greeting} ${name}` }}</button>
</template>

<script lang="ts">
export default {
  props: {
    name: { type: String, default: 'John Doe' },
    outlined: { type: Boolean },
  },
  data() {
    return {
      greeting: 'Hello',
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: var(--vue-spacing-00) var(--vue-spacing-2);
  border-radius: var(--vue-border-radius-pill);
  border: 1px solid var(--vue-color-border);
  font-family: var(--vue-font-family);
  font-size: var(--vue-font-size-00);
  font-weight: var(--vue-font-weight-button);
  letter-spacing: var(--vue-letter-spacing-button);
  text-transform: uppercase;
  color: var(--vue-color-text-on-primary);
  background-color: var(--vue-color-primary);

  &.outlined {
    background-color: transparent;
    color: var(--vue-color-primary);
  }
}
</style>
