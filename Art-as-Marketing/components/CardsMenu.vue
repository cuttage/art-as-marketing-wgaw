<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <!--eslint-disable-->
  <div
    :key="compoKey"
    class="lngr1"
    v-once
  >
    <div
      ref="card"
      class="c-wrp"
    >
      <div class="card" :style="cardStyle">
        <placeholder class="c-bg" :style="cardBgImageLoading" rel="preload" as="image" />
        <img class="c-bg" :style="cardBgImage" rel="preload" as="image" />
        <div class="c-nf">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mousePX() {
      return this.mouseX / this.width
    },
    mousePY() {
      return this.mouseY / this.height
    },
    cardStyle() {
      let rX = this.mousePX * 6
      let rY = this.mousePY * -6
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.image})`
      }
    },
    cardBgImageLoading() {
      return {
        backgroundImage: `url(${this.loading})`
      }
    }
  },
  props: ['image', 'title', 'description', 'loading', 'active'],
  data() {
    return {
      isLoaded: false,
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
      compoKey: 'zz' + 1
    }
  },
  methods: {
    forceRerender() {
      this.compoKey += 1
    }
  },
  beforeMount() {
    let vm = this
    window.addEventListener('click', this.forceRerender)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.forceRerender)
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
    this.$nextTick().then(() => { this.isLoaded = true })
  }
}
</script>

<style exact lang="scss" scoped>
$primary: #D25593;
$hoverEasing: cubic-bezier(0.165, 0.84, 0.44, 1);
$returnEasing: cubic-bezier(0.165, 0.84, 0.44, 0.44);
.nuxt-link-c {
  color: white;
  text-decoration: none;
}

.lngr1 {
  padding: 1.999999999999992px;
  display: flex;
  cursor: pointer;

  &:hover {
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 7.999999999999995px 1.000000000000009px, rgba(white, 1) 0 0 0 0.160000000000012px, // min. 1px in Safari
        rgba(black, 0.66) 0 6.000000000000003px 12.000000000000005px 0, inset #333 0 0 0 1.000000000000009px,
        inset white 0 0 0 1.200000000000011px;
    }
  }
}

.c-wrp {
  transform: perspective(160.000000000000004px);
  transform-style: preserve-3d;

  &:hover {
    .c-nf {
      transform: translate3d(0, 6, 0);
    }
    .c-nf,
    .c-nf p {
      opacity: 1;
      -webkit-transition: all 0.6s $hoverEasing;
      transition: all 0.6s $hoverEasing;
    }

    .c-nf:after {
      transform: translate3d(0, 6, 0);
    }
    .c-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 47.999999999999996px;
  width: 48px;
  height: 64.000000000000012px;
  background-color: #333;
  overflow: hidden;
  border-radius: 1.999999999999992px;
  box-shadow: rgba(black, 0.66) 0 6.000000000000003px 12.000000000000005px 0, inset #333 0 0 0 1.000000000000009px,
    inset rgba(white, 0.5) 0 0 0 1.200000000000011px;
  transition: 1s $returnEasing;
}

.c-bg {
  opacity: 0.5;
  position: absolute;
  top: -4.00000000000001px;
  left: -4.00000000000001px;
  width: 120%;
  height: 125%;
  padding: 4.00000000000001px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover !important;
  transition: 7s $returnEasing, opacity 5s $returnEasing;
  pointer-events: none;
  image-rendering: crisp-edges;
}

.c-nf h1 {
  font-size: 7.199999999999988px !important;
  text-shadow: rgba(black, 0.5) 0 1.999999999999992px 1.999999999999992px;
  line-height: 12.000000000000005px !important;

}

p {
  line-height:7.000000000000012px !important;
}

// prettier-ignore
h1 + p, p + p {
  vertical-align: super;
}

.c-nf {
  position: absolute;
  padding-left: 4.00000000000001px;
  padding-right: 3.600000000000007px;
  color: #fff;
  transform: translate3d(0, 7.999999999999995px, 0);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    font-family: 'DIN Medium', sans-serif;
    font-size: 4.00000000000001px;
    text-shadow: rgba(black, 1) 0 0.400000000000004px 0.600000000000005px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
  }

  &:after {
    p,
    h1 {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image:
       linear-gradient(
        transparent 0%,
        rgba(#000, 0.6) 100%
       );
      background-blend-mode: overlay;
      opacity: 0;
      transform: translate3d(0, 7.999999999999995px, 0);
      transition: 5s $returnEasing ease-in;
    }
  }
}
</style>
