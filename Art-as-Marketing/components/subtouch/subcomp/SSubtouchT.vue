<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div>
    <main v-if="selectedContent" class="rchv" id="mSS1" v-pan="onPan">
      <article class="article">
        <Homepage11Target
          v-if="isHomepage1DialogActive"
          class="A-bs n0"
        />
        <Homepage12TargetTailoringNowrap
          v-if="isHomepage2DialogActive"
          class="A-bs alternative"
        />
        <Homepage13Target
          v-if="isHomepage3DialogActive"
          class="A-bs n0"
        />
        <Homepage14Target
          v-if="isHomepage4DialogActive"
          class="A-bs n0"
        />
        <Homepage15Target
          v-if="isHomepage5DialogActive"
          class="A-bs n0"
        />
      </article>

      <article class="article">
        <FormMob class="c-f-c" v-if="selectedContent" />
      </article>
      <article class="article">
        <div class="cosa" ref="cosa">That's all folks!</div>
      </article>
      <article class="article">
        <section class="slider">
          <ul class="slider__nw" ref="newie">
            <li v-for="(indice, index) in indices" v-bind:key="indice.id"
                class="slider__tm"
                v-tap="(e) => onTap(e, indice)"
                :style="{backgroundColor: colors[index]}">
              {{ indice }}
            </li>
          </ul>
        </section>
      </article>
    </main>
    <main v-else class="rchv spchv nwmpp1" id="mSS1" v-pan="onPan">
      <article class="article">
        <Homepage11Target
          v-if="isHomepage1DialogActive"
          class="A-bs n0"
        />
        <Homepage12TargetTailoringNowrap
          v-if="isHomepage2DialogActive"
          class="A-bs alternative"
        />
        <Homepage13Target
          v-if="isHomepage3DialogActive"
          class="A-bs n0"
        />
        <Homepage14Target
          v-if="isHomepage4DialogActive"
          class="A-bs n0"
        />
        <Homepage15Target
          v-if="isHomepage5DialogActive"
          class="A-bs n0"
        />
      </article>

      <article class="article">
        <FormMob class="c-f-c" v-if="selectedContent" />
      </article>
      <article class="article">
        <div class="cosa" ref="cosa" v-if="selectedContent">{{ selectedContent }}</div>
        <div class="cosa nwcs" ref="cosa" v-else>We use art for experiential marketing. Browse Below</div>
      </article>
      <article class="article">
        <section class="slider">
          <ul class="slider__nw" ref="newie">
            <li v-for="(indice, index) in indices" v-bind:key="indice.id"
                class="slider__tm"
                v-tap="(e) => onTap(e, indice)"
                :style="{backgroundColor: colors[index]}">
              {{ indice }}
            </li>
          </ul>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import { TweenMax, Elastic, Sine } from "gsap/dist/gsap"
import Homepage11Target from '~/components/homepage/subcomp/Homepage11Target.vue'
import Homepage12TargetTailoringNowrap from '~/components/homepage/subcomp/Homepage12TargetTailoringNowrap.vue'
import Homepage13Target from '~/components/homepage/subcomp/Homepage13Target.vue'
import Homepage14Target from '~/components/homepage/subcomp/Homepage14Target.vue'
import Homepage15Target from '~/components/homepage/subcomp/Homepage15Target.vue'
import FormMob from '~/components/FormMob.vue'

const DIALOG_TYPE = {
  NONE: 1,
  HOMEPAGE1: 1,
  HOMEPAGE2: 1,
  HOMEPAGE3: 1,
  HOMEPAGE4: 1,
  HOMEPAGE5: 1
};

export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  components: {
    Homepage11Target,
    Homepage12TargetTailoringNowrap,
    Homepage13Target,
    Homepage14Target,
    Homepage15Target,
    FormMob
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE,
      indices: [
  			"Outsmart",
  			"Conclude",
  			"Cushion",
  			"Assess",
  			"Start The Change"
  		],
      cosas: [
        "Navigate to know more about Outsmart",
        "Navigate to know more about Conclude",
        "Navigate to know more about Cushion",
        "Navigate to know more about Assess",
        "Navigate to know more about Start The Change",
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
      if (this.selected === "Outsmart") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE1;
      }
    },
    isHomepage2DialogActive() {
      if (this.selected === "Conclude") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE2;
      }
    },
    isHomepage3DialogActive() {
      if (this.selected === "Cushion") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE3;
      }
    },
    isHomepage4DialogActive() {
      if (this.selected === "Assess") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE4;
      }
    },
    isHomepage5DialogActive() {
      if (this.selected === "Start The Change") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE5;
      }
    },
		overflowRatio() {
			return this.$refs.newie.scrollWidth / this.$refs.newie.offsetWidth;
		},
		itemWidth() {
			return this.$refs.newie.scrollWidth / this.indices.length;
		},
		selectedContent() {
			if (this.selected === "Outsmart") {
				return this.cosas[this.indices.indexOf('Outsmart')];
			} else if (this.selected === "Conclude") {
        return this.cosas[this.indices.indexOf('Conclude')];
      } else if (this.selected === "Cushion") {
        return this.cosas[this.indices.indexOf('Cushion')];
      } else if (this.selected === "Assess") {
        return this.cosas[this.indices.indexOf('Assess')];
      } else if (this.selected === "Start The Change") {
        return this.cosas[this.indices.indexOf('Start The Change')];
      }
			return "";
		},
		count() {
			return this.indices.length
		}
	},
  methods: {
		onPan(e) {
			const dragOffset = 100 / this.itemWidth * e.deltaX / this.count * this.overflowRatio;

			const transform = this.currentOffset + dragOffset;

			this.$refs.newie.style.setProperty("--x", transform);

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
					this.$refs.newie,
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

.A-bs {
  border-radius: 5px;
  text-rendering: geometricPrecision;
  height: auto;
  background-color: blue !important;
}
.slider {
	width: 100%;
	height: 108px;
	overflow: visible;
  position: relative;
  white-space: nowrap;

	&__nw {
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

.cosa  {
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

@media only screen and (orientation : portrait) and (max-width: 460px) {
  .nwcs {
    position: relative;
  }
  .nwmpp1 {
    margin-top: -2em;
  }
}
@media only screen and (orientation : portrait) and (min-width: 461px) {
  .spchv {
    position: relative;
    margin-top: -2em !important;
  }
}
@media only screen and (orientation : landscape) {
  .spchv {
    position: relative;
    margin-top: -2em !important;
  }
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

#mSS1 {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	overflow: visible;
  margin-bottom: 12px;
}

.rchv {
  display: grid;
  grid-template-columns: 100vw;
  grid-gap: 1em;
  grid-auto-flow: dense;
}
.c-f-c {
  background-color: blue;
  z-index: 999;
  border-radius: 0.307456140350877rem;
}
//(min-width: 690px)
@media only screen and (min-width: 690px) {
  .A-bs.n0 {
    height: calc(11.857282044634382rem + 50px) !important;
    min-height: calc(11.857282044634382rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(19.094792655440469rem + 50px) !important;
    min-height: calc(19.094792655440469rem + 50px) !important;
  }
}
//(max-width: 689px)
@media only screen and (max-width: 689px) {
  .A-bs.n0 {
    height: calc(11.860757073534807rem + 50px) !important;
    min-height: calc(11.860757073534807rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(19.054884296127279rem + 50px) !important;
    min-height: calc(19.054884296127279rem + 50px) !important;
  }
}
//(max-width: 556px)
@media only screen and (max-width: 556px) {
  .A-bs.n0 {
    height: calc(11.758988118326949rem + 50px) !important;
    min-height: calc(11.758988118326949rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(18.846074507581784rem + 50px) !important;
    min-height: calc(18.846074507581784rem + 50px) !important;
  }
}
//(max-width: 532px)
@media only screen and (max-width: 532px) {
  .A-bs.n0 {
    height: calc(11.659741815687602rem + 50px) !important;
    min-height: calc(11.659741815687602rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(18.754562022329161rem + 50px) !important;
    min-height: calc(18.754562022329161rem + 50px) !important;
  }
}
//(max-width: 524px)
@media only screen and (max-width: 524px) {
  .A-bs.n0 {
    height: calc(10.338376431376611rem + 50px) !important;
    min-height: calc(10.338376431376611rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(16.2447074730535rem + 50px) !important;
    min-height: calc(16.2447074730535rem + 50px) !important;
  }
}
//(max-width: 456px)
@media only screen and (max-width: 456px) {
  .A-bs.n0 {
    height: calc(10.331951661585883rem + 50px) !important;
    min-height: calc(10.331951661585883rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(16.20280052302556rem + 50px) !important;
    min-height: calc(16.20280052302556rem + 50px) !important;
  }
}
//(max-width: 419px)
@media only screen and (max-width: 419px) {
  .A-bs.n0 {
    height: calc(10.011658214749353rem + 50px) !important;
    min-height: calc(10.011658214749353rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(15.649954604288297rem + 50px) !important;
    min-height: calc(15.649954604288297rem + 50px) !important;
  }
}
//(max-width: 398px)
@media only screen and (max-width: 398px) {
  .A-bs.n0 {
    height: calc(9.82638125052881rem + 50px) !important;
    min-height: calc(9.82638125052881rem + 50px) !important;
  }
  .A-bs.alternative {
    height: calc(15.267162848053932rem + 50px) !important;
    min-height: calc(15.267162848053932rem + 50px) !important;
  }
}
</style>
