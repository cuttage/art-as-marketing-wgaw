<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <!--eslint-disable-->
  <div class="a-wr">
    <None class="g2-bk-desk" />
    <div class="w-c-b-v">
      <footer class="h-c-c">Hover over the cards</footer>

      <div class="cntnr">
        <Cards
            v-for="article in this.$store.state.articleList"
            v-bind="article"
            :dsk="dsk"
            :key="article.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import None from '~/components/slots/None.vue';
export default {
  head: {
    title: 'About page',
    meta: [
      {
        hid: 'about hid',
        name: 'about',
        content: 'About page description'
      }
    ]
  },
  data() {
    return {
      dsk: 'dsk'
    }
  },
  components: {
    None,
    Cards: () => import('~/components/Cards.vue')
  }
}
</script>

<style scoped>
.a-wr {
  background: blue;
}

.w-c-b-v {
  display: block;
  visibility: visible;
  max-width: 80%;
  margin: auto;
}

@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .w-c-b-v {
    display: none;
    visibility: hidden;
  }
}

.n-l-n {
  position: absolute;
  bottom: 100px;
}
.cntnr {
  display: flex;
  align-items: center !important;
  padding: 60px 0 60px 0;
  min-height: 102.860535931790499vh;
  overflow: visible;
}

.h-c-c {
  font-family: 'DIN Medium', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #d25593;
  text-align: center;
  display: none;
}
</style>
