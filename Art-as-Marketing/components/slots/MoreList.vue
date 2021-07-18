<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <main class="s-w">
    <nav class="s-nvd">
      <menu class="s-nvd__cnt">

        <li v-for="(active, menu) in menus" class="s-nvd__lb"
          :class="{
            's-nvd__lb--active': active,
            's-nvd__lb--sfilter': sft[menu].length
          }" @click="setMenu(menu, active)">
          {{ menu }}
        </li>
      </menu>
    </nav>

    <transition-group name="snp" tag="section" class="snp" :style="snp">
      <menu v-for="(options, sfilter) in sft" class="sft"
        v-show="menus[sfilter]" ref="menu" :key="menus[sfilter]">

        <span class="sft-i">
          <slot></slot>
        </span>
      </menu>
    </transition-group>
  </main>
</template>

<script>
import useRaw from '~/composables/raw-data.js'
export default {
  setup (props) {
    const { firstArrMore } = useRaw();
    return {
      firstArrMore
    }
  },
  props: ['xv'],
  data() {
    return {
      snp: { height: 0 },
      sft: { more: {} },
      menus: { more: false }
    }
  },
  computed: {
    activeMenu() {
      return Object.keys(this.menus).reduce(($$, set, i) => (this.menus[set]) ? i : $$, -1)
    }
  },
  methods: {
    setMenu(menu, active) {
      Object.keys(this.menus).forEach(tab => {
        this.menus[tab] = !active && tab === menu
      })
    }
  },
  watch: {
    activeMenu(index, from) {
        if (index === from) return;

        this.$nextTick(() => {(!this.$refs.menu || !this.$refs.menu[index]) ? this.snp.height = 0 : this.snp.height = `${this.$refs.menu[index].clientHeight + 16}px`})
      },
      xv: {
        handler: function(newVal, oldVal, menu, active) {
          if (newVal && newVal !== oldVal) {
            this.setMenu(menu, active)
          }
        },
        immediate: true
      }
  },
  beforeMount() {
    this.firstArrMore.body.forEach(({ keyword }) => {
      this.$set(this.sft.more, keyword, false)
    })
  }
}
</script>

<style lang="scss" scoped>
.s-w {
  z-index: 999;
  position: relative;
  font-family: 'AtkinsonHyperlegibleRegular';
  text-rendering: geometricPrecision;
  font-size: 27.82428px;
  line-height: 1.35;
  color: #333;
}
.s-nvd {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin-top: 1em;
  margin-right: 6.59918336px;
  margin-left: 6.59918336px;
  padding: 0.35rem 12.65448px 0.27rem 12.65448px;
  border-bottom: 1px solid #c5d0d1;
  &__cnt {
    display: flex;
    margin: 0; padding: 0;
  }
  &__lb {
    z-index: 1;
    position: relative;
    list-style: none;
    text-transform: capitalize;
    cursor: pointer;
  }
}
.snp {
  z-index: 999;
  max-width: 100vw;
  transition: height 350ms;
  will-change: height, opacity, width;
  &-enter,
  &-leave-to { opacity: 0 }
  &-leave,
  &-enter-to { opacity: 1 }
  &-enter-active,
  &-leave-active {
    width: 100%;
    transition: opacity 200ms ease-in-out;
  }
}
.sft {
  display: flex;
  justify-content: center;
  padding: 0;
}
.sft-i {
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
