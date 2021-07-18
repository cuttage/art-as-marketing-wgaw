<template>
  <div v-if="batchKeyds.includes(searchfactor)" class="rchv nbl">
    <article class="article">
      <div>
        <G2MSLeft>
          <img
            async=on
            v-bind:class="[(classObjectImg1)]"
            :srcSet="i1Set" :src="i1"
            alt="marta-fattori"
            :key="img1Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar2)]"
            :srcSet="i2Set" :src="i2"
            alt="marta-fattori"
            :key="img2Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar3)]"
            :srcSet="i3Set" :src="i3"
            alt="marta-fattori"
            :key="img3Key"
          />
        </G2MSLeft>
      </div>
    </article>
    <div class="article emptyspc"></div>
    <article class="article">
      <div>
        <G3MSLeft>
          <img
            async=on
            v-bind:class="[(classObjectImg1)]"
            :srcSet="i4Set" :src="i4"
            alt="marta-fattori"
            :key="img1Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar2)]"
            :srcSet="i5Set" :src="i5"
            alt="marta-fattori"
            :key="img2Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar3)]"
            :srcSet="i6Set" :src="i6"
            alt="marta-fattori"
            :key="img3Key"
          />
        </G3MSLeft>
      </div>
    </article>
  </div>
</template>

<script async=on>
import useReactLeft from '~/composables/react-left.js'
import useRaw from '~/composables/raw-data.js'

import G2MSLeft from '~/components/slots/desktop/G2MSLeft.vue'
import G3MSLeft from '~/components/slots/desktop/G3MSLeft.vue'
import 'requestidlecallback-polyfill'; //remove with safari 14
export default {
  scrollToTop: true,
  name: 'G2MSSDeskLeft',
  props: ['searchfactor', 'whichLeft'],
  setup (props) {
    const { i1Set,i1,i4Set,i4,i2Set,i2,i5Set,i5,i3Set,i3,i6Set,i6 } = useReactLeft(props.whichLeft);
    const { batchKeyds } = useRaw();

    return {
      i1Set,
      i1,
      i4Set,
      i4,
      i2Set,
      i2,
      i5Set,
      i5,
      i3Set,
      i3,
      i6Set,
      i6,
      batchKeyds
    }
  },
  data() {
    return {
      isBlock_1Active: 'b_s_img_1',
      img1Key: 999,
      img2Key: 1998,
      isVrnc2AActive: 'vrnc2A',
      img3Key: 2997,
      isVrnc3AActive: 'vrnc3A'
    }
  },
  components: {
    G2MSLeft,
    G3MSLeft
  },
  computed: {
    classObjectImg1() {
      return {
        b_s_img_1: this.isBlock_1Active
      }
    },
    classObjectVar2() {
      return {
        vrnc2A: this.isVrnc2AActive
      }
    },
    classObjectVar3() {
      return {
        vrnc3A: this.isVrnc3AActive
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rchv {
  display: grid;
  visibility: visible;
  grid-gap: 1em;
  grid-auto-flow: dense;
}
.nbl {
  background-color: transparent !important;
}
/*
 * 1. Improve image quality when scaled in IE7: h5bp.com/d
 * 2. Remove the gap between images and borders on image containers: h5bp.com/e
 */
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}
.b_s_img_1 {
  image-rendering: high-quality;
  grid-area: 1/4/13/1;
  max-width: 110%;
  align-self: end;
  max-height: 33vw;
  z-index: 4;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .b_s_img_1 {
    image-rendering: -webkit-optimize-contrast;
    justify-self: start;
    max-height: 151.8px;
  }
}
.vrnc2A {
  image-rendering: high-quality;
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 110%;
  align-self: stretch;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
  opacity: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .vrnc2A {
    image-rendering: -webkit-optimize-contrast;
    max-height: 151.8px;
  }
}
.vrnc3A {
  image-rendering: high-quality;
  grid-area: 1/5/7/7;
  z-index: 2;
  max-width: 110%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
  opacity: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .vrnc3A {
    image-rendering: -webkit-optimize-contrast;
    justify-self: end;
    max-height: 151.8px;
  }
}
.emptyspc {
  height: 27.2vw;
  display: flex;
}
</style>
