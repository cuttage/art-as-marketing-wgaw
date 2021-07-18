<template>
  <!--eslint-disable-->
  <ul class="n-lst" @click.once="toggle">
    <li>index</li>
    <li>about</li>
    <li>portfolio</li>
    <li>index</li>
    <li>portfolio</li>
    <NavList v-if="rtmO === true && glow === true" class="trbk" :object2="object2" :key="appLinkKeyBk" />
  </ul>
</template>

<script>
import NavList from '~/components/menu/mob/NavList.vue'
import { mapState } from 'vuex'
export default {
  name: 'LinksMob',
  data() {
    return {
      appLinkKeyBk: 'yuh' + 0,
      glow: false,
      object2: {
        about: false,
        portfolio: false
      }
    }
  },
  components: {
    NavList
  },
  computed: mapState(['rtmO']),
  methods: {
    toggle() {
      return this.glow = true
    }
  }
}
</script>

<style lang="scss" scoped>
.n-lst {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  pointer-events: none;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  margin: auto;
  background-color: transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  text-transform: capitalize;
  list-style: none;
  font-family: 'AtkinsonHyperlegibleRegular';
  text-rendering: geometricPrecision;
  font-size: 27.82428px;
  line-height: 1.35;
  color: #e3e4e1;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.trbk {
  z-index: -1;
}
</style>
