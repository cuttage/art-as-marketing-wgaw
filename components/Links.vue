<template>
  <!--eslint-disable-->
  <div class="n-lst">
    <HomepageMenu />
    <HomepageMenuAbout />
    <HomepageMenuPortfolio />
    <HomepageMenu />
    <HomepageMenuPortfolio />
  </div>
</template>

<script>
import HomepageMenu from '~/components/menu/HomepageMenu'
import HomepageMenuAbout from '~/components/menu/HomepageMenuAbout'
import HomepageMenuPortfolio from '~/components/menu/HomepageMenuPortfolio'

export default {
  name: 'Links',
  components: {
    HomepageMenu,
    HomepageMenuAbout,
    HomepageMenuPortfolio
  }
}
</script>

<style scoped>
.n-lst {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
}
</style>
