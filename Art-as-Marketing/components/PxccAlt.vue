<template>
  <canvas ref="my-canvas" :style="compStl" class="zdog-c" width="2000" height="2000" :key="canvasKey"></canvas>
</template>

<script>
import Zdog from 'zdog'
import {gsap} from 'gsap/dist/gsap'
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        canvasKey: 'a89hd'
      }
    },
    computed: {
      ...mapState({
        page: 'page'
      }),
      compStl() {
        return this.page === 'index' ? 'position: absolute; right: -88.293865905848788px; z-index: 1' : 'z-index: 1';
      }
    },
    methods: {
      rnd(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      radiansToDegrees(_val) {
        return _val * (Math.PI/180);
      }
    },
    mounted() {
      this.$nextTick(() => {
        // get canvas element and its context
        let canvas = this.$refs['my-canvas'];
        let ctx = canvas.getContext('2d');
        // get canvas size
        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;
        // illustration variables
        const TAU = Zdog.TAU;
        const zoom = 4;
        let dragRotate = true;

        // create an scene Anchor to hold all items
        let scene = new Zdog.Anchor({
          rotate: { x: TAU/12.00000896262679, z: TAU/8.000006009690677 },
        });

        // Colors
        var $black1 = 'hsl(200,20%,15%)';
        var $black2 = 'hsl(200,20%,20%)';
        var $black3 = 'hsl(200,20%,30%)';
        var $black4 = 'hsl(200,20%,50%)';
        var $black4T = 'hsla(200,20%,50%,0)';

        var $gold1 = 'hsl(324,61%,20%)';
        var $gold2 = 'hsl(324,61%,30%)';
        var $gold3 = 'hsl(324,61%,45%)';
        var $gold4 = 'hsl(324,61%,50%)';
        var $gold5 = 'hsl(324,61%,60%)';
        var $gold5T = 'hsla(324,61%,60%,0)';
        var $gold6 = 'hsl(324,61%,80%)';
        var $gold6T = 'hsla(324,61%,80%,0)';

        var stop = false;
        var brdr = 4.650000000000001
        var i;
        var j;
        var k;
        var obj;
        var m = 9;
        var brdrb = 13.285714285714288
        var bp1 = 0.97
        var bp = 0.95;

        //base: width & height 211.412268188302425px
        //hole: width & height 147.988587731811698 (70%)
        //plate: width & height 137,417974322396576 (65%) widest
        //plate &:nth-child(3), &:nth-child(4): 105,706134094151213 (50%) medium
        //plate &:nth-child(5), &:nth-child(6): 73,994293865905849 (35%) small

        //plates
        var plateGrpSmall = new Zdog.Anchor({
          addTo: scene,
        });

        var plateGrpoupSmall = new Zdog.Group({
          addTo: plateGrpSmall,
        });

        var plateGrpMedium = new Zdog.Anchor({
          addTo: scene,
          translate: {z: -33.214285714285725}
        });

        var plateGrpoupMedium = new Zdog.Group({
          addTo: plateGrpMedium,
        });

        var plateGrpBig = new Zdog.Anchor({
          addTo: scene,
          translate: {z: -76.392857142857151}
        });

        var plateGrpoupBig = new Zdog.Group({
          addTo: plateGrpBig,
        });
        //logos
        var logoGroup = new Zdog.Group({
          addTo: plateGrpSmall,
        });

        var logoGroup2 = new Zdog.Group({
          addTo: plateGrpMedium,
        });

        var logoGroup3 = new Zdog.Group({
          addTo: plateGrpBig
        });
        //plate upper borders
        var borderAnchorSmall = new Zdog.Anchor({
          addTo: plateGrpSmall,
        });

        var borderGroupSmall = new Zdog.Group({
          addTo: borderAnchorSmall
        });

        var borderAnchorMedium = new Zdog.Anchor({
          addTo: plateGrpMedium,
        });

        var borderGroupMedium = new Zdog.Group({
          addTo: borderAnchorMedium
        });

        var borderAnchorBig = new Zdog.Anchor({
          addTo: plateGrpBig,
        });

        var borderGroupBig = new Zdog.Group({
          addTo: borderAnchorBig
        });
        // plates' shades
        var platesmallshade = new Zdog.Group({
          addTo: plateGrpoupSmall
        });

        var platemediumshade = new Zdog.Group({
          addTo: plateGrpoupMedium
        });
        // base
        var baseGrp = new Zdog.Anchor({
          addTo: scene,
          translate: {z: -100.678571428571437}
        });
        //base upper borders
        var baseBorderAnchor = new Zdog.Anchor({
          addTo: plateGrpoupBig,
        });

        var baseBorderGroup = new Zdog.Group({
          addTo: baseBorderAnchor
        });
        // base's shades
        var baseshade = new Zdog.Group({
          addTo: plateGrpoupBig
        });

        //BASE START
        var baseshade1 = new Zdog.Ellipse({
          addTo: plateGrpoupBig,
          diameter: 147.988587731811698,
          translate: {z: -10.999999999999998},
          color: 'hsla(200,20%,30%,0.165)',
          fill: true,
        });
        baseshade1.copy({
          scale: bp1,
        })
        baseshade1.copy({
          scale: (bp1 * bp1),
          color: 'hsla(0,0%,0%,0.165)'
        })
        baseshade1.copy({
          scale: (bp1 * bp1) * bp1,
          color: 'hsla(0,0%,0%,0.165)'
        })
        baseshade1.copy({
          scale: ((bp1 * bp1) * bp1) * bp1,
          color: 'hsla(0,0%,0%,0.165)'
        })
        baseshade1.copy({
          scale: (((bp1 * bp1) * bp1) * bp1) * bp1,
          color: 'hsla(0,0%,0%,0.165)'
        })

        const memoize = (fn) => {
          let cache = {};
          return (...args) => {
            let n = args[0];
            if (n in cache) {
              return cache[n];
            }
            else {
              let result = fn(n);
              cache[n] = result;
              return result;
            }
          }
        }
        var baseshade2 = new Zdog.Shape({
          addTo: baseshade,
          translate: {z: -12.142857142857143},
          path: [
            {y: 102.709843081312411, x: 0},
            {y: 73.994293865905849, x: 0}
          ],
          stroke: 2,
          color: $gold6T,
        });
        const addRect = (i) => {
          for(i = 0; i < this.radiansToDegrees(360-1); i+=this.radiansToDegrees(1)) {
            obj = baseshade2.copy({
              color: `hsla(200,20%,${40}%,${12.5}%)`,
              rotate: {z: i}
            })
          }
          for(j = this.radiansToDegrees(0.5); j < this.radiansToDegrees(360-1); j+=this.radiansToDegrees(1)) {
            obj = baseshade2.copy({
              stroke: 1,
              color: `hsla(${this.rnd(200, 324)},${this.rnd(20, 61)}%,${this.rnd(15, 50)}%,0.1)`,
              rotate: {z: j}
            })
          }
        }
        if(stop === false){
          const memoizedRect = memoize(addRect);
          memoizedRect(0);
        }
        var brdrBase = new Zdog.Ellipse({
          addTo: baseBorderGroup,
          diameter: 211.412268188302425,
          translate: { z: -10.999999999999998 },
          stroke: 1.192582025677604,
          color: $black4,
        });
        var brdrBase2 = new Zdog.Ellipse({
          addTo: baseBorderGroup,
          diameter: 210.219686162624821,
          translate: { z: -10.999999999999998 },
          color: $black2,
        });
        var brdrBase3 = new Zdog.Ellipse({
          addTo: baseBorderGroup,
          diameter: 147.988587731811698,
          translate: { z: -10.999999999999998 },
          stroke: 2.2,
          color: 'hsl(0,0%,0%)',
        });
        var brdrBase4 = brdrBase3.copy({
          diameter: 152.388587731811698,
          color: 'hsl(0,0%,0%,0.5)',
        });
        var brdrBase5 = brdrBase3.copy({
          diameter: 156.788587731811698,
          color: 'hsl(0,0%,0%,0.25)',
        });
        var brdrBase6 = brdrBase3.copy({
          diameter: 161.188587731811698,
          color: 'hsl(0,0%,0%,0.125)',
        });
        var brdrBase7 = brdrBase3.copy({
          diameter: 206.827104136947217,
          color: 'hsl(0,0%,0%,0.125)',
        });

        var sideshadebase = new Zdog.Shape({ // cylinder side line shape
          addTo: baseGrp,
          path: [
            { x: 0, y: 0, z: 11.546566130018341 },
            { x: 0, y: 0, z: -11.546566130018341 }
          ],
          stroke: 2.857142857142857,
          color: $gold6T,
        });
        const addLinesBase = () => {
          let duh = 10;
          let duh2 = 11;
          for(i = 0; i < m; i++) {
            obj = sideshadebase.copy({
              translate: {x: (106.302425106990015 * Math.cos(duh++ * Math.PI / 180)), y: (106.302425106990015 * Math.sin(duh++ * Math.PI / 180))}
            })
            for(j = 0; j < m; j++) {
              obj.copy({
                color: 'hsla(200,20%,30%,20%)',
                translate: {x: (106.302425106990015 * Math.cos(duh2++ * Math.PI / 180)), y: (106.302425106990015 * Math.sin(duh2++ * Math.PI / 180))}
              })
            }
          }
          for(k = 0; k < m; k++) {
            sideshadebase.copy({
              color: 'hsla(200,20%,30%,20%)',
              translate: {x: (106.302425106990015 * Math.cos(1.5 + (duh++) * Math.PI / 180)), y: (106.302425106990015 * Math.sin(1.5 + (duh++) * Math.PI / 180))}
            })
          }
        }

        if(stop === false){
          addLinesBase();
        }
        let base = new Zdog.Cylinder({
          addTo: baseGrp,
          diameter: 211.412268188302425,
          length: 24.285714285714286,
          stroke: false,
          color: $black1,
          frontFace: 'hsl(200,20%,12.9%)',
          backface: $black1,
        });
        //BASE END

        //PLATE BIG START
        let bgCircleBig = new Zdog.Ellipse({
          diameter: 61.991428571428567,
          translate: { z: 21.357142857142856 },
          addTo: logoGroup3,
          color: 'hsla(330, 58%, 58%, 0.98)',
          fill: true,
        });
        let bordercopy2 = new Zdog.Ellipse({
          addTo: logoGroup3,
          diameter: 67.562857142857138,
          translate: { z: 21.357142857142856 },
          stroke: 5.571428571428571,
          color: 'hsla(175, 100%, 13%, 0.98)',
        });
        let logocopy2 = new Zdog.Shape({
          addTo: logoGroup3,
          translate: { x: -67.562857142857138 / 2, y: -67.562857142857138 / 2, z: 26.928571428571427 },
          path: [
            { x: 27.127285714285712, y: 15.312142857142856 },
            { x: 53.853428571428567, y: 33.077571428571426 },
            { x: 38.39085714285714, y: 38.810571428571426 },
            { x: 35.89485714285714, y: 35.475142857142854 },
            { x: 20.432285714285713, y: 41.208142857142854 },
            { x: 47.158428571428568, y: 58.973571428571424 },
          ],
          closed: false,
          stroke: 5.571428571428571,
          color: 'hsla(175, 100%, 13%, 0.98)',
        });
        var brdrBig = new Zdog.Ellipse({
          addTo: borderGroupBig,
          diameter: 137.417974322396566,
          translate: { z: 8.635714285714287 },
          stroke: 1.788873038516405,
          color: $gold6,
        });
        var brdrBig2 = new Zdog.Ellipse({
          addTo: borderGroupBig,
          diameter: 134.095781536580386,
          translate: { z: 8.635714285714287 },
          color: $gold2,
        });
        var platemediumshade1 = new Zdog.Ellipse({
          addTo: plateGrpMedium,
          diameter: 105.706134094151245,
          translate: {z: -34.542857142857139},
          color: 'hsla(324,61%,20%,0.05)',
          fill: true,
        });
        platemediumshade1.copy({
          scale: bp,
        })
        platemediumshade1.copy({
          scale: (bp * bp),
        })
        platemediumshade1.copy({
          scale: (bp * bp) * bp,
        })
        platemediumshade1.copy({
          scale: ((bp * bp) * bp) * bp,
        })
        platemediumshade1.copy({
          scale: (((bp * bp) * bp) * bp) * bp,
        })

        var platemediumshade2 = new Zdog.Ellipse({
          addTo: platemediumshade,
          diameter: 52.853067047075623,
          translate: {x: 15, y: 15, z: -34.542857142857139},
          color: 'hsla(324,61%,30%,0.02)',
          fill: true,
        });
        platemediumshade2.copy({
          scale: bp,
        })
        platemediumshade2.copy({
          scale: (bp * bp),
        })
        platemediumshade2.copy({
          scale: (bp * bp) * bp,
        })
        platemediumshade2.copy({
          scale: ((bp * bp) * bp) * bp,
        })
        var sideshademediumr = new Zdog.Shape({
          addTo: plateGrpBig,
          path: [
            { x: 0, y: 0, z: 6.231760749949053 },
            { x: 0, y: 0, z: -6.231760749949053 }
          ],
          stroke: 1.857142857142857,
          color: $gold6T,
        });

        const addLinesMediumReflection = () => {
          let w3g = 10;
          let w3g2 = 11;
          for(i = 0; i < m; i++) {
            obj = sideshademediumr.copy({
              color: 'hsla(324,61%,80%,15%)',
              translate: {x: (52.853067047075622 * Math.cos(w3g++ * Math.PI / 180)), y: (52.853067047075622 * Math.sin(w3g++ * Math.PI / 180))}
            })
            for(j = 0; j < m; j++) {
              obj.copy({
                translate: {x: (52.853067047075622 * Math.cos(w3g2++ * Math.PI / 180)), y: (52.853067047075622 * Math.sin(w3g2++ * Math.PI / 180))}
              })
            }
          }
          for(k = 0; k < m; k++) {
            sideshademediumr.copy({
              color: 'hsla(324,61%,30%,15%)',
              translate: {x: (52.853067047075622 * Math.cos(1.5 + (w3g++) * Math.PI / 180)), y: (52.853067047075622 * Math.sin(1.5 + (w3g++) * Math.PI / 180))}
            })
          }
        }
        if(stop === false){
          addLinesMediumReflection();
        }
        var sideshadebig = sideshademediumr.copy({
          addTo: plateGrpBig,
        });
        const addLinesBig = () => {
          let sw3g = 10;
          let sw3g2 = 11;
          for(i = 0; i < m; i++) {
            obj = sideshadebig.copy({
              color: 'hsla(324,61%,80%,20%)',
              translate: {x: (68.708987161198283 * Math.cos(sw3g++ * Math.PI / 180)), y: (68.708987161198283 * Math.sin(sw3g++ * Math.PI / 180))}
            })
            for(j = 0; j < m; j++) {
              obj.copy({
                translate: {x: (68.708987161198283 * Math.cos(sw3g2++ * Math.PI / 180)), y: (68.708987161198283 * Math.sin(sw3g2++ * Math.PI / 180))}
              })
            }
          }
          for(k = 0; k < m; k++) {
            sideshadebig.copy({
              color: 'hsla(324,61%,30%,20%)',
              translate: {x: (68.708987161198283 * Math.cos(1.5 + (sw3g++) * Math.PI / 180)), y: (68.708987161198283 * Math.sin(1.5 + (sw3g++) * Math.PI / 180))}
            })
          }
        }
        if(stop === false){
          addLinesBig();
        }

        let platebig = new Zdog.Cylinder({
          addTo: plateGrpBig,
          diameter: 137.417974322396566,
          length: 15.785714285714285,
          stroke: false,
          color: $gold3,
          backface: $gold5,
        });
        //PLATE BIG END

        //PLATE MEDIUM START
        let bgCircleMedium = bgCircleBig.copy({
          scale: 0.76923076923077,
          translate: { z: 16.428571428571434 },
          addTo: logoGroup2
        });
        let bordercopy = bordercopy2.copy({
          scale: 0.76923076923077,
          translate: { z: 16.428571428571434 },
          stroke: 4.285714285714287,
          addTo: logoGroup2
        });
        let logocopy = logocopy2.copy({
          translate: { x: -51.971428571428587 / 2, y: -51.971428571428587 / 2, z: 20.714285714285721 },
          scale: 0.76923076923077,
          stroke: 4.285714285714287,
          addTo: logoGroup2
        });
        brdrBig.copy({
          translate: { z: 6.642857142857146 },
          diameter: 105.706134094151245,
          addTo: borderGroupMedium,
        });
        brdrBig2.copy({
          translate: { z: 6.642857142857146 },
          diameter: 103.150601181984951,
          addTo: borderGroupMedium,
        });
        var platesmallshade1 = new Zdog.Ellipse({
          addTo: plateGrpSmall,
          diameter: 73.994293865905849,
          translate: {z: -26.571428571428578},
          color: 'hsla(324,61%,20%,0.05)',
          fill: true,
        });
        platesmallshade1.copy({
          scale: bp,
        })
        platesmallshade1.copy({
          scale: (bp * bp),
        })
        platesmallshade1.copy({
          scale: (bp * bp) * bp,
        })
        platesmallshade1.copy({
          scale: ((bp * bp) * bp) * bp,
        })
        platesmallshade1.copy({
          scale: (((bp * bp) * bp) * bp) * bp,
        })

        var platesmallshade2 = new Zdog.Ellipse({
          addTo: platesmallshade,
          diameter: 36.997146932952925,
          translate: {x: 10.499999999999997, y: 10.499999999999997, z: -26.571428571428578},
          color: 'hsla(324,61%,30%,0.02)',
          fill: true,
        });
        platesmallshade2.copy({
          scale: bp,
        })
        platesmallshade2.copy({
          scale: (bp * bp),
        })
        platesmallshade2.copy({
          scale: (bp * bp) * bp,
        })
        platesmallshade2.copy({
          scale: ((bp * bp) * bp) * bp,
        })
        var sideshadesmallr = sideshademediumr.copy({
          addTo: plateGrpMedium,
          scale: 0.76923076923077,
          stroke: 1.428571428571429
        });

        const addLinesSmallReflection = () => {
          let v = 10;
          let v2 = 11;
          for(i = 0; i < m; i++) {
            obj = sideshadesmallr.copy({
              color: 'hsla(324,61%,80%,15%)',
              translate: {x: (37.497146932952925 * Math.cos(v++ * Math.PI / 180)), y: (37.497146932952925 * Math.sin(v++ * Math.PI / 180))}
            })
            for(j = 0; j < m; j++) {
              obj.copy({
                translate: {x: (37.497146932952925 * Math.cos(v2++ * Math.PI / 180)), y: (37.497146932952925 * Math.sin(v2++ * Math.PI / 180))}
              })
            }
          }
          for(k = 0; k < m; k++) {
            sideshadesmallr.copy({
              color: 'hsla(324,61%,30%,15%)',
              translate: {x: (37.497146932952925 * Math.cos(1.5 + (v++) * Math.PI / 180)), y: (37.497146932952925 * Math.sin(1.5 + (v++) * Math.PI / 180))}
            })
          }
        }
        if(stop === false){
          addLinesSmallReflection();
        }
        var sideshademedium = sideshademediumr.copy({
          addTo: plateGrpMedium,
          scale: 0.76923076923077,
          stroke: 1.428571428571429
        });

        const addLinesMedium = () => {
          let v3g = 10;
          let v3g2 = 11;
          for(i = 0; i < m; i++) {
            obj = sideshademedium.copy({
              color: 'hsla(324,61%,80%,20%)',
              translate: {x: (52.853067047075622 * Math.cos(v3g++ * Math.PI / 180)), y: (52.853067047075622 * Math.sin(v3g++ * Math.PI / 180))}
            })
            for(j = 0; j < m; j++) {
              obj.copy({
                translate: {x: (52.853067047075622 * Math.cos(v3g2++ * Math.PI / 180)), y: (52.853067047075622 * Math.sin(v3g2++ * Math.PI / 180))}
              })
            }
          }
          for(k = 0; k < m; k++) {
            sideshademedium.copy({
              color: 'hsla(324,61%,30%,20%)',
              translate: {x: (52.853067047075622 * Math.cos(1.5 + (v3g++) * Math.PI / 180)), y: (52.853067047075622 * Math.sin(1.5 + (v3g++) * Math.PI / 180))}
            })
          }
        }
        if(stop === false){
          addLinesMedium();
        }

        let platemedium = platebig.copy({
          addTo: plateGrpMedium,
          scale: 0.76923076923077
        });
        //PLATE MEDIUM END

        //PLATE SMALL START
        let bgCircle = new Zdog.Ellipse({
          diameter: 33.38,
          translate: { z: 11.5 },
          addTo: logoGroup,
          color: 'hsla(330, 58%, 58%, 0.98)',
          fill: true,
        });
        let border = new Zdog.Ellipse({
          addTo: logoGroup,
          diameter: 36.38,
          translate: { z: 11.5 },
          stroke: 3,
          color: 'hsla(175, 100%, 13%, 0.98)',
        });
        let logo = new Zdog.Shape({
          addTo: logoGroup,
          translate: { x: -18.19, y: -18.19, z: 14.5 },
          path: [
            { x: 14.607, y: 8.245 },
            { x: 28.998, y: 17.811 },
            { x: 20.672, y: 20.898 },
            { x: 19.328, y: 19.102 },
            { x: 11.002, y: 22.189 },
            { x: 25.393, y: 31.755 },
          ],
          closed: false,
          stroke: 3,
          color: 'hsla(175, 100%, 13%, 0.98)',
        });
        var brdrSmall = new Zdog.Ellipse({
          addTo: borderGroupSmall,
          diameter: 73.994293865905849,
          translate: { z: brdr },
          stroke: 1.788873038516405,
          color: $gold6,
        });
        var brdrSmall2 = new Zdog.Ellipse({
          addTo: borderGroupSmall,
          diameter: 72.205420827389444,
          translate: { z: brdr },
          color: $gold2,
        });
        var sideshadesmall = new Zdog.Shape({ // cylinder side line shape
          addTo: plateGrpSmall,
          path: [
            { x: 0, y: 0, z: 3.355563480741798 },
            { x: 0, y: 0, z: -3.355563480741798 }
          ],
          stroke: 1,
          color: $gold6T,
        });
        const addLinesSmall = () => {
          let d = 10;
          let d2 = 11;
          for(i = 0; i < m; i++) {
            obj = sideshadesmall.copy({
              color: 'hsla(324,61%,80%,20%)',
              translate: {x: (37.497146932952925 * Math.cos(d++ * Math.PI / 180)), y: (37.497146932952925 * Math.sin(d++ * Math.PI / 180))}
            })
            for(j = 0; j < m; j++) {
              obj.copy({
                translate: {x: (37.497146932952925 * Math.cos(d2++ * Math.PI / 180)), y: (37.497146932952925 * Math.sin(d2++ * Math.PI / 180))}
              })
            }
          }
          for(k = 0; k < m; k++) {
            sideshadesmall.copy({
              color: 'hsla(324,61%,30%,20%)',
              translate: {x: (37.497146932952925 * Math.cos(1.5 + (d++) * Math.PI / 180)), y: (37.497146932952925 * Math.sin(1.5 + (d++) * Math.PI / 180))}
            })
          }
        }
        if(stop === false){
          addLinesSmall();
        }
        let platesmall = new Zdog.Cylinder({
          addTo: plateGrpSmall,
          diameter: 73.994293865905849,
          length: 8.5,
          stroke: false,
          color: $gold3,
          backface: $gold5,
        });
        //PLATE SMALL END

        let animationObject = {rotationX: 0, rotationY: 0, mainPosZ: 0, lockTopY: -18.19 }

        var tl = gsap.timeline({repeat: -1, onComplete: animate, paused:true});

        tl.to(animationObject, 1.5, {
          rotationX: 0,
          rotationY: -180,
          ease: "back.inOut(1.7)"
        })
        .to(animationObject, 1, {
          lockTopY: '-=4.5475',
          ease: "elastic.out"

        })
        .to(animationObject, 1.5, {
          rotationY: '-=180',
          ease: "back.inOut(1.7)"
        })
        .to(animationObject, 0.26, {
          lockTopY: -18.19,
          ease: "elastic.out"
        })
        tl.progress(1).progress(0);
        tl.play();

        function animate() {
          scene.updateGraph();
          tl.eventCallback("onUpdate", null);
          render();
        }
        var rAFanimate2 = (depth, counter) => requestAnimationFrame( animate2.bind(this, depth, counter) )
        var cAFanimate2 = () => cancelAnimationFrame( animate2 )

        var animate2 = function animate2(depth, counter) {
          scene.updateGraph();
          if (typeof depth == 'number' && typeof counter == 'number') {depth++; counter++}
          else {depth = 1; counter = 1};
          if (counter == 5) tl.eventCallback("onUpdate", render);
          if(stop === false && depth < 152){
            rAFanimate2(depth, counter);
          } else {
            cAFanimate2();
            tl.eventCallback("onUpdate", null);
          }
        }

        function render() {
          // clear canvas
          ctx.clearRect( 0, 0, canvasWidth, canvasHeight );
          ctx.save();
          // center canvas & zoom
          ctx.translate( canvasWidth/2, canvasHeight/2 );
          ctx.scale( zoom, zoom );
          // set lineJoin and lineCap to round
          ctx.lineJoin = 'round';
          ctx.lineCap = 'round';

          logo.translate.y = animationObject.lockTopY;
          // render scene graph
          scene.renderGraphCanvas( ctx );
          ctx.restore();
        }

        animate()

        // ----- drag ----- //
        let dragStartRX = scene.rotate.x, dragStartRY = scene.rotate.y;
        let minSize = Math.min( canvasWidth, canvasHeight );

        // add drag-rotatation with Dragger
        let drgr = () => new Zdog.Dragger({
          startElement: canvas,
          onDragStart: function() {
            stop = false;
            animate2();
          },
          onDragMove: function( pointer, moveX, moveY ) {
            scene.rotate.x = dragStartRX - ( moveY / minSize * TAU );
            scene.rotate.y = dragStartRY - ( moveX / minSize * TAU );
          },
          onDragEnd: function() {
            stop = true;
          }
        });
        drgr()
      })
    }
  }
</script>

<style scoped>
.zdog-c {
  display: block;
  background-color: transparent;
  max-width: 500px;
  max-height: 500px;
  width: auto;
  height: auto;
  cursor: move;
}
</style>
