<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<script>
export default {
  render (createElement) {
    return createElement(
      this.tag,
      {
        on: Object.assign(this.$listeners, {
          click: this.handleClick
        })
      },
      this.$slots.default
    )
  },
  data () {
    return {
      clickCount: 0,
      clickTimer: null
    };
  },
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    delay: {
      type: Number,
      default: 250
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()

      this.clickCount++

      if (this.clickCount === 1) {
        this.clickTimer = setTimeout(() => {
          this.clickCount = 0
          this.$emit('single-click')
        }, this.delay)
      } else if (this.clickCount === 2) {
        clearTimeout(this.clickTimer)
        this.clickCount = 0
        this.$emit('double-click')
      }
    }
  }
};
</script>
