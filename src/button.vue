<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'Button'
  }
</script>
<style lang="scss">
  button {
    padding: 10px 20px;
    font-size: 14px;
  }
</style>
