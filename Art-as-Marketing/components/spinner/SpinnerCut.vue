<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <nav
    id="nav"
    :class="{ 'activenav' : (page === 'about') }"
  >
    <div :class="{ 'activechild' : (page === 'about') }" id="s-cntnr">
      <transition name="list" tag="div">
        <div
          class="circ"
          key="circ"
          id="circ"
        >
          <div
            @mouseover="$store.dispatch('toggleCuttage')"
            @mouseleave="$store.dispatch('toggleCuttage')"
          >
            <div
              v-if="page === 'about'" class="sp-2"
            />
            <div
              v-else class="sp-1"
            />
          </div>
          <transition name="apng" mode="out-in">
            <div v-if="toggleCuttage" id="consultancy">
              <p>
                A Consultancy part of
              </p>
              <p>
                <img src="~assets/svg/CuttageLogo.svg"></img> Group
              </p>
            </div>
          </transition>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import styles from '~/assets/scss/styles.scss'

export default {
  assets: {
    styles
  },
  computed: {
    toggleCuttage() {
      return this.$store.getters['toggleCuttage']
    },
    page() {
      return this.$store.state.page
    }
  }
}
</script>

<style lang="scss" scoped>
$d: 60px;
$c: rgba(0, 169, 157, 0.9);
$m: rgba(210, 85, 147, 0.9);

.apng {
  backface-visibility: hidden;
}
.apng-enter-to,
.apng-leave{
  opacity: 1;
}
.apng-enter-active {
  transition: all .4s;
  transition-delay: 800ms;
}
.apng-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.apng-enter, .apng-leave-to {
  transform: translateX(-10px);
  transition-delay: 1500ms;
  opacity: 0;
}

#consultancy {
  overflow: visible;
  font-family: 'DIN-Medium' !important;
  position: relative;
  font-weight: 400;
  font-size: 0.701rem;
  margin-top: 12%;
  margin-left: -12%;
  min-width: 20%;
  max-width: 80%;
  line-height: 34.0632px;
  background: -webkit-gradient(linear, left top, right top, from(#f27881), to(#D25593));
  background: linear-gradient(to right, #f27881, #D25593);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: right;
  z-index: 999;
  filter: brightness(1.1);
}

img {
  max-width: 36.15%;
  max-height: 1em;
  filter: brightness(1.12);
  display: inline-table;
  position: relative;
  /* Adjust these values accordingly */
  top: 0.186237719298246rem;
  right: 0.160492105263158rem;
  z-index: 999;
}

nav {
  width: 374.02px;
  height: 200px;
  position: absolute;
  box-sizing: border-box;
  bottom: 104.28px !important;
  right: 32px !important;
}

ul {
  list-style: none;
  li {
    z-index: 997;
    animation: xAx 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
    list-style: none;
    position: absolute;
    width: $d - 5px; height: $d - 5px;
    bottom: 104.28px !important;
    right: 32px !important;
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

li::after {
  content: '';
  display: flex;
  background-color: rgba(255, 255, 255, 0.35);
  width: $d - 5px; height: $d - 5px;
  bottom: 104.28px !important;
  right: 32px !important;
  border-radius: 10%;
  animation: yAx 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
  backface-visibility: hidden;
  will-change: transform;
}

.sp-1::after,
.sp-2::after {
  backface-visibility: hidden !important;
  content: '';
  display: flex;
}

@keyframes yAx {
  50% {
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    transform: translateY(-10px);
  }
}

@keyframes xAx {
  50% {
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    transform: translateX(10px);
  }
}

.sp-1 {
	&, &:before {
    backface-visibility: hidden !important;
    width: $d; height: $d;
    z-index: 998;
		border-radius: 50%;
	}

  backface-visibility: hidden !important;
  position: absolute;
  bottom: 98.5px !important;
  right: 26.429333333333333px !important;
	box-sizing: border-box;
	background: url('~assets/svg/LogoIndex.svg') 50%/ cover padding-box !important;
}

.sp-2 {
	&, &:before {
    backface-visibility: hidden !important;
    width: $d; height: $d;
    z-index: 998;
		border-radius: 50%;
	}

  backface-visibility: hidden !important;
  position: absolute;
  bottom: 98.5px !important;
  right: 26.429333333333333px !important;
	box-sizing: border-box;
	background: url('~assets/svg/LogoAbout.svg') 50%/ cover padding-box !important;
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
</style>
