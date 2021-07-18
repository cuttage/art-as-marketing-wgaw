<template>
  <div>
    <NavWrap class="n-hd-mob" />
    <SideNavMob />
    <slot></slot>
    <footer id="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import NavWrap from '~/components/slots/NavWrap.vue'
import SideNavMob from '~/components/SideNavMob.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'Layout_0Mob',
  components: {
    NavWrap,
    SideNavMob,
    Footer
  }
}
</script>

<style lang="scss">
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
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
  .n-hd-mob {
    visibility: hidden;
    display: none;
    height: 0;
  }
}
</style>
