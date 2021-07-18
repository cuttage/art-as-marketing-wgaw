import { reactive, toRefs } from '@vue/composition-api';

import react from '~/composables/react-common.js'

const reacteeRight = reactive({
  i1Set: '',
  i1: '',
  i4Set: '',
  i4: '',
  i2Set: '',
  i2: '',
  i5Set: '',
  i5: '',
  i3Set: '',
  i3: '',
  i6Set: '',
  i6: ''
})

export default function useReactRight (name) {
  react(name, reacteeRight)
  return {
    ...toRefs(reacteeRight)
  }
}
