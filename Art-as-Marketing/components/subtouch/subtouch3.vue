<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div>
    <main v-if="selectedContent" class="rchv" id="mzp1" v-pan="onPan">
      <article class="article">
        <Homepage11CScrolltoSmall
          v-if="isHomepage1DialogActive"
          class="A-bs n1"
        />
        <Homepage12CScrolltoNowrap
          v-if="isHomepage2DialogActive"
          class="A-bs n2"
        />
        <Homepage13CScrolltoNowrap
          v-if="isHomepage3DialogActive"
          class="A-bs n3"
        />
        <Homepage14CScrolltoNowrap
          v-if="isHomepage4DialogActive"
          class="A-bs n4"
        />
        <Homepage15CScrolltoSmall
          v-if="isHomepage5DialogActive"
          class="A-bs n5"
        />
      </article>

      <article class="article">
        <div class="cosa" ref="cosa" v-if="selectedContent">{{ selectedContent }}</div>
        <div class="cosa nwcs" ref="cosa" v-else>We use art for experiential marketing. Browse Below</div>
      </article>

      <main v-if="isHomepage1DialogActive && selected2 === '+ Help'" class="rchv" id="mzpb">
        <article class="article">
          <div class="cosa"><Help :mother="mother" /></div>
        </article>
        <article class="article">
          <section class="slider">
            <ul class="slider__nw" ref="newie2">
              <li v-for="(hey, index) in heys" v-bind:key="hey"
                  class="slider__tm h-nb"
                  v-tap="(e) => tap2(e, hey)"
                  :style="{backgroundColor: colors[index]}">
                {{ hey }}
              </li>
            </ul>
          </section>
        </article>
      </main>
      <main v-else-if="isHomepage1DialogActive" class="rchv" id="mzpb">
        <article class="article">
          <section class="slider">
            <ul class="slider__nw" ref="newie2">
              <li v-for="(hey, index) in heys" v-bind:key="hey"
                  class="slider__tm h-nb"
                  v-tap="(e) => tap2(e, hey)"
                  :style="{backgroundColor: colors[index]}">
                {{ hey }}
              </li>
            </ul>
          </section>
        </article>
      </main>

      <article class="article">
        <section class="slider">
          <ul class="slider__nw" ref="newie">
            <li v-for="(indice, index) in indices" v-bind:key="indice"
                class="slider__tm"
                v-tap="(e) => onTap(e, indice)"
                :style="{backgroundColor: colors[index]}">
              {{ indice }}
            </li>
          </ul>
        </section>
      </article>
      <article class="article">
        <SSubtouchF v-if="isAnyActive" />
      </article>
    </main>
    <main v-else class="rchv spchv nwmpp1" id="mzp1" v-pan="onPan">
      <article class="article">
        <Homepage11CScrolltoSmall
          v-if="isHomepage1DialogActive"
          class="A-bs n1"
        />
        <Homepage12CScrolltoNowrap
          v-if="isHomepage2DialogActive"
          class="A-bs n2"
        />
        <Homepage13CScrolltoNowrap
          v-if="isHomepage3DialogActive"
          class="A-bs n3"
        />
        <Homepage14CScrolltoNowrap
          v-if="isHomepage4DialogActive"
          class="A-bs n4"
        />
        <Homepage15CScrolltoSmall
          v-if="isHomepage5DialogActive"
          class="A-bs n5"
        />
      </article>

      <article class="article">
        <div class="cosa" ref="cosa" v-if="selectedContent">{{ selectedContent }}</div>
        <div class="cosa nwcs" ref="cosa" v-else>We use art for experiential marketing. Browse Below</div>
      </article>
      <article class="article">
        <section class="slider">
          <ul class="slider__nw" ref="newie">
            <li v-for="(indice, index) in indices" v-bind:key="indice"
                class="slider__tm"
                v-tap="(e) => onTap(e, indice)"
                :style="{backgroundColor: colors[index]}">
              {{ indice }}
            </li>
          </ul>
        </section>
      </article>
      <article class="article">
        <SSubtouchF v-if="isAnyActive" />
      </article>
    </main>
  </div>
</template>

<script>
import Homepage11CScrolltoSmall from '~/components/homepage/subcomp/Homepage11CScrolltoSmall.vue'
import Homepage12CScrolltoNowrap from '~/components/homepage/subcomp/Homepage12CScrolltoNowrap.vue'
import Homepage13CScrolltoNowrap from '~/components/homepage/subcomp/Homepage13CScrolltoNowrap.vue'
import Homepage14CScrolltoNowrap from '~/components/homepage/subcomp/Homepage14CScrolltoNowrap.vue'
import Homepage15CScrolltoSmall from '~/components/homepage/subcomp/Homepage15CScrolltoSmall.vue'
import { TweenMax, Elastic, Sine } from "gsap/dist/gsap"
import SSubtouchF from '~/components/subtouch/subcomp/SSubtouchF.vue'
import Help from '~/components/Help.vue'
import { enactHelp } from '~/composables/toggle-help-store.js'

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
    Homepage11CScrolltoSmall,
    Homepage12CScrolltoNowrap,
    Homepage13CScrolltoNowrap,
    Homepage14CScrolltoNowrap,
    Homepage15CScrolltoSmall,
    SSubtouchF,
    Help
  },
  setup () {
    const { toggleHelp, getToggleHelp } = enactHelp();

    return {
      toggleHelp,
      getToggleHelp
    }
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE,
      indices: [
  			"Surprise",
  			"Challenge",
  			"Bravery",
  			"Levity",
  			"Narrowing Down"
  		],
      cosas: [
        "Navigate to know more about Surprise",
        "Navigate to know more about Challenge",
        "Navigate to know more about Bravery",
        "Navigate to know more about Levity",
        "Navigate to know more about Narrowing Down",
      ],
      colors: [
        "blue",
        "yellow",
        "blue",
        "yellow",
        "blue"
      ],
      heys: [
        "+ Help",
        "– Help"
      ],
      currentOffset: 0,
      selected: "",
      selected2: "",
      mother: 'Subtouch3',
      tmrSubtouch1: null,
      wchrSubtouch1B: null
    }
  },
	computed: {
    isHomepage1DialogActive() {
      if (this.selected === "Surprise") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE1;
      }
    },
    isHomepage2DialogActive() {
      if (this.selected === "Challenge") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE2;
      }
    },
    isHomepage3DialogActive() {
      if (this.selected === "Bravery") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE3;
      }
    },
    isHomepage4DialogActive() {
      if (this.selected === "Levity") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE4;
      }
    },
    isHomepage5DialogActive() {
      if (this.selected === "Narrowing Down") {
        return this.activeDialog === DIALOG_TYPE.HOMEPAGE5;
      }
    },
    isAnyActive() {
      return this.isHomepage1DialogActive || this.isHomepage2DialogActive || this.isHomepage3DialogActive || this.isHomepage4DialogActive || this.isHomepage5DialogActive;
    },
		overflowRatio() {
			return this.$refs.newie.scrollWidth / this.$refs.newie.offsetWidth;
		},
		itemWidth() {
			return this.$refs.newie.scrollWidth / this.indices.length;
		},
		selectedContent() {
			if (this.selected === "Surprise") {
				return this.cosas[this.indices.indexOf('Surprise')];
			} else if (this.selected === "Challenge") {
        return this.cosas[this.indices.indexOf('Challenge')];
      } else if (this.selected === "Bravery") {
        return this.cosas[this.indices.indexOf('Bravery')];
      } else if (this.selected === "Levity") {
        return this.cosas[this.indices.indexOf('Levity')];
      } else if (this.selected === "Narrowing Down") {
        return this.cosas[this.indices.indexOf('Narrowing Down')];
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
        if (this.selected !== 'Surprise' && this.selected2 !== '– Help') this.selected2 = '– Help';
			}
		},
    async utilA() {
      if (this.tmrSubtouch1) clearTimeout(this.tmrSubtouch1);

      this.tmrSubtouch1 = await setTimeout(async () => {
        await this.$nextTick(async () => await this.toggleHelp());
      }, 220);
    },
    tap2(e, value) {
      if (value) {
        TweenMax.to(e.target, 0.012, { scale: 1.1, rotation:0.01, z:0.01})
        this.selected2 = value;
      }
    }
  },
  async created() {
    this.wchrSubtouch1B = this.$watch('selected2', async (newValue, oldValue) => {
      if (newValue === '+ Help') await this.utilA()
      if (newValue === '– Help' && this.getToggleHelp === true) await this.toggleHelp()
    })
  },
  beforeDestroy() {
    this.wchrSubtouch1B();
    if (this.getToggleHelp === true) this.toggleHelp()
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
	height: 120px;
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
    margin-top: -1em;
  }
}
@media only screen and (orientation : portrait) and (min-width: 461px) {
  .spchv {
    position: relative;
    margin-top: -1em !important;
  }
}
@media only screen and (orientation : landscape) {
  .spchv {
    position: relative;
    margin-top: -1em !important;
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

#mzp1 {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
}

#mzpb {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: visible;
}

.rchv {
  display: grid;
  grid-template-columns: 100vw;
  grid-gap: 1em;
  grid-auto-flow: dense;
}
//(min-width: 690px)
@media only screen and (min-width: 690px) {
  .A-bs.n1 {
    height: calc(19.021614682428505rem + 50px) !important;
    min-height: calc(19.021614682428505rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(12.552681868170927rem + 50px) !important;
    min-height: calc(12.552681868170927rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(14.887686447021238rem + 50px) !important;
    min-height: calc(14.887686447021238rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(17.698138770526421rem + 50px) !important;
    min-height: calc(17.698138770526421rem + 50px) !important;
  }
}
//(max-width: 689px)
@media only screen and (max-width: 689px) {
  .A-bs.n1 {
    height: calc(18.981671207969935rem + 50px) !important;
    min-height: calc(18.981671207969935rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(12.510052575364507rem + 50px) !important;
    min-height: calc(12.510052575364507rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(14.777566505723381rem + 50px) !important;
    min-height: calc(14.777566505723381rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(17.669692668190336rem + 50px) !important;
    min-height: calc(17.669692668190336rem + 50px) !important;
  }
}
//(max-width: 556px)
@media only screen and (max-width: 556px) {
  .A-bs.n1 {
    height: calc(19.105712390938683rem + 50px) !important;
    min-height: calc(19.105712390938683rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(12.170118673728579rem + 50px) !important;
    min-height: calc(12.170118673728579rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(14.352685665665057rem + 50px) !important;
    min-height: calc(14.352685665665057rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(17.453593191678003rem + 50px) !important;
    min-height: calc(17.453593191678003rem + 50px) !important;
  }
}
//(max-width: 532px)
@media only screen and (max-width: 532px) {
  .A-bs.n1 {
    height: calc(18.938707920173884rem + 50px) !important;
    min-height: calc(18.938707920173884rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(12.269640268500102rem + 50px) !important;
    min-height: calc(12.269640268500102rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(14.44455262953103rem + 50px) !important;
    min-height: calc(14.44455262953103rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(17.291801118810752rem + 50px) !important;
    min-height: calc(17.291801118810752rem + 50px) !important;
  }
}
//(max-width: 524px)
@media only screen and (max-width: 524px) {
  .A-bs.n1 {
    height: calc(18.077033095444492rem + 50px) !important;
    min-height: calc(18.077033095444492rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(10.852227232002501rem + 50px) !important;
    min-height: calc(10.852227232002501rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(13.009855394842773rem + 50px) !important;
    min-height: calc(13.009855394842773rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(15.948936587812604rem + 50px) !important;
    min-height: calc(15.948936587812604rem + 50px) !important;
  }
}
//(max-width: 456px)
@media only screen and (max-width: 456px) {
  .A-bs.n1 {
    height: calc(18.086898360458062rem + 50px) !important;
    min-height: calc(18.086898360458062rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(10.8604411049857rem + 50px) !important;
    min-height: calc(10.8604411049857rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(12.979109123178548rem + 50px) !important;
    min-height: calc(12.979109123178548rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(16.133088903040557rem + 50px) !important;
    min-height: calc(16.133088903040557rem + 50px) !important;
  }
}
//(max-width: 419px)
@media only screen and (max-width: 419px) {
  .A-bs.n1 {
    height: calc(18.21220488581861rem + 50px) !important;
    min-height: calc(18.21220488581861rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(10.501422431008852rem + 50px) !important;
    min-height: calc(10.501422431008852rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(12.612359072629774rem + 50px) !important;
    min-height: calc(12.612359072629774rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(15.765786965542997rem + 50px) !important;
    min-height: calc(15.765786965542997rem + 50px) !important;
  }
}
//(max-width: 398px)
@media only screen and (max-width: 398px) {
  .A-bs.n1 {
    height: calc(17.479653353795224rem + 50px) !important;
    min-height: calc(17.479653353795224rem + 50px) !important;
  }
  .A-bs.n2 {
    height: calc(10.315074208390348rem + 50px) !important;
    min-height: calc(10.315074208390348rem + 50px) !important;
  }
  .A-bs.n3,
  .A-bs.n4 {
    height: calc(12.388007620692573rem + 50px) !important;
    min-height: calc(12.388007620692573rem + 50px) !important;
  }
  .A-bs.n5 {
    height: calc(15.691183006516879rem + 50px) !important;
    min-height: calc(15.691183006516879rem + 50px) !important;
  }
}

.h-nb {
  flex-grow: 1;
  font-family: 'AtkinsonHyperlegibleBold';
  font-size: 26.647101746392745px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  font-weight: 560;
  color: #202124;
  text-rendering: geometricPrecision;
  text-transform: uppercase;
  padding: 3px 10px 3px 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.h-nb + .h-nb {
  margin-right: 0px;
}
.h-nb:nth-child(2) {
  animation: g-t-glw $dur $timing infinite;
}
</style>
