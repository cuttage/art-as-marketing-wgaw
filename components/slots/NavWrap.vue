<template>
  <Nav :desk="desk">
    <template v-slot:WrapperSlotA>
      <span class="l-t">Art as Marketing</span>
    </template>
    <template v-slot:WrapperSlotB>
      <span class="l-t">AAM</span>
    </template>
    <template v-slot:svgContent>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="-2 -2 47 47"
        aria-labelledby="title"
        role="presentation"
      >
        <title id="title" lang="en">Art as Marketing Logo</title>
        <g>
          <circle
            stroke="#00A99D"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="20"
            cy="20"
            r="18.19"
            transform="translate(-1 -1)"
            fill="#d25593"
          />
          <polyline
            fill="none"
            stroke="#00A99D"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="14.607,8.245 28.998,17.811 20.672,20.898 19.328,19.102 11.002,22.189 25.393,31.755"
          />
        </g>
      </svg>
    </template>
  </Nav>
</template>

<script>
import Nav from '~/components/Nav.vue'
export default {
  props: ['desk'],
  components: {
    Nav
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  font-size: 20px;
  color: #d25593;
  z-index: 6000;
  margin-left: 17px;
  writing-mode: vertical-rl;
}

@media screen and (max-width: 800px) {
  .title {
    margin-left: 13px;
  }
}

.title a,
.title a:hover {
  color: rgba(0, 0, 0, 0.8);
  margin: 60px 0px;
}

.title a.nuxt-link-active {
  color: black;
  transition: 0.2s color ease;
}

.l-t {
  font-size: 12px;
  font-size: calc(12px + 0.047vw);
  letter-spacing: 0.2em;
  vertical-align: super;
  padding-right: 5px;
  text-transform: uppercase;
}
</style>
