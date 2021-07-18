<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div>
    <Homepage11AScrollto
      v-if="isHomepage11AScrolltoActive"
      class="ay2"
      :father="father"
    />
    <Homepage12AScrollto
      v-if="isHomepage12AScrolltoActive"
      class="ay2"
    />
    <Homepage13AScrollto
      v-if="isHomepage13AScrolltoActive"
      class="ay2"
    />
    <Homepage14AScrollto
      v-if="isHomepage14AScrolltoActive"
      class="ay2"
    />
    <Homepage15AScrollto
      v-if="isHomepage15AScrolltoActive"
      class="ay2"
    />

    <div class="c-t2">
      <div class="it-2 item1" :class="peEnabled" @mouseover="toggleHomepage11AScrollto" />
      <div class="it-2 item2" :class="peEnabled" @mouseover="toggleHomepage12AScrollto" />
      <div class="it-2 item3" :class="peEnabled" @mouseover="toggleHomepage13AScrollto" />
      <div class="it-2 item4" :class="peEnabled" @mouseover="toggleHomepage14AScrollto" />
      <div class="it-2 item5" :class="peEnabled" @mouseover="toggleHomepage15AScrollto" />
    </div>
    <div class="c-t-v-g-h" @click.prevent="prevent11" />
    <div class="c-t-v2">
      <div class="i-v i-v-1">
        <vue-next-level-scroll target="#my-target11">
          <HomepageMenu11AScrollto
            v-if="isHomepage11AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target12">
          <HomepageMenu12AScrollto
            v-if="isHomepage12AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target13">
          <HomepageMenu13AScrollto
            v-if="isHomepage13AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target14">
          <HomepageMenu14AScrollto
            v-if="isHomepage14AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target15">
          <HomepageMenu15AScrollto
            v-if="isHomepage15AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
      </div>
      <div class="i-v i-v-2">
        <span class="sl-d2">Your gateway to: Safe Crash Records Music Studio, Rome-based Film Production Companies.</span>
        <vue-next-level-scroll target=".my-target16">
          <span
            v-if="isHomepage11AScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target17">
          <span
            v-if="isHomepage12AScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target18">
          <span
            v-if="isHomepage13AScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target19">
          <span
            v-if="isHomepage14AScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target20">
          <span
            v-if="isHomepage15AScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <nuxt-link exact to="/contact">
          <span
            class="s-d2-tv-2"
          >| Understood</span>
        </nuxt-link>
      </div>
    </div>
    <div class="svt-c">
      <SpinnerPur
        v-if="isHomepage14AScrolltoActive"
        class="svt"
      />
    </div>
    <Homepage11Target
      v-if="isHomepage11AScrolltoActive"
      id="my-target11"
      class="ay-vr2 my-target16"
    />
    <Homepage12Target
      v-if="isHomepage12AScrolltoActive"
      id="my-target12"
      class="ay-vr2 my-target17"
    />
    <Homepage13Target
      v-if="isHomepage13AScrolltoActive"
      id="my-target13"
      class="ay-vr2 my-target18"
    />
    <Homepage14Target
      v-if="isHomepage14AScrolltoActive"
      id="my-target14"
      class="ay-vr2 my-target19"
    />
    <Homepage15Target
      v-if="isHomepage15AScrolltoActive"
      id="my-target15"
      class="ay-vr2 my-target20"
    />
  </div>
</template>

<script>
import Homepage11AScrollto from '~/components/homepage/subcomp/Homepage11AScrollto.vue'
import Homepage12AScrollto from '~/components/homepage/subcomp/Homepage12AScrollto.vue'
import Homepage13AScrollto from '~/components/homepage/subcomp/Homepage13AScrollto.vue'
import Homepage14AScrollto from '~/components/homepage/subcomp/Homepage14AScrollto.vue'
import Homepage15AScrollto from '~/components/homepage/subcomp/Homepage15AScrollto.vue'
import Homepage11Target from '~/components/homepage/subcomp/Homepage11Target.vue'
import Homepage12Target from '~/components/homepage/subcomp/Homepage12Target.vue'
import Homepage13Target from '~/components/homepage/subcomp/Homepage13Target.vue'
import Homepage14Target from '~/components/homepage/subcomp/Homepage14Target.vue'
import Homepage15Target from '~/components/homepage/subcomp/Homepage15Target.vue'
import { enactHelp } from '~/composables/toggle-help-store.js'

const DIALOG_TYPE = {
  NONE: 1,
  HOMEPAGE11: 1,
  HOMEPAGE12: 2,
  HOMEPAGE13: 3,
  HOMEPAGE14: 4,
  HOMEPAGE15: 5
};

export default {
  components: {
    Homepage11AScrollto,
    Homepage12AScrollto,
    Homepage13AScrollto,
    Homepage14AScrollto,
    Homepage15AScrollto,
    Homepage11Target,
    Homepage12Target,
    Homepage13Target,
    Homepage14Target,
    Homepage15Target,
    SpinnerPur: () => import('~/components/spinner/SpinnerPur.vue'),
    HomepageMenu11AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu11AScrollto.vue'),
    HomepageMenu12AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu12AScrollto.vue'),
    HomepageMenu13AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu13AScrollto.vue'),
    HomepageMenu14AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu14AScrollto.vue'),
    HomepageMenu15AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu15AScrollto.vue'),
    VueNextLevelScroll: () => import('vue-next-level-scroll')
  },
  setup () {
    const { toggleHelp, getToggleHelp } = enactHelp();

    return {
      toggleHelp,
      getToggleHelp
    }
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE,
      noPoint: 'n-pt',
      nullNoPoint: null,
      father: 'Homepage1Scrollto'
    };
  },
  computed: {
    isHomepage11AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE11;
    },
    isHomepage12AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE12;
    },
    isHomepage13AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE13;
    },
    isHomepage14AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE14;
    },
    isHomepage15AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE15;
    },
    peEnabled() {
      return (this.getToggleHelp === true) ? this.noPoint : this.nullNoPoint;
    }
  },
  methods: {
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    toggleHomepage11AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE11) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE11;
    },
    toggleHomepage12AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE12) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE12;
    },
    toggleHomepage13AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE13) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE13;
    },
    toggleHomepage14AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE14) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE14;
    },
    toggleHomepage15AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE15) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE15;
    },
    prevent11() {
      if (this.isHomepage11AScrolltoActive) {
        return this.toggleHelp()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/homestyle.scss';
$primary: #D25593;
$hoverEasing: cubic-bezier(0.165, 0.84, 0.44, 1);

.svt {
  position: absolute;
}

.svt-c {
  z-index: 999;
  position: absolute;
  right: 2.459649122807018rem;
  right: 0em;
  width: 100vw;
}

.ay2 {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 117vh;
  min-height: 960.56px;
  &:hover {
    cursor: default;
  }
}

@media only screen and (min-width: 525px) {
  .ay2 {
    &:hover {
      cursor: default;
      background-color: blue;
    }
  }
}

@media only screen and (min-height: 821px) {
  @media only screen and (min-width: 525px) {
    .ay-vr2 {
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
  .ay-vr2 {
    position: absolute;
    top: 117vh;
    width: 100vw;
    height: inherit;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
  .it-2 {
    opacity: 0;
    flex-grow: 1;
    height: 77vh;
  }
  .n-pt {
    pointer-events: none;
  }
  .c-t-v-g-h {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 5vh;
    min-height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
  .c-t-v2 {
    display: flex;
    flex-direction: row;
    height: 35vh;
    align-self: center;
    overflow: visible;
  }
  .svt-c {
    top: calc(77vh - 80px);
  }
}

@media only screen and (max-height: 820px) {
  @media only screen and (min-width: 525px) {
    .ay-vr2 {
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
  @media only screen and (max-height: 710px) {
    .ay-vr2 {
      height: 117vh;
      min-height: 760.56px;
      z-index: -1;
    }
  }
  @media only screen and (min-height: 711px) {
    .ay-vr2 {
      height: inherit;
      z-index: -1;
    }
  }
  .ay-vr2 {
    position: absolute;
    top: 960.56px;
    width: 100vw;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
  .it-2 {
    opacity: 0;
    flex-grow: 1;
    height: calc(392.16px + 17.1vw);
    max-height: 632.16px;
  }
  .n-pt {
    pointer-events: none;
  }
  .c-t-v-g-h {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
  .c-t-v2 {
    display: flex;
    flex-direction: row;
    height: 287.34px;
    align-self: center;
    overflow: visible;
  }
  .svt-c {
    top: calc(392.16px + 17.1vw - 80px);
  }
}

.c-t2 {
  display: flex;
}

.it-2 + .it-2 {
  margin-left: 0;
}

.i-v { margin-left: 5%; }
.i-v-1 { margin-left: 15%; }
.i-v-2 { height: 100%; max-width: 41%; }

.sl-d2 {
  font-family: 'Barlow', sans-serif;
  font-weight: 560;
  font-size: 1.007793231094659em;
  line-height: 24px;
  line-height: 1.405em;
  color: $primary;
  position: relative;
  cursor: default !important;
}

.s-d2-tv {
  margin-left: 0.064526909722222em;
  line-height: 2.905em;
  position: relative;
  font-family: 'Barlow';
  color: $primary;
  cursor: default !important;
  &:hover {
    cursor: pointer;
    color: #bfbfbf;
  }
}

.s-d2-tv-2 {
  margin-left: 0.064526909722222em;
  display: inline-block;
  position: relative;
  font-family: 'Barlow';
  color: #898989;
  cursor: default !important;
  &:hover {
    cursor: pointer;
    color: #bfbfbf;
  }
}
</style>
