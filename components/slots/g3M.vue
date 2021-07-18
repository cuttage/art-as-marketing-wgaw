<template>
  <div class="m-slt" style="color: yellow; font-family: 'Din Medium'; font-size: 0.8rem; width: 100%; display: flex; justify-content: center; align-items: center;">{{ G2mData }} {{ G2m2Data }}</div>
</template>

<script>
export default {
  props: ['G2mData', 'G2m2Data']
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 500px) {
  .m-slt {
    visibility: hidden;
    display: none !important;
  }
}
</style>
