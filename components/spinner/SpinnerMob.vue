<template>
  <nav class="n-wrpr">
    <div class="t-wrpr">
      <transition name="apng" mode="out-in">
        <div v-if="getToggleCuttage" id="consultancy">
          <p>
            A Consultancy part of Cuttage Group
          </p>
        </div>
      </transition>
    </div>
    <div class="s-wrpr">
      <div id="s-cntnr" @click="toggleImage">
        <PxccAlt class="Pxcc"></PxccAlt>
      </div>
    </div>
  </nav>
</template>

<script>
import styles from '~/assets/scss/styles.scss'
import { enactC } from '~/composables/toggle-cuttage-store.js'
import animationWaiter from '~/mixins/animation-waiter.js';
//import 'requestidlecallback-polyfill'; //remove with safari 14

export default {
  data() {
    return {
      promiseList: this.promiseGenerator()
    }
  },
  components: {
    PxccAlt: () => import('~/components/PxccAlt.vue'),
  },
  assets: {
    styles
  },
  setup () {
    const { toggleCuttage, getToggleCuttage } = enactC();

    return {
      toggleCuttage,
      getToggleCuttage
    }
  },
  mixins: [animationWaiter],
  methods: {
    async toggleImage() {
      let valA = await this.fetchWaitIdle();
      let valB = await this.toggleCuttage(valA);
      let valD = await this.promiseList.next(this.promiseRequestIdleCallback(valB));
      return valD;
    }
  }
}
</script>

<style lang="scss" scoped>
// Copyright (c) 2021 Marta Fattori
// This code is licensed under MIT license (see LICENSE-MIT for details)
$d: 60px;
$c: rgba(0, 169, 157, 0.9);
$m: rgba(210, 85, 147, 0.9);

.Pxcc {
  opacity: 1;
  visibility: visible;
  margin-right: 56px !important;
}

.n-wrpr {
  visibility: visible;
  display: flex;
  width: 100%;
  height: 500px;
  overflow-y: visible;
  overflow-x: hidden;
  .t-wrpr {
    flex-grow: 1;
    width: calc(10px + 54%);
    height: inherit;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    overflow: visible;
    margin-left: 4%;
  }
  .s-wrpr {
    flex-grow: 1;
    width: calc(10px + 46%);
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
  .n-wrpr {
    visibility: hidden;
    display: none;
    height: 0;
  }
}

.apng {
  backface-visibility: hidden;
  will-change: opacity, transform;
}
.apng-enter-to,
.apng-leave {
  opacity: 1;
}
.apng-enter-active {
  transition: all .4s;
}
.apng-leave-active {
  transition: all .05s cubic-bezier(1.0, 0.5, 0.8, 1.0) 220ms;
  transform: rotate(0.01);
}
.apng-enter, .apng-leave-to {
  opacity: 0;
}

#consultancy {
  overflow: visible;
  display: flex;
  text-align: right;
  z-index: 999;
  filter: brightness(1.1);
}

p {
  text-rendering: geometricPrecision;
  font-family: 'AtkinsonHyperlegibleBold';
  font-size: 1.145029419344325rem;
  line-height: 1.35;
  color: #333;
  text-transform: uppercase;
  padding-top: 3px;
  padding-bottom: 3px;
  letter-spacing: 0.04em;
  display: inline-block;
  font-weight: 560;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  cursor: pointer;
}

#s-cntnr {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.s-pg {
  display: flex;
  justify-content: center;
  align-items: center !important;
  width: 100%; height: $d;
  position: relative;
}

.sp-1::after,
.sp-2::after {
  backface-visibility: hidden !important;
  content: '';
  display: flex;
}

.sp-2 {
  &, &:before {
    backface-visibility: hidden !important;
    width: $d; height: $d;
    z-index: 999;
    border-radius: 50%;
  }

  backface-visibility: hidden !important;
  position: relative;
  box-sizing: border-box;
  background: url('~assets/svg/LogoAboutMob.svg') 50%/ cover padding-box !important;
}

.sp-1 {
  &, &:before {
    backface-visibility: hidden !important;
    width: $d; height: $d;
    z-index: 999;
    border-radius: 50%;
  }

  backface-visibility: hidden !important;
  position: relative;
  box-sizing: border-box;
  background: url('~assets/svg/LogoIndexMob.svg') 50%/ cover padding-box !important;
}

ul:after, ul:before {
  width: 100% !important;
  height: inherit !important;
}

@keyframes xAx {
  50% {
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    transform: translateX(10px);
  }
}

@keyframes ar {
  25%,
  75% {
    border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
  }
  50% {
    border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
  }
  100% {
    transform: rotate(360deg);
  }
}

ul {
  width: 100% !important;
  height: inherit !important;
  margin: 0 !important; padding: 0 !important;
  position: absolute;
  top: 0;
  list-style: none;
  li {
    z-index: 997;
    animation: xAx 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
    list-style: none;
    position: absolute;
    width: $d; height: $d;
    top: 0;
    animation: ar 22.5s infinite linear;
    filter: blur(4.28px);
    &:nth-child(2) {
      will-change: transform;
      background-color: $m;
      animation-delay: -7.5s;
      backface-visibility: hidden;
    }
    &:nth-child(3) {
      will-change: transform;
      background-color: $c;
      animation-direction: reverse;
      animation-delay: -15s;
      backface-visibility: hidden;
    }
  }
}


@keyframes yAx {
  50% {
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    transform: translateY(-10px);
  }
}

li::after {
  content: '';
  display: flex;
  background-color: rgba(255, 255, 255, 0.35);
  width: $d - 5px; height: $d - 5px;
  border-radius: 10%;
  animation: yAx 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
  backface-visibility: hidden;
  will-change: transform;
}
</style>
