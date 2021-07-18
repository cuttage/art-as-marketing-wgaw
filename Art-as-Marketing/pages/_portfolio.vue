<template>
  <span>
    <InputParentNone class="g2-bk-mob" :mob="mob" />
    <InputWrap class="g2-bk-mob" :mob="mob" :dsk="dsk" />
    <component :is="mob ? 'InputReceiver' : 'InputReceiverDesk'" class="g2-bk-mob" />
  </span>
</template>

<script>
import InputParentNone from '~/components/slots/InputParentNone.vue';
import InputWrap from '~/components/slots/InputWrap.vue';
import InputReceiver from '~/components/slots/InputReceiver.vue';
import InputReceiverDesk from '~/components/slots/desktop/InputReceiverDesk.vue';

export default {
  head() {
    return {
      title: this.capitalize + ' page',
      meta: [
        {
          hid: this.title + ' hid',
          name: this.title,
          content: this.capitalize + ' page description'
        }
      ]
    }
  },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data() {
    return {
      dsk: 'dsk',
      mob: null,
      title: this.$route.params.portfolio
    }
  },
  components: {
    InputParentNone,
    InputWrap,
    InputReceiver,
    InputReceiverDesk
  },
  computed: {
    capitalize() {
      return this.$route.params.portfolio.charAt(0).toUpperCase() + this.$route.params.portfolio.slice(1)
    }
  },
  methods: {
    setMob() {
      return (this.$route.params.portfolio === 'touchportfolio') ? this.mob = 'mob' : this.mob = null
    }
  },
  created() {
    this.setMob()
  }
}
</script>
