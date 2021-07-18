<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div>
    <Homepage11DScrollto
      v-if="isHomepage11DScrolltoActive"
      class="ay2"
    />
    <Homepage12DScrollto
      v-if="isHomepage12DScrolltoActive"
      class="ay2"
    />
    <Homepage13DScrollto
      v-if="isHomepage13DScrolltoActive"
      class="ay2"
    />
    <Homepage14DScrollto
      v-if="isHomepage14DScrolltoActive"
      class="ay2"
    />
    <Homepage15DScrollto
      v-if="isHomepage15DScrolltoActive"
      class="ay2"
    />

    <div class="c-t2">
      <div class="it-2 item1" @mouseover="toggleHomepage11DScrollto" />
      <div class="it-2 item2" @mouseover="toggleHomepage12DScrollto" />
      <div class="it-2 item3" @mouseover="toggleHomepage13DScrollto" />
      <div class="it-2 item4" @mouseover="toggleHomepage14DScrollto" />
      <div class="it-2 item5" @mouseover="toggleHomepage15DScrollto" />
    </div>
    <div class="c-t-v2">
      <div class="i-v i-v-1">
        <vue-next-level-scroll target="#my-target11">
          <HomepageMenu11DScrollto
            v-if="isHomepage11DScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target12">
          <HomepageMenu12DScrollto
            v-if="isHomepage12DScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target13">
          <HomepageMenu13DScrollto
            v-if="isHomepage13DScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target14">
          <HomepageMenu14DScrollto
            v-if="isHomepage14DScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target15">
          <HomepageMenu15DScrollto
            v-if="isHomepage15DScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
      </div>
      <div class="i-v i-v-2">
        <span class="sl-d2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".my-target16">
          <span
            v-if="isHomepage11DScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target17">
          <span
            v-if="isHomepage12DScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target18">
          <span
            v-if="isHomepage13DScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target19">
          <span
            v-if="isHomepage14DScrolltoActive"
            class="s-d2-tv"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target20">
          <span
            v-if="isHomepage15DScrolltoActive"
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
      v-if="isHomepage11DScrolltoActive"
      id="my-target11"
      class="ay-vr2 my-target16"
    />
    <Homepage12TargetDesign
      v-if="isHomepage12DScrolltoActive"
      id="my-target12"
      class="ay-vr2 my-target17"
    />
    <Homepage13Target
      v-if="isHomepage13DScrolltoActive"
      id="my-target13"
      class="ay-vr2 my-target18"
    />
    <Homepage15Target
      v-if="isHomepage14DScrolltoActive"
      id="my-target14"
      class="ay-vr2 my-target19"
    />
    <Homepage14Target
      v-if="isHomepage15DScrolltoActive"
      id="my-target15"
      class="ay-vr2 my-target20"
    />
  </div>
</template>

<script>
import Homepage11DScrollto from '~/components/homepage/subcomp/Homepage11DScrollto.vue'
import Homepage12DScrollto from '~/components/homepage/subcomp/Homepage12DScrollto.vue'
import Homepage13DScrollto from '~/components/homepage/subcomp/Homepage13DScrollto.vue'
import Homepage14DScrollto from '~/components/homepage/subcomp/Homepage14DScrollto.vue'
import Homepage15DScrollto from '~/components/homepage/subcomp/Homepage15DScrollto.vue'
import Homepage11Target from '~/components/homepage/subcomp/Homepage11Target.vue'
import Homepage12TargetDesign from '~/components/homepage/subcomp/Homepage12TargetDesign.vue'
import Homepage13Target from '~/components/homepage/subcomp/Homepage13Target.vue'
import Homepage14Target from '~/components/homepage/subcomp/Homepage14Target.vue'
import Homepage15Target from '~/components/homepage/subcomp/Homepage15Target.vue'

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
    Homepage11DScrollto,
    Homepage12DScrollto,
    Homepage13DScrollto,
    Homepage14DScrollto,
    Homepage15DScrollto,
    Homepage11Target,
    Homepage12TargetDesign,
    Homepage13Target,
    Homepage14Target,
    Homepage15Target,
    Spinner: () => import('~/components/spinner/Spinner.vue'),
    HomepageMenu11DScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu11DScrollto.vue'),
    HomepageMenu12DScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu12DScrollto.vue'),
    HomepageMenu13DScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu13DScrollto.vue'),
    HomepageMenu14DScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu14DScrollto.vue'),
    HomepageMenu15DScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu15DScrollto.vue'),
    VueNextLevelScroll: () => import('vue-next-level-scroll')
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE
    };
  },
  computed: {
    isHomepage11DScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE11;
    },
    isHomepage12DScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE12;
    },
    isHomepage13DScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE13;
    },
    isHomepage14DScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE14;
    },
    isHomepage15DScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE15;
    }
  },
  methods: {
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    toggleHomepage11DScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE11) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE11;
    },
    toggleHomepage12DScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE12) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE12;
    },
    toggleHomepage13DScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE13) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE13;
    },
    toggleHomepage14DScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE14) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE14;
    },
    toggleHomepage15DScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE15) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE15;
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
  .c-t-v2 {
    display: flex;
    flex-direction: row;
    height: 35vh;
    margin-top: 5vh;
    align-self: center;
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
  .c-t-v2 {
    display: flex;
    flex-direction: row;
    height: 287.34px;
    margin-top: 41.048571428571429px;
    align-self: center;
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
