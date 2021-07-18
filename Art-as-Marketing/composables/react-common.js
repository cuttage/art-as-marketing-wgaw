import { computed } from '@vue/composition-api'

import memoizedUseMap from '~/composables/map-store.js'
const {mappy} = memoizedUseMap()

const pipe = (...fns) => (x) => fns.reduce((v, f) => v => f(v), x);
//source of curry: https://gist.github.com/WaldoJeffers/ebc37a2b81c148fcf2cd6b97eae254cb
const curry = (fn, arity = fn.length) => (...args) => args.length >= arity ? fn(...args) : (...moreArgs) => curry(fn)(...args, ...moreArgs)

const adder = value => value + 6;

const cond = (x,f,r,y,n,s) => { if(y.value === n || y.value === f(n) || y.value === f(f(n))) return r(x,y,s) } // change here to add/remove categories (1/2)

const res = (x,y,s) => mappy.value.get(x.value).get(y.value)['img' + s]

function getImgData({ x,f,r,c },y,n,o,s,rcte) {
  rcte[o] = computed(() => c(x,f,r,y,n,s))
}

export default async function react(name, rcte) {
  let product = computed(() => name)

  let ams = {
    x: product,
    f: adder,
    r: res,
    c: cond
  }

  let _add = curry(getImgData);

  let a = ({f},num) => computed(() => {
    return product.value === 'BUY6Drn9e1' ? num : product.value === 'gJZoSLkfZV' ? f(num) : product.value === 'u1JCacoZxy' ? f(f(num)) : f(f(f(num))) //...and so on. // change here to add/remove categories (2/2)
  })

  function * generator(i) {
    while (i) {
      yield i;
      yield i;
      yield i;
      yield i++;
    }
  }

  const g = generator(1);
  let v = g => g.next().value

  return pipe(
    _add(ams)(a(ams,v(g)),v(g))('i1Set','1_1SrcSet')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i1','1_1')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i4Set','1_2SrcSet')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i4','1_2')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i2Set','2_1SrcSet')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i2','2_1')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i5Set','2_2SrcSet')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i5','2_2')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i3Set','3_1SrcSet')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i3','3_1')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i6Set','3_2SrcSet')(rcte),
    _add(ams)(a(ams,v(g)),v(g))('i6','3_2')(rcte),
  )();
}
