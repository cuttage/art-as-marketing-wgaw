<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div>
    <Homepage11EScrollto
      v-if="isHomepage11EScrolltoActive"
      class="ay2"
      :father="father"
    />
    <Homepage12EScrollto
      v-if="isHomepage12EScrolltoActive"
      class="ay2"
    />
    <Homepage13EScrollto
      v-if="isHomepage13EScrolltoActive"
      class="ay2"
    />
    <Homepage14EScrollto
      v-if="isHomepage14EScrolltoActive"
      class="ay2"
    />
    <Homepage15EScrollto
      v-if="isHomepage15EScrolltoActive"
      class="ay2"
    />

    <div class="c-t2">
      <div class="it-2 item1" :class="peEnabled" @mouseover="toggleHomepage11EScrollto" />
      <div class="it-2 item2" :class="peEnabled" @mouseover="toggleHomepage12EScrollto" />
      <div class="it-2 item3" :class="peEnabled" @mouseover="toggleHomepage13EScrollto" />
      <div class="it-2 item4" :class="peEnabled" @mouseover="toggleHomepage14EScrollto" />
      <div class="it-2 item5" :class="peEnabled" @mouseover="toggleHomepage15EScrollto" />
    </div>
    <div class="c-t-v-g-h" @click.prevent="prevent11" />
    <div class="c-t-v2">
      <div class="i-v i-v-1">
        <vue-next-level-scroll target="#my-target11">
          <HomepageMenu11EScrollto
            v-if="isHomepage11EScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target12">
          <HomepageMenu12EScrollto
            v-if="isHomepage12EScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target13">
          <HomepageMenu13EScrollto
            v-if="isHomepage13EScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target14">
          <HomepageMenu14EScrollto
            v-if="isHomepage14EScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target15">
          <HomepageMenu15EScrollto
            v-if="isHomepage15EScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
      </div>
      <div class="i-v i-v-2">
        <span class="sl-d2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".my-target16">
          <span
            v-if="isHomepage11EScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target17">
          <span
            v-if="isHomepage12EScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target18">
          <span
            v-if="isHomepage13EScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target19">
          <span
            v-if="isHomepage14EScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target20">
          <span
            v-if="isHomepage15EScrolltoActive"
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
    <Homepage11Target
      v-if="isHomepage11EScrolltoActive"
      id="my-target11"
      class="ay-vr2 my-target16"
    />
    <Homepage12TargetTailoring
      v-if="isHomepage12EScrolltoActive"
      id="my-target12"
      class="ay-vr2 my-target17"
    />
    <Homepage13Target
      v-if="isHomepage13EScrolltoActive"
      id="my-target13"
      class="ay-vr2 my-target18"
    />
    <Homepage14Target
      v-if="isHomepage14EScrolltoActive"
      id="my-target14"
      class="ay-vr2 my-target19"
    />
    <Homepage15Target
      v-if="isHomepage15EScrolltoActive"
      id="my-target15"
      class="ay-vr2 my-target20"
    />
  </div>
</template>

<script>
import Homepage11EScrollto from '~/components/homepage/subcomp/Homepage11EScrollto.vue'
import Homepage12EScrollto from '~/components/homepage/subcomp/Homepage12EScrollto.vue'
import Homepage13EScrollto from '~/components/homepage/subcomp/Homepage13EScrollto.vue'
import Homepage14EScrollto from '~/components/homepage/subcomp/Homepage14EScrollto.vue'
import Homepage15EScrollto from '~/components/homepage/subcomp/Homepage15EScrollto.vue'
import Homepage11Target from '~/components/homepage/subcomp/Homepage11Target.vue'
import Homepage12TargetTailoring from '~/components/homepage/subcomp/Homepage12TargetTailoring.vue'
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
    Homepage11EScrollto,
    Homepage12EScrollto,
    Homepage13EScrollto,
    Homepage14EScrollto,
    Homepage15EScrollto,
    Homepage11Target,
    Homepage12TargetTailoring,
    Homepage13Target,
    Homepage14Target,
    Homepage15Target,
    Spinner: () => import('~/components/spinner/Spinner.vue'),
    HomepageMenu11EScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu11EScrollto.vue'),
    HomepageMenu12EScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu12EScrollto.vue'),
    HomepageMenu13EScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu13EScrollto.vue'),
    HomepageMenu14EScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu14EScrollto.vue'),
    HomepageMenu15EScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu15EScrollto.vue'),
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
      father: 'Homepage5Scrollto'
    };
  },
  computed: {
    isHomepage11EScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE11;
    },
    isHomepage12EScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE12;
    },
    isHomepage13EScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE13;
    },
    isHomepage14EScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE14;
    },
    isHomepage15EScrolltoActive() {
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
    toggleHomepage11EScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE11) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE11;
    },
    toggleHomepage12EScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE12) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE12;
    },
    toggleHomepage13EScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE13) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE13;
    },
    toggleHomepage14EScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE14) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE14;
    },
    toggleHomepage15EScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE15) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE15;
    },
    prevent11() {
      if (this.isHomepage11EScrolltoActive) {
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

.svtp-c {
  position: absolute;
  right: 80px;
  bottom: 20vh;
  transform: translate3d(30px, 0, 0) scale(0.5);
}

.svt-c {
  position: absolute;
  right: 80px;
  bottom: 10vh;
  transform: translate3d(30px, 0, 0) scale(0.5);
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
