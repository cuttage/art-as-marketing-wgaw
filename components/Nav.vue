<template>
  <div>
    <header>
      <div v-if="portflioCheck" class="logo" :class="(preventPropertyB && desk) ? 'cgo2' : ''" role="button" @click.prevent="giveTime"> <!--:disable only works on button-->
        <slot :name="desk ? 'WrapperSlotA' : 'WrapperSlotB'"></slot>
        <slot name="svgContent"></slot>
      </div>
      <div v-else class="logo" :class="(preventPropertyA && desk) ? 'cgo2' : ''" role="button" @click.prevent="giveTime"> <!--:disable only works on button-->
        <slot :name="desk ? 'WrapperSlotA' : 'WrapperSlotB'"></slot>
        <slot name="svgContent"></slot>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['desk'],
  data() {
    return {
      rAm: false,
      rBm: false,
      alwaysTrue: true,
      cgo2: "cgo2",
      smallDebounce: 250,
      unwatchitB: null,
      longDebounce: 35000
    }
  },
  computed: {
    ...mapState({
      toggleSidebar: 'toggleSidebar',
      page: 'page',
      toggleMarta: 'toggleMarta',
      timerA: 'timerA',
      timerB: 'timerB',
      timerC: 'timerC',
      timerD: 'timerD',
      timerJ: 'timerJ'
    }),
    portflioCheck() {
      return this.page === 'portfolio' || this.page === 'touchportfolio' || this.page === 'portfolio-id'
    },
    preventProperty() {
      return (this.rBm === true) ? this.rBm : this.alwaysTrue
    },
    preventPropertyA() {
      return this.toggleMarta === false && this.rAm === false
    },
    preventPropertyB() {
      return this.preventPropertyA && this.preventProperty === true
    },
    eval() {
      return (this.portflioCheck) ? this.triggerB() : this.trigger()
    }
  },
  methods: {
    ...mapMutations({
        sidenavChange: 'TOGGLE_SIDEBAR',
        martaChange: 'TOGGLE_MARTA',
        changeTimerA: 'CHANGE_TIMER_A',
        changeTimerB: 'CHANGE_TIMER_B',
        changeTimerC: 'CHANGE_TIMER_C',
        changeTimerD: 'CHANGE_TIMER_D',
        changeTimerJ: 'CHANGE_TIMER_J'
    }),
    rAmTrue() {
      return this.rAm = true;
    },
    rAmFalse() {
      return this.rAm = false;
    },
    async trigger() {
      this.martaChange();
      this.changeTimerJ(await setTimeout(async () => {
        await ((this.toggleMarta === true) ? this.sidenavChange() : null);
      }, 0))
    },
    triggerB() {
      if (this.preventProperty === true) {
        this.trigger()
      }
    },
    async giveTime() {
      if (this.preventPropertyA && this.smallDebounce) {
        this.changeTimerB(await setImmediate(async () => {
          this.changeTimerC(await setTimeout(async () => {
            await this.eval;
          }, this.smallDebounce))
        }))
      } else if (this.preventPropertyA) {
        this.changeTimerD(await setImmediate(async () => {
          await this.eval;
        }))
      }
    },
    async newTime() {
      this.changeTimerA(await setTimeout(async () => {
        await this.rAmFalse();
      }, this.longDebounce))
    },
    resizeTheMap3() {
      return this.rBm = !this.rBm;
    }
  },
  created() {
    this.$bus.$on("nav-logo-b", this.resizeTheMap3);

    this.unwatchitB = this.$watch('toggleMarta', (newValue, oldValue) => {
      if (oldValue === true && this.smallDebounce) {
        this.rAmTrue();
        this.newTime();
      }
    })
  },
  mounted() {
    this.rAmTrue();
    this.newTime();
  },
  beforeDestroy() {
    this.changeTimerA(null);
    this.changeTimerB(null);
    this.changeTimerC(null);
    this.changeTimerD(null);
    this.changeTimerJ(null);
    this.unwatchitB();
  }
}
</script>

<style scoped>
.logo {
  position: fixed;
  top: 10px;
  right: 30px;
  font-size: 30px;
  color: #d25593;
  text-decoration: none;
  transition: 0.2s opacity ease;
  z-index: 5000;
  cursor: default;
  border-bottom: calc(0.55px + 0.007vw) solid rgba(255, 255, 255, 0.35);
}

.cgo2:hover {
  opacity: 0.8;
  transition: 0.25s opacity ease;
  transition-delay: 14s;
  cursor: pointer;
}
</style>
