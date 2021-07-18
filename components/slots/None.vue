<template>
  <div class="n-v-t-c">
    <div class="n-v-t">🚧<br/>Resize the window to view the page</div>
  </div>
</template>

<script>
export default {
  name: 'None'
}
</script>

<style lang="scss" scoped>
.n-v-t-c {
  display: none;
  visibility: hidden;
}
.n-v-t {
  display: none;
  visibility: hidden;
}
@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .n-v-t-c {
    display: flex;
    visibility: visible;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }
  .n-v-t {
    display: flex;
    visibility: visible;
    width: auto;
    height: auto;
    text-align: center;
    align-items: center;
    font-size: 1.490250039119064rem;
    line-height: 1.2;
    font-family: 'Avenir Heavy', sans-serif;
    color: #333;
  }
}
</style>
