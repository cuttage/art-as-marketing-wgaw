<template>
  <span class="hdspng">
    <div v-if="searchfactor.length > 0 && JSON.stringify(searchfactor) === JSON.stringify(block.keyword)" style="color: yellow;" v-for="block in filteredComp">
      <component :is="block.component" :block="block" :searchfactor="searchfactor" :key="block._uid"></component>
    </div>
  </span>
</template>

<script>
import memoizedUseMap from '~/composables/map-store.js'
import useRaw from '~/composables/raw-data.js'

export default {
  components: {
    G2MSSup: () => import("~/components/slots/G2MSSup.vue")
  },
  setup (props) {
    const { mappy } = memoizedUseMap();
    const { content } = useRaw();
    return {
      mappy,
      content
    }
  },
  data() {
    return {
      searchfactor: ''
    }
  },
  computed: {
    filteredComp() {
      return this.content.filter((block) => {
        return block.keyword.match(this.searchfactor);
      })
    }
  },
  created() {
    this.$bus.$on('search-change', (data) => {
      this.searchfactor = data;
    });
  }
}
</script>

<style lang="scss" scoped>
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
  .hdspng {
    display: none;
    visibility: hidden;
  }
}
</style>
