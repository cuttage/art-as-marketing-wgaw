<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div>
    <NoneMob class="g2-bk-mob" />
    <div class="w-c-b-v-mob">
      <main class="rchv" id="mapp" v-pan="onPan">
        <article class="article">
          <Homepage1DialogNowrap
            v-if="isHomepage1DialogActive"
            class="ayt n1"
          />
          <Homepage2Dialog
            v-if="isHomepage2DialogActive"
            class="ayt n2"
          />
          <Homepage3DialogNowrap
            v-if="isHomepage3DialogActive"
            class="ayt n3"
          />
          <Homepage4Dialog
            v-if="isHomepage4DialogActive"
            class="ayt n4"
          />
          <Homepage5DialogSmall
            v-if="isHomepage5DialogSmallActive"
            class="ayt n5"
          />
        </article>

        <article class="article">
          <div class="yyj" ref="yyj" v-if="selectedContent">{{ selectedContent }}</div>
          <div class="yyj" ref="yyj" v-else>We use art for experiential marketing. Browse Below</div>
        </article>
        <article class="article">
          <section class="slider">
            <ul class="slider__lst" ref="list">
              <li v-for="(slide, index) in slides" v-bind:key="slide.id"
                  class="slider__tm"
                  v-tap="(e) => onTap(e, slide)"
                  :style="{backgroundColor: colors[index]}">
                {{ slide }}
              </li>
            </ul>
          </section>
        </article>
        <article class="article">
          <Subtouch1 v-if="isHomepage1DialogActive" />
          <Subtouch2 v-if="isHomepage2DialogActive" />
          <Subtouch3 v-if="isHomepage3DialogActive" />
          <Subtouch4 v-if="isHomepage4DialogActive" />
          <Subtouch5 v-if="isHomepage5DialogSmallActive" />
        </article>
      </main>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  require('~/plugins/directives')
}
import NoneMob from '~/components/slots/NoneMob.vue'
import Homepage1DialogNowrap from '~/components/homepage/Homepage1DialogNowrap.vue'
import Homepage2Dialog from '~/components/homepage/Homepage2Dialog.vue'
import Homepage3DialogNowrap from '~/components/homepage/Homepage3DialogNowrap.vue'
import Homepage4Dialog from '~/components/homepage/Homepage4Dialog.vue'
import Homepage5DialogSmall from '~/components/homepage/Homepage5DialogSmall.vue'
import { TweenMax, Elastic, Sine } from "gsap/dist/gsap"
import Subtouch1 from '~/components/subtouch/Subtouch1.vue'
import Subtouch2 from '~/components/subtouch/Subtouch2.vue'
import Subtouch3 from '~/components/subtouch/Subtouch3.vue'
import Subtouch4 from '~/components/subtouch/Subtouch4.vue'
import Subtouch5 from '~/components/subtouch/Subtouch5.vue'

const DIALOG_TYPE = {
  NONE: 1,
  HOMEPAGE1: 1,
  HOMEPAGE2: 1,
  HOMEPAGE3: 1,
  HOMEPAGE4: 1,
  HOMEPAGE5: 1
};

export default {
  head: {
    title: 'Touch home page',
    meta: [
      {
        hid: 'touch home hid',
        name: 'touch home',
        content: 'Touch home page description'
      }
    ]
  },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  components: {
    NoneMob,
    Homepage1DialogNowrap,
    Homepage2Dialog,
    Homepage3DialogNowrap,
    Homepage4Dialog,
    Homepage5DialogSmall,
    Subtouch1,
    Subtouch2,
    Subtouch3,
    Subtouch4,
    Subtouch5
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE,
      slides: [
  			"Business",
  			"Employer",
  			"FinTech",
  			"Agency",
  			"Land Developer"
  		],
      yyjs: [
        "Navigate to know more about Business",
        "Navigate to know more about Employer",
        "Navigate to know more about FinTech",
        "Navigate to know more about Agency",
        "Navigate to know more about Land Developer",
      ],
      colors: [
        "blue",
        "yellow",
        "blue",
        "yellow",
        "blue"
      ],
      currentOffset: 0,
      selected: ""
    }
  },
	computed: {
    isHomepage1DialogActive() {
      if (this.selected === "Business") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE1;
      }
    },
    isHomepage2DialogActive() {
      if (this.selected === "Employer") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE2;
      }
    },
    isHomepage3DialogActive() {
      if (this.selected === "FinTech") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE3;
      }
    },
    isHomepage4DialogActive() {
      if (this.selected === "Agency") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE4;
      }
    },
    isHomepage5DialogSmallActive() {
      if (this.selected === "Land Developer") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE5;
      }
    },
		overflowRatio() {
			return this.$refs.list.scrollWidth / this.$refs.list.offsetWidth;
		},
		itemWidth() {
			return this.$refs.list.scrollWidth / this.slides.length;
		},
		selectedContent() {
			if (this.selected === "Business") {
				return this.yyjs[this.slides.indexOf('Business')];
			} else if (this.selected === "Employer") {
        return this.yyjs[this.slides.indexOf('Employer')];
      } else if (this.selected === "FinTech") {
        return this.yyjs[this.slides.indexOf('FinTech')];
      } else if (this.selected === "Agency") {
        return this.yyjs[this.slides.indexOf('Agency')];
      } else if (this.selected === "Land Developer") {
        return this.yyjs[this.slides.indexOf('Land Developer')];
      }
			return "";
		},
		count() {
			return this.slides.length
		}
	},
  methods: {
		onPan(e) {
			const dragOffset = 100 / this.itemWidth * e.deltaX / this.count * this.overflowRatio;

			const transform = this.currentOffset + dragOffset;

			this.$refs.list.style.setProperty("--x", transform);

			if (e.isFinal) {
				this.currentOffset = transform;
				const maxScroll = 100 - this.overflowRatio * 100;
				let finalOffset = this.currentOffset;

				// scrolled to last item
				if (this.currentOffset <= maxScroll) {
					finalOffset = maxScroll;
				} else if (this.currentOffset >= 0) {
					// scroll to first item
					finalOffset = 0;
				} else {
					// animate to next item according to pan direction
					const index = this.currentOffset / this.overflowRatio / 100 * this.count;
					const nextIndex = e.deltaX <= 0 ? Math.floor(index) : Math.ceil(index);
					finalOffset = 100 * this.overflowRatio / this.count * nextIndex;
				}

				// bounce back animation
				TweenMax.fromTo(
					this.$refs.list,
					0.4,
					{ '--x': this.currentOffset },
					{
						'--x': finalOffset,
						ease: Elastic.easeOut.config(1, 0.8),
						onComplete: () => {
							this.currentOffset = finalOffset;
						}
					}
				);
			}
		},
		onTap(e, value) {
			if (value) {
				TweenMax.to(e.target, 0.12, { scale: 1.1, yoyo: true, repeat: 1, ease: Sine.easeOut})
				this.selected = value;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
$primary: #D25593;
$dur: 2s;
$timing: ease-out;

$cta-color: yellow;

.w-c-b-v-mob {
  display: block;
  visibility: visible;
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
  .w-c-b-v-mob {
    display: none;
    visibility: hidden;
  }
}

.ayt {
  border-radius: 5px;
  text-rendering: geometricPrecision;
  height: auto;
  background-color: blue !important;
}
.slider {
	width: 100%;
	height: 120px;
	overflow: visible;
  position: relative;
  white-space: nowrap;

	&__lst {
		display: flex;
		width: 100%;
		height: 100%;

		font-size: 2rem;
		backface-visibility: hidden;
		transform: translateX(calc(var(--x, 0) * 1%));
	}

	&__tm {
		position: relative;
		flex: 0 0 140px;

		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		margin-right: 12px;
		padding: 6px;
		box-sizing: border-box;

		border-radius: 8px;
		text-align: center;
  	transition: opacity 0.15s ease;
		color: $primary;

		&:focus {
			opacity: 0.8;
		}
	}
}

li:nth-child(1) {
  animation: g-t-glw $dur $timing infinite;
}

@keyframes g-t-glw {
  from {
    text-shadow: 0 0.25px 0.25px rgba(0,0,0,0.125),
                0 0.5px 0.5px rgba(0,0,0,0.1),
                0 1.25px 1.25px rgba(0,0,0,0.075),
                0 2.5px 2.5px rgba(0,0,0,0.05),
                0 5px 5px rgba(0,0,0,0.025);
  }
  37.5% {
      text-shadow: 0 0.25px 0.28125px rgba($cta-color,0.01041666666666666667),
                  0 0.5px 0.5625px rgba($cta-color,0.0208333333333333333),
                  0 1.25px 1.125px rgba($cta-color,0.03125),
                  0 2.5px 2.25px rgba($cta-color,0.041666666666666667),
                  0 5px 4.5px rgba($cta-color,0.05208333333333333333);
  }
  to {
    text-shadow: 0 0.25px 0.25px rgba(0,0,0,0.125),
                0 0.5px 0.5px rgba(0,0,0,0.1),
                0 1.25px 1.25px rgba(0,0,0,0.075),
                0 2.5px 2.5px rgba(0,0,0,0.05),
                0 5px 5px rgba(0,0,0,0.025);
  }
}

.yyj  {
  background-color: blue;
  border-radius: 5px;
  text-rendering: geometricPrecision;
	padding: 30px;
	font-size: 1.4rem;
  color: $primary;
	backface-visibility: hidden;
  font-family:'DIN Medium', sans-serif;
  line-height: 42px;
  text-align: center;
}

body {
	width: 100%;
	height: 100%;
}

ul {
  font-family:'DIN Medium', sans-serif;
	font-size: 16px;
  margin: 0 !important;
  padding: 0 !important;
}

#mapp {
	height: 100%;
	width: 100%;
	box-sizing: border-box;

	overflow: hidden;
}

.rchv {
  display: grid;
  grid-template-columns: 100vw;
  grid-gap: 1em;
  grid-auto-flow: dense;
}
//(min-width: 690px)
@media only screen and (min-width: 690px) {
  .ayt.n1 {
    height: calc(17.584817452319324rem + 50px) !important;
    min-height: calc(17.584817452319324rem + 50px) !important;
  }
  .ayt.n2,
  .ayt.n3,
  .ayt.n4 {
    height: calc(13.577173490338417rem + 50px) !important;
    min-height: calc(13.577173490338417rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(15.912178069188728rem + 50px) !important;
    min-height: calc(15.912178069188728rem + 50px) !important;
  }
}
//(max-width: 689px)
@media only screen and (max-width: 689px) {
  .ayt.n1 {
    height: calc(17.475573394447436rem + 50px) !important;
    min-height: calc(17.475573394447436rem + 50px) !important;
  }
  .ayt.n2,
  .ayt.n3,
  .ayt.n4 {
    height: calc(13.534199088559807rem + 50px) !important;
    min-height: calc(13.534199088559807rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(15.802131379422437rem + 50px) !important;
    min-height: calc(15.802131379422437rem + 50px) !important;
  }
}
//(max-width: 556px)
@media only screen and (max-width: 556px) {
  .ayt.n1 {
    height: calc(17.381198463444237rem + 50px) !important;
    min-height: calc(17.381198463444237rem + 50px) !important;
  }
  .ayt.n2,
  .ayt.n3,
  .ayt.n4 {
    height: calc(13.434792012627071rem + 50px) !important;
    min-height: calc(13.434792012627071rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(15.727738621068117rem + 50px) !important;
    min-height: calc(15.727738621068117rem + 50px) !important;
  }
}
//(max-width: 532px)
@media only screen and (max-width: 532px) {
  .ayt.n1 {
    height: calc(17.497212022057692rem + 50px) !important;
    min-height: calc(17.497212022057692rem + 50px) !important;
  }
  .ayt.n2,
  .ayt.n3,
  .ayt.n4 {
    height: calc(13.537396548010953rem + 50px) !important;
    min-height: calc(13.537396548010953rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(15.823158405287476rem + 50px) !important;
    min-height: calc(15.823158405287476rem + 50px) !important;
  }
}
//(max-width: 524px)
@media only screen and (max-width: 524px) {
  .ayt.n1 {
    height: calc(16.72130295480112rem + 50px) !important;
    min-height: calc(16.72130295480112rem + 50px) !important;
  }
  .ayt.n2,
  .ayt.n3,
  .ayt.n4  {
    height: calc(11.701375902532816rem + 50px) !important;
    min-height: calc(11.701375902532816rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(13.859004065373089rem + 50px) !important;
    min-height: calc(13.859004065373089rem + 50px) !important;
  }
}
//(max-width: 456px)
@media only screen and (max-width: 456px) {
  .ayt.n1 {
    height: calc(16.717159232644633rem + 50px) !important;
    min-height: calc(16.717159232644633rem + 50px) !important;
  }
  .ayt.n2,
  .ayt.n3,
  .ayt.n4  {
    height: calc(11.716292547639414rem + 50px) !important;
    min-height: calc(11.716292547639414rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(13.843910030560067rem + 50px) !important;
    min-height: calc(13.843910030560067rem + 50px) !important;
  }
}
//(max-width: 419px)
@media only screen and (max-width: 419px) {
  .ayt.n1 {
    height: calc(17.055146933682664rem + 50px) !important;
    min-height: calc(17.055146933682664rem + 50px) !important;
  }
  .ayt.n2 {
    height: calc(11.309365166565494rem + 50px) !important;
    min-height: calc(11.309365166565494rem + 50px) !important;
  }
  .ayt.n3,
  .ayt.n4 {
    height: calc(11.855843982941402rem + 50px) !important;
    min-height: calc(11.855843982941402rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(14.13757703600184rem + 50px) !important;
    min-height: calc(14.13757703600184rem + 50px) !important;
  }
}
//(max-width: 398px)
@media only screen and (max-width: 398px) {
  .ayt.n1 {
    height: calc(15.935286354622841rem + 50px) !important;
    min-height: calc(15.935286354622841rem + 50px) !important;
  }
  .ayt.n2,
  .ayt.n3,
  .ayt.n4 {
    height: calc(11.090661539523833rem + 50px) !important;
    min-height: calc(11.090661539523833rem + 50px) !important;
  }
  .ayt.n5 {
    height: calc(13.163594951826058rem + 50px) !important;
    min-height: calc(13.163594951826058rem + 50px) !important;
  }
}
</style>
