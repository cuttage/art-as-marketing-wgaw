<template>
  <component :is="pickSN" />
</template>

<script>
import SideNav from '~/components/SideNav.vue'
import SideNavPor from '~/components/SideNavPor.vue'
import { mapState } from 'vuex'
export default {
  name: 'SideNavPicker',
  components: {
    SideNav,
    SideNavPor
  },
  computed: {
    ...mapState({
      page: 'page'
    }),
    pickSN() {
      return (this.page === 'portfolio' || this.page === 'portfolio-id') ? 'SideNavPor' : 'SideNav'
    }
  }
}
</script>
