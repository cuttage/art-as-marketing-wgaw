<template>
  <my-layout>
    <div :class="(page === 'portfolio' || page === 'portfolio-id') ? content : null">
      <div :class="(page === 'portfolio' || page === 'portfolio-id') ? rchv : null">
        <Spinner
          v-if="page !== 'index' && page !== 'portfolio' && page !== 'portfolio-id' && page !== 'about' && page !== 'sorry'"
          class="sw-sp"
          :is="asyncComp"
        />
        <Marta v-if="page !== 'portfolio' && page !== 'portfolio-id' && page !== 'sorry'" class="h-hd" :class="page === 'about' ? 'h-h2' : ''" />
        <div v-if="page === 'index'">
          <div class="s-prlxc">
            <Pxcc class="Pxcc Pxcco"></Pxcc>
          </div>
          <Form class="c-f-c" />
        </div>
        <div :class="(page === 'portfolio' || page === 'portfolio-id') ? article : content">
          <nuxt />
        </div>
        <SpinnerMob
          v-if="page === 'about'"
          class="sw-wsp-vr"
          :is="asyncComp2"
        />
        <article class="article" v-if="(page === 'portfolio' || page === 'portfolio-id')">
          <SpinnerMob
            class="sw-wsp"
            :is="asyncComp2"
          />
        </article>
        <article class="article" v-if="(page === 'portfolio' || page === 'portfolio-id')">
          <ArticleWidgetMob
            class="m-g-b"
          />
        </article>
      </div>
    </div>
  </my-layout>
</template>

<script>
import myLayout from "~/components/Layout_0.vue"
import Form from '~/components/Form.vue'

export default {
  name: 'default',
  data: () => ({
    asyncComp: '',
    asyncComp2: '',
    rchv: 'rchv',
    content: 'content',
    article: 'article'
  }),
  components: {
    myLayout,
    Form,
    Spinner: () => import('~/components/spinner/Spinner.vue'),
    Pxcc: () => import('~/components/PxccAlt.vue'),
    Marta: () => import('~/components/awidget/ArticleWidgetDesk.vue'),
    SpinnerMob: () => import('~/components/spinner/SpinnerMob.vue'),
    ArticleWidgetMob: () => import('~/components/awidget/ArticleWidgetMob.vue')
  },
  computed: {
    page() {
      return this.$store.state.page
    },
    comp() {
      return (this.page === 'portfolio' || this.page === 'portfolio-id') ? 'article' : 'div'
    }
  },
  mounted() {
    this.asyncComp = 'Spinner'
    this.asyncComp2 = 'SpinnerMob'
  }
}
</script>

<style lang="scss">
body {
  display: flex;
  min-height: 100vh;
  height: auto;
  flex-direction: column;
}

:root {
  font-family: 'WindsorEF', sans-serif;
  font-display: auto;
  /* original calc 0.859059166095426vw, 1vw is right (100% dimension Keynote) */
  font-size: calc(1em + 1.147vw);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-font-feature-settings: 'liga', 'kern';
  text-rendering: optimizelegibility;
  line-height: calc(1em + 1.147vw);
}

@font-face {
  font-family: 'WindsorEF';
  src: url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.eot');
  src: url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.woff2')
      format('woff2'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.woff')
      format('woff'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.ttf')
      format('truetype'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.svg#WindsorEF')
      format('svg');
}

@font-face {
  font-family: 'DIN Medium';
  src: url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.eot');
  src: url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.woff2')
      format('woff2'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.woff')
      format('woff'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.ttf')
      format('truetype'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.svg#DINMedium')
      format('svg');
}

@font-face {
  font-family: 'Bangla MN';
  src: url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.eot');
  src: url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.eot?#iefix')
      format("embedded-opentype"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.woff2')
      format("woff2"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.woff')
      format("woff"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.ttf')
      format("truetype"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.svg#BanglaMN')
      format("svg");
}

@font-face {
  font-family: 'Avenir Heavy';
  src: url('~assets/fonts/901497541657a2f24e42848bcf7fad52.eot');
  src: url('~assets/fonts/901497541657a2f24e42848bcf7fad52.eot?#iefix')
      format("embedded-opentype"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.woff2')
      format("woff2"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.woff')
      format("woff"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.ttf')
      format("truetype"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.svg#AvenirHeavy')
      format("svg");
}

@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  src: url('~assets/fonts/barlow-v4-latin-500.eot'); /* IE9 Compat Modes */
  src: local('☺'),
       url('~assets/fonts/barlow-v4-latin-500.eot?#iefix')
      format('embedded-opentype'), /* IE6-IE8 */
    url('~assets/fonts/barlow-v4-latin-500.woff2')
      format('woff2'), /* Super Modern Browsers */
    url('~assets/fonts/barlow-v4-latin-500.woff')
      format('woff'), /* Modern Browsers */
    url('~assets/fonts/barlow-v4-latin-500.ttf')
      format('truetype'), /* Safari, Android, iOS */
    url('~assets/fonts/barlow-v4-latin-500.svg#Barlow')
      format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Proza';
  src: url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.eot');
  src: url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.eot?#iefix')
      format("embedded-opentype"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.woff2')
      format("woff2"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.woff')
      format("woff"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.ttf')
      format("truetype"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.svg#Proza')
      format("svg");
}

@font-face {
  font-family: 'AtkinsonHyperlegibleRegular';
  src: url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.eot');
  src: url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102a.woff2')
      format('woff2'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.woff')
      format('woff'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.ttf')
      format('truetype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.svg#AtkinsonHyperlegibleRegular')
      format('svg');
}

@font-face {
  font-family: 'AtkinsonHyperlegibleBold';
  src: url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.eot');
  src: url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102a.woff2')
      format('woff2'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.woff')
      format('woff'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.ttf')
      format('truetype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.svg#AtkinsonHyperlegibleBold')
      format('svg');
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  pointer-events: all;
}

#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
}

body-content {
  flex: 1;
}

.c-f-c {
  width: inherit;
  z-index: 999;
}

@media only screen and (min-width: 525px) {
  .cntnr,
  .c-ndx,
  .c-ppp {
    width: inherit;
    height: inherit;
    background: blue;
  }

  .cntnr:hover,
  .c-ppp:hover {
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}

.Pxcc {
  opacity: 1;
  visibility: visible;
}

.Pxcco {
  overflow-y: visible;
  overflow-x: hidden;
}

.sw-sp {
  position: absolute;
  top: 78vh;
}

@media only screen and (max-width: 525px) {
  .child {
    width: inherit;
    height: inherit;
    background: blue;
  }
}

.sw-wsp {
  margin-top: calc(4.648094091903712vw + (1em - 4.648094091903712vw));
  margin-bottom: calc(9.296188183807424vw + (2em - 9.296188183807424vw));
  visibility: visible;
  display: block;
}

.sw-wsp-vr {
  margin-top: calc(4.648094091903712vw + (1em - 4.648094091903712vw));
  visibility: visible;
  display: block;
}

@media only screen and (max-width: 974px) {
  .h-h2 {
    visibility: hidden;
    display: none;
    height: 0;
  }
}

@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .h-hd {
    visibility: hidden;
    display: none;
    height: 0;
  }
  .sw-wsp-vr {
    visibility: hidden !important;
    display: none !important;
    height: 0 !important;
  }
}

/* experimental feature: 375px limit in layout */
@media only screen and (max-device-width: 290px) and (orientation: portrait),
only screen and (max-width: 368px),
only screen and (max-width: 375px) and (max-resolution: 2.88dppx), // limit until 375px excluding iPhone 12 mini
only screen and (max-width: 375px) and (-webkit-max-device-pixel-ratio: 2.88),
only screen and (max-width: 460px) and (max-resolution: 1.6687500000dppx), // limit until 460px devices with max-resolution: 1.6687500000dppx (especially galaxy note II)
only screen and (max-width: 460px) and (-webkit-max-device-pixel-ratio: 1.6687500000),
only screen and (max-device-width: 480px) and (max-resolution: 2dppx) and (orientation: landscape), // limit anything below iPhone 4s in landscape
only screen and (max-device-width: 480px) and (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .sw-wsp {
    margin-bottom: 0;
    visibility: hidden;
    display: none;
    height: 0;
  }
}

.rchv {
  display: grid;
  grid-template-columns: repeat(1, minmax(280px, 2732px));
  justify-content: center;
  grid-gap: 1em;
  grid-auto-flow: dense;
}

.m-g-b {
  margin-bottom: 2em !important;
}

.s-prlxc {
  visibility: visible;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 500px;
  overflow: hidden;
}

@media only screen and (max-width: 1199px) {
  .s-prlxc {
    top: calc(20.2rem - 12vw);
  }
}

@media only screen and (max-width: 865px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px) {
  .s-prlxc {
    visibility: hidden;
    display: none;
    width: 0;
    height: 0;
  }
}
</style>
