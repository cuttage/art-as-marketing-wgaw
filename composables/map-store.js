import { reactive, computed, toRefs } from '@vue/composition-api';

import * as use from '~/composables/consts.js'
import useRaw from '~/composables/raw-data.js'
const {firstArr} = useRaw()

const state = reactive({
  objSuper: {},
  arr3: [],
  arr4: [],
  arr5: [],
  mappy: new Map
})

function keyByUsernameReducer(a, v) {
  return {...a, [v._uid]: v};
}

const createObject = () => {
  const temp = reactive({
    firstArrD: {
      body: []
    }
  })
  state.objSuper = computed(() => temp.firstArrD.body)
  temp.firstArrD.body = firstArr.value.body.reduce(keyByUsernameReducer, {})
}

function swap(json) {
  let ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret
}

function collate(swappee1, swappee2) {
  let arrone = swap(swappee1)
  let arrtwo = swap(swappee2)
  let result = { ...arrone,...arrtwo }
  return swap(result)
}

function changeArr3(swappee1, swappee2, n) {
  let ret = collate(swappee1, swappee2)
  let mep = new Map().set(n, ret)
  return mep
}

function putMapTogether({ range,reactor,uid }) {
  const temp2 = reactive({
    secondArr: {
      arr1: {
        img1_1: computed(() => use.multipleSizes1_A.src),
        img1_1SrcSet: computed(() => use.multipleSizes1_A.srcSet),
        keyword: "music"
      },
      arr2: {
        img1_2: computed(() => use.multipleSizes2_A.src),
        img1_2SrcSet: computed(() => use.multipleSizes2_A.srcSet),
        keyword: "music"
      },
      arr3: {
        img2_1: computed(() => use.multipleSizes3_A.src),
        img2_1SrcSet: computed(() => use.multipleSizes3_A.srcSet),
        keyword: "music"
      },
      arr4: {
        img2_2: computed(() => use.multipleSizes4_A.src),
        img2_2SrcSet: computed(() => use.multipleSizes4_A.srcSet),
        keyword: "music"
      },
      arr5: {
        img3_1: computed(() => use.multipleSizes5_A.src),
        img3_1SrcSet: computed(() => use.multipleSizes5_A.srcSet),
        keyword: "music"
      },
      arr6: {
        img3_2: computed(() => use.multipleSizes6_A.src),
        img3_2SrcSet: computed(() => use.multipleSizes6_A.srcSet),
        keyword: "music"
      },
      arr7: {
        img1_1: computed(() => use.multipleSizes1_B.src),
        img1_1SrcSet: computed(() => use.multipleSizes1_B.srcSet),
        keyword: "tailoring"
      },
      arr8: {
        img1_2: computed(() => use.multipleSizes2_B.src),
        img1_2SrcSet: computed(() => use.multipleSizes2_B.srcSet),
        keyword: "tailoring"
      },
      arr9: {
        img2_1: computed(() => use.multipleSizes3_B.src),
        img2_1SrcSet: computed(() => use.multipleSizes3_B.srcSet),
        keyword: "tailoring"
      },
      arr10: {
        img2_2: computed(() => use.multipleSizes4_B.src),
        img2_2SrcSet: computed(() => use.multipleSizes4_B.srcSet),
        keyword: "tailoring"
      },
      arr11: {
        img3_1: computed(() => use.multipleSizes5_B.src),
        img3_1SrcSet: computed(() => use.multipleSizes5_B.srcSet),
        keyword: "tailoring"
      },
      arr12: {
        img3_2: computed(() => use.multipleSizes6_B.src),
        img3_2SrcSet: computed(() => use.multipleSizes6_B.srcSet),
        keyword: "tailoring"
      },
      arr13: {
        img1_1: computed(() => use.multipleSizes1_C.src),
        img1_1SrcSet: computed(() => use.multipleSizes1_C.srcSet),
        keyword: "quality products"
      },
      arr14: {
        img1_2: computed(() => use.multipleSizes2_C.src),
        img1_2SrcSet: computed(() => use.multipleSizes2_C.srcSet),
        keyword: "quality products"
      },
      arr15: {
        img2_1: computed(() => use.multipleSizes3_C.src),
        img2_1SrcSet: computed(() => use.multipleSizes3_C.srcSet),
        keyword: "quality products"
      },
      arr16: {
        img2_2: computed(() => use.multipleSizes4_C.src),
        img2_2SrcSet: computed(() => use.multipleSizes4_C.srcSet),
        keyword: "quality products"
      },
      arr17: {
        img3_1: computed(() => use.multipleSizes5_C.src),
        img3_1SrcSet: computed(() => use.multipleSizes5_C.srcSet),
        keyword: "quality products"
      },
      arr18: {
        img3_2: computed(() => use.multipleSizes6_C.src),
        img3_2SrcSet: computed(() => use.multipleSizes6_C.srcSet),
        keyword: "quality products"
      }
    }
  })
  let acc = []
  range.map(v => acc['t'+v] = changeArr3(temp2.secondArr['arr'+v], uid, v));
  let mpe = v => [...acc['t'+range[v]]]
  return state['arr'+reactor] = new Map([...mpe(0), ...mpe(1), ...mpe(2), ...mpe(3), ...mpe(4), ...mpe(5)]);
}

function strongCollect({ range,reactors,uids }) {
  range.map(v => state.mappy.set(uids[v], state['arr'+reactors[v]]))
  return state.mappy;
}

function useMap () {
  createObject()
  putMapTogether({
    range: [1,2,3,4,5,6],
    reactor: 3,
    uid: state.objSuper.BUY6Drn9e1
  })
  putMapTogether({
    range: [7,8,9,10,11,12],
    reactor: 4,
    uid: state.objSuper.gJZoSLkfZV
  })
  putMapTogether({
    range: [13,14,15,16,17,18],
    reactor: 5,
    uid: state.objSuper.u1JCacoZxy
  })
  strongCollect({
    range: [0,1,2],
    reactors: [3,4,5],
    uids: [state.objSuper.BUY6Drn9e1._uid,state.objSuper.gJZoSLkfZV._uid,state.objSuper.u1JCacoZxy._uid]
  })
  return {
    ...toRefs(state)
  }
}

let isCalculated = false;
let lastResult;
export default function memoizedUseMap() {
  if (isCalculated) {
    return lastResult;
  }
  let result = useMap();
  lastResult = result;
  isCalculated = true;
  return result;
}
