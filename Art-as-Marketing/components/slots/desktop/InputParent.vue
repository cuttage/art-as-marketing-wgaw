<template>
  <article class="article lgcl">
    <div class="ntm" />
    <div id="pnl" class="ntm" :style="diapoclass2C">
      <span role="button" v-bind:class="{dsbld: currentDiapo === 0}" @click="changeDiapo('prev')"></span>
      <span role="button" v-bind:class="{dsbld: currentDiapo === diapos.length - 1}" @click="changeDiapo('next')"></span>
    </div>
    <article v-show="this.currentDiapo === 0" class="ntm" :style="diapoclassC" :key="diapoaKeySub">
      <project v-if="page === 'portfolio'" class="b_s_h" :key="diapoaKeySub1"></project>
      <nuxt-child v-else class="b_s_h" :key="diapoaKeySub1"></nuxt-child>
    </article>
    <component :is="diapos[currentDiapo]" v-if="this.currentDiapo === 1" class="ntm" :style="diapoclassC" :key="diapobKey">
      <slot name="inputBlueContent"></slot>
    </component>
  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'InputParent',
  props: ['dsk', 'mob'],
  data() {
    return {
      diapos: ['diapoA', 'diapoB'],
      currentDiapo: 0,
      diapoaKey: "a" + 2,
      diapoaKeySub: "aa" + 2,
      diapoaKeySub1: "aaa" + 2,
      diapobKey: "b" + 2,
      diapobKeySub1: "bbb" + 2,
      diapoclass: '20.2vw'
    }
  },
  components: {
    project: () => import("~/components/motto/project.vue")
  },
  computed: {
    ...mapState({
      page: 'page'
    }),
    diapoclassCA() {
      if (this.diapoclass <= 20.2) {
        return {
          'min-height': `${this.diapoclass}vw`
        }
      } else {
        return {
          'min-height': `${this.diapoclass}px`
        }
      }
    },
    diapoclassCB() {
      return {
        'min-height': `${this.diapoclass}px`
      }
    },
    diapoclassC() {
      return this.mob ? this.diapoclassCB : this.diapoclassCA
    },
    diapoclass2CA() {
      if (this.diapoclass <= 20.2) {
        return {
          'min-height': `${this.diapoclass}vw`,
          'marginTop': `-${this.diapoclass}vw`
        }
      } else {
        return {
          'min-height': `${this.diapoclass}px`,
          'marginTop': `-${this.diapoclass}px`
        }
      }
    },
    diapoclass2CB() {
      return {
        'min-height': `${this.diapoclass}px`,
        'marginTop': `-${this.diapoclass}px`
      }
    },
    diapoclass2C() {
      return this.mob ? this.diapoclass2CB : this.diapoclass2CA
    }
  },
  methods: {
    changeDiapo(dir) {
      this.$nextTick(() => {this.currentDiapo = dir === 'next' ? this.currentDiapo + 1 : this.currentDiapo - 1})
    },
    valCache(data) {
      return (this.diapoclass === data) ? this.diapoclass : this.diapoclass = data;
    }
  },
  created() {
    this.$bus.$on('dropd-change', (data) => {this.valCache(data)});
  }
}
</script>

<style lang="scss" scoped>
.b_s_h {
  z-index: 6;
}

.lgcl {
  display: grid;
  visibility: visible;
  width: 100%;
  z-index: 996;
  background-color: black;
}

.ntm {
  flex-grow: 1;
  height: 20.2vw;
  margin-top: calc(10vw - 8vw + 50px);
}

.ntm + .ntm {
  margin-top: -20.2vw;
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
  .lgcl {
    display: none;
    visibility: hidden;
  }
}

#pnl {
  display: flex;
  position: relative;
  width: 100%;
  z-index: 997;

  span {
    cursor: pointer;
    flex-grow: 1;

    &.dsbld {
      pointer-events: none;
    }
  }
  div {
    align-items: center;
    display: flex;
  }
}
</style>
