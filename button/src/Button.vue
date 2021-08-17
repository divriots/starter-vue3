<template>
  <button>{{ `${greeting} ${name}` }}</button>
</template>

<script lang="ts">
export default {
  props: {
    name: { type: String, default: 'John Doe' },
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
  background-color: var(--vue-color-gray-300);
  border-radius: var(--vue-border-radius-large);
  height: var(--vue-spacing-x-large);
  font-size: var(--vue-font-size-medium);
}
</style>
