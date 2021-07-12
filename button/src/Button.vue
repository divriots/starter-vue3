<template>
  <button>{{ greeting }}</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      greeting: 'Hello',
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: var(--aria-color-primary);
}
</style>
