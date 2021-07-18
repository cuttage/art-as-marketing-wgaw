<template>
  <InputParent :dsk="dsk" :mob="mob">
    <template v-slot:inputBlueContent>
      <component :is="mob ? 'InputMob' : 'InputDesk'" class="b_s_h" @hook:created="chldresponse" @hook:beforeDestroy="chldresponse" :key="diapobKeySub1"></component>
    </template>
  </InputParent>
</template>

<script>
import InputParent from '~/components/slots/desktop/InputParent.vue'
import InputDesk from '~/components/slots/desktop/InputDesk.vue'
import InputMob from '~/components/slots/InputMob.vue'
import { mapState } from 'vuex'
export default {
  props: ['dsk', 'mob'],
  data() {
    return {
      diapobKeySub1: "bbb" + 2
    }
  },
  components: {
    InputParent,
    InputDesk,
    InputMob
  },
  computed: mapState(['toggleSidebar']),
  methods: {
    chldresponse() {
      if (this.toggleSidebar === false) {
        return this.$bus.$emit('nav-logo-b')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.b_s_h {
  z-index: 6;
}
</style>
