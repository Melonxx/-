<template>
  <button @click="$emit('click')">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    props: ['icon'],
    name: 'Button'
  }
</script>
<style lang="scss">
  .icon {
    width: 1em;
    height: 1em;
  }
  button {
    padding: 10px 20px;
    font-size: 14px;
  }
</style>
