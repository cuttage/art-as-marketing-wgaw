<template>
  <div v-if="batchKeyds.includes(searchfactor.toLowerCase())" class="rchv nbl">
    <article class="article">
      <div>
        <G2MSlo>
          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage1Active ? classObjectImg1 : ''),(isZoom && isImage1Active ? c_Obj_I_Up : ''),(isImage1Active && isDataBool && !isZoom ? classObjectImg1_Anim : ''),(isImage2Active || isImage3Active ? classObjectVar1 : '')]"
            :srcSet="i1Set" :src="i1"
            alt="marta-fattori"
            class="w-c-p"
            :key="img1Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage2Active ? classObjectImg2 : ''),(isZoom && isImage2Active ? c_Obj_I_Up : ''),(isImage2Active && isDataBool && !isZoom ? classObjectImg2_Anim : ''),(isImage1Active || isImage3Active ? classObjectVar2 : '')]"
            :srcSet="i2Set" :src="i2"
            alt="marta-fattori"
            class="w-c-p"
            :key="img2Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage3Active ? classObjectImg3 : ''),(isZoom && isImage3Active ? c_Obj_I_Up : ''),(isImage3Active && isDataBool && !isZoom ? classObjectImg3_Anim : ''),(isImage1Active || isImage2Active ? classObjectVar3 : '')]"
            :srcSet="i3Set" :src="i3"
            alt="marta-fattori"
            class="w-c-p"
            :key="img3Key"
          />
        </G2MSlo>
        <div
          class="c-t-g"
          v-bind:style="[(isImage1Active || isImage2Active || isImage3Active ? {'z-index': '996 !important'} : '')]"
        >
          <DoubleClick
            class="itmg"
            @single-click="toggleImage1"
            @double-click="toggleZoom"
          />
          <DoubleClick
            class="itmg"
            @single-click="toggleImage2"
            @double-click="toggleZoom"
          />
          <DoubleClick
            class="itmg"
            @single-click="toggleImage3"
            @double-click="toggleZoom"
          />
        </div>
        <div class="p-g-g-c" @click="toggleNone"></div>

        <div v-if="isZoom" class="d-c-g">
          <div class="g-g-c3">
            <DoubleClick class="c-t-g3" @single-click="toggleBackZoom" @double-click="toggleBackZoom"></DoubleClick>
          </div>
        </div>
      </div>
    </article>
    <div class="article emptyspc">
      <MessagePor :uidb="block._uid">
        <template slot="g2m" slot-scope="{tellYou}">
          <g2M :tellYou="tellYou"></g2M>
        </template>
        <template slot="g3m" slot-scope="{G2mData, G2m2Data}">
          <g3M :G2mData="G2mData" :G2m2Data="G2m2Data"></g3M>
        </template>
      </MessagePor>
    </div>
    <article class="article">
      <div>
        <G3MSlo>
          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage1Active ? classObjectImg1 : ''),(isZoom && isImage1Active ? c_Obj_I_Down : ''),(isImage1Active && isDataBool && !isZoom ? classObjectImg1_Anim : ''),(isImage2Active || isImage3Active ? classObjectVar1 : '')]"
            :srcSet="i4Set" :src="i4"
            alt="marta-fattori"
            class="w-c-p"
            :key="img1Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage2Active ? classObjectImg2 : ''),(isZoom && isImage2Active ? c_Obj_I_Down : ''),(isImage2Active && isDataBool && !isZoom ? classObjectImg2_Anim : ''),(isImage1Active || isImage3Active ? classObjectVar2 : '')]"
            :srcSet="i5Set" :src="i5"
            alt="marta-fattori"
            class="w-c-p"
            :key="img2Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage3Active ? classObjectImg3 : ''),(isZoom && isImage3Active ? c_Obj_I_Down : ''),(isImage3Active && isDataBool && !isZoom ? classObjectImg3_Anim : ''),(isImage1Active || isImage2Active ? classObjectVar3 : '')]"
            :srcSet="i6Set" :src="i6"
            alt="marta-fattori"
            class="w-c-p"
            :key="img3Key"
          />
        </G3MSlo>
      </div>
    </article>
  </div>
</template>

<script async=on>
//mobile
import useReact from '~/composables/react.js'
import useRaw from '~/composables/raw-data.js'

import G2MSlo from '~/components/slots/G2MSlo.vue'
const DIALOG_TYPE = {
  NONE: null,
  IMAGE1: 1,
  IMAGE2: 2,
  IMAGE3: 3
};
import MessagePor from '~/components/slots/MessagePor.vue';
import g2M from '~/components/slots/g2M.vue';
import g3M from '~/components/slots/g3M.vue';
import G3MSlo from '~/components/slots/G3MSlo.vue'
import 'requestidlecallback-polyfill'; //remove with safari 14
export default {
  scrollToTop: true,
  name: 'G2MSSup',
  props: ['searchfactor', 'block'],
  setup (props) {
    const { i1Set,i1,i4Set,i4,i2Set,i2,i5Set,i5,i3Set,i3,i6Set,i6 } = useReact(props.block._uid);
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
      activeDialog: DIALOG_TYPE.NONE,
      isBlock_1Active: 'b_s_img_1',
      isZooming_UpActive: 'z_img_up',
      isZooming_DownActive: 'z_img_down',
      dataBool: false,
      zoom: false,
      isBlock_Anim_1Active: 'b_s_img_a_1',
      img1Key: 999,
      isVrnc1AActive: 'vrnc1A',
      isBlock_2Active: 'b_s_img_2',
      isBlock_Anim_2Active: 'b_s_img_a_2',
      img2Key: 1998,
      isVrnc2AActive: 'vrnc2A',
      isBlock_3Active: 'b_s_img_3',
      isBlock_Anim_3Active: 'b_s_img_a_3',
      img3Key: 2997,
      isVrnc3AActive: 'vrnc3A',
      promiseList: this.promiseGenerator()
    }
  },
  components: {
    G2MSlo,
    DoubleClick: () => import("~/components/DoubleClick.vue"),
    MessagePor,
    g2M,
    g3M,
    G3MSlo
  },
  computed: {
    baseCondition() {
      return this.isImage1Active || this.isImage2Active || this.isImage3Active;
    },
    isImage1Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE1;
    },
    classObjectImg1() {
      return {
        b_s_img_1: this.isBlock_1Active
      }
    },
    c_Obj_I_Up() {
      return {
        z_img_up: this.isZooming_UpActive
      }
    },
    c_Obj_I_Down() {
      return {
        z_img_down: this.isZooming_DownActive
      }
    },
    isDataBool() {
      return this.dataBool === true;
    },
    isZoom() {
      return this.zoom === true;
    },
    classObjectImg1_Anim() {
      return {
        b_s_img_a_1: this.isBlock_Anim_1Active
      }
    },
    isImage2Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE2;
    },
    isImage3Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE3;
    },
    classObjectVar1() {
      return {
        vrnc1A: this.isVrnc1AActive
      }
    },
    classObjectImg2() {
      return {
        b_s_img_2: this.isBlock_2Active
      }
    },
    classObjectImg2_Anim() {
      return {
        b_s_img_a_2: this.isBlock_Anim_2Active
      }
    },
    classObjectVar2() {
      return {
        vrnc2A: this.isVrnc2AActive
      }
    },
    classObjectImg3() {
      return {
        b_s_img_3: this.isBlock_3Active
      }
    },
    classObjectImg3_Anim() {
      return {
        b_s_img_a_3: this.isBlock_Anim_3Active
      }
    },
    classObjectVar3() {
      return {
        vrnc3A: this.isVrnc3AActive
      }
    }
  },
  methods: {
    promiseRequestIdleCallback() {
      new Promise((resolve) => requestIdleCallback(resolve))
    },
    promiseRequestAnimationFrame() {
      new Promise((resolve) => requestAnimationFrame(resolve))
    },
    promiseSetTimeout(ms) {
      new Promise((resolve) => setTimeout(resolve, ms))
    },
    async *promiseGenerator() {
      var val = yield await this.promiseRequestIdleCallback();
      while(val = yield val);
    },
    async fetchWaitIdle() {
      let res2 = await this.promiseList.next();
      let res3 = await this.promiseList.next(this.promiseRequestIdleCallback(res2));
      let res4 = await this.promiseList.next(this.promiseRequestAnimationFrame(res3));
      let res5 = await this.promiseList.next(this.promiseSetTimeout(0), res4);
      return res5;
    },
    testDataBool() {
      return this.dataBool === true ? this.dataBool = false:'';
    },
    toggleAnim() {
      if(this.isBlock_Anim_1Active === undefined){
        this.testDataBool();
        this.isBlock_Anim_1Active = 'b_s_img_a_1';
      }

      if(this.isBlock_Anim_2Active === undefined){
        this.testDataBool();
        this.isBlock_Anim_2Active = 'b_s_img_a_2';
      }

      if(this.isBlock_Anim_3Active === undefined){
        this.testDataBool();
        this.isBlock_Anim_3Active = 'b_s_img_a_3';
      }
      return this.testDataBool();
    },
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    setImage(wait, value) {
      if (this.activeDialog === value) {
        return this.resetDialog();
      }
      this.activeDialog = value;
    },
    async toggleImage(ValD2) {
      let valA = await this.fetchWaitIdle();
      let valB = await this.toggleAnim(valA);
      let valC = await this.setImage(valB, ValD2);
      let valD = await this.promiseList.next(this.promiseRequestIdleCallback(valC));
      return valD;
    },
    setDataBool() {
      return this.dataBool = true;
    },
    async toggleImage1() {
      let part1 = await this.toggleImage(DIALOG_TYPE.IMAGE1);
      let part2 = await this.setDataBool(part1);
      return part2;
    },
    toggleZoom() {
      return this.zoom = true;
    },
    async toggleImage2() {
      let part1 = await this.toggleImage(DIALOG_TYPE.IMAGE2);
      let part2 = await this.setDataBool(part1);
      return part2;
    },
    async toggleImage3() {
      let part1 = await this.toggleImage(DIALOG_TYPE.IMAGE3);
      let part2 = await this.setDataBool(part1);
      return part2;
    },
    toggleNone() {
      this.setImage({}, DIALOG_TYPE.NONE);
    },
    toggleBackZoom() {
      if (this.isZoom && this.isImage1Active) {
        this.zoom = false;
        this.isBlock_Anim_1Active = undefined
      } else if (this.isZoom && this.isImage2Active) {
        this.zoom = false;
        this.isBlock_Anim_2Active = undefined
      } else if (this.isZoom && this.isImage3Active) {
        this.zoom = false;
        this.isBlock_Anim_3Active = undefined
      }
      return;
    },
    zoomHandle(newVal, oldVal) {
      return newVal !== oldVal && (newVal === true)
    },
  },
  watch: {
    isZoom: {
      handler: function(newVal, oldVal) {
        if(this.zoomHandle(newVal, oldVal) && this.isImage1Active) {
          return this.$set(this.$data, 'img1Key', this.img1Key + 1 );
        } else if(this.zoomHandle(newVal, oldVal) && this.isImage2Active) {
          return this.$set(this.$data, 'img2Key', this.img2Key + 1 );
        } else if(this.zoomHandle(newVal, oldVal) && this.isImage3Active) {
          return this.$set(this.$data, 'img3Key', this.img3Key + 1 );
        }
      },
      immediate: true,
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
.z_img_up {
  grid-area: 2/1/13/10 !important;
  max-height: none !important;
  align-self: self-end !important;
  height: auto !important;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .z_img_up {
    max-width: 100% !important;
  }
}
.z_img_down {
  grid-area: 2/1/13/10 !important;
  max-height: none !important;
  align-self: self-start !important;
  height: auto !important;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .z_img_down {
    grid-area: 1/1/13/10 !important;
    align-self: self-end !important;
    max-width: 100% !important;
  }
}
.b_s_img_a_1 {
  animation: b_s_img_a_1 0.27s 0.2s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}
@keyframes b_s_img_a_1 {
  0% {
    transform: translate3d(-5%,0,0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
}
.w-c-p {
  will-change: transform, opacity;
}
.vrnc1A {
  image-rendering: high-quality;
  grid-area: 1/4/13/1;
  max-width: 110%;
  align-self: end;
  max-height: 33vw;
  z-index: 1;
  opacity: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .vrnc1A {
    image-rendering: -webkit-optimize-contrast;
    justify-self: start;
    max-height: 151.8px;
  }
}
.b_s_img_2 {
  image-rendering: high-quality;
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 110%;
  align-self: stretch;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .b_s_img_2 {
    image-rendering: -webkit-optimize-contrast;
    max-height: 151.8px;
  }
}
.b_s_img_a_2 {
  animation: b_s_img_a_2 0.27s 0s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}
@keyframes b_s_img_a_2 {
  0% {
    transform: translate3d(0,-10%,0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
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
.b_s_img_3 {
  image-rendering: high-quality;
  grid-area: 1/5/7/7;
  z-index: 4;
  max-width: 110%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .b_s_img_3 {
    image-rendering: -webkit-optimize-contrast;
    justify-self: end;
    max-height: 151.8px;
  }
}
.b_s_img_a_3 {
  animation: b_s_img_a_3 0.27s 0s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}
@keyframes b_s_img_a_3 {
  0% {
    transform: translate3d(0,10%,0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
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
.c-t-g {
  display: flex;
  position: absolute;
  top: calc(50px + 22.2vw);
  height: 74.165450121654501vw;
  width: 100%;
  z-index: 5;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .c-t-g {
    height: calc((460px * 0.7) + (1em - 15.34px));
  }
}
.itmg {
  opacity: 0;
  flex-grow: 1;
  height: calc(164.365450121654501vw + 2em) !important;
  margin-right: 0;
  margin-left: 0;
  z-index: inherit;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .itmg {
    height: calc(3em + 613.32px + 27.2vw) !important;
  }
}
.p-g-g-c {
  position: absolute;
  top: 0;
  height: calc(50px + 2vw);
  width: 100%;
  z-index: 7;
}
.d-c-g {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px 0 20px;
}
.g-g-c3 {
  position: absolute;
  top: calc(50px + 22.2vw) !important;
  height: calc(164.365450121654501vw + 2em);
  width: 100%;
  display: flex;
  flex-grow: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .g-g-c3 {
    height: calc(3em + 613.32px + 27.2vw) !important;
  }
}
.c-t-g3 {
  position: absolute;
  top: 0;
  display: flex;
  height: inherit;
  width: 100%;
  z-index: 997;
}
.emptyspc {
  height: 27.2vw;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-rendering: geometricPrecision;
}
</style>
