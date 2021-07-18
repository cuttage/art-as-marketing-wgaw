import { ref, computed } from '@vue/composition-api';

const togcstate = ref({ tC: false })
const togcstate2 = ref({ tC2: false })

function TOGGLE_CUTTAGE() {
  togcstate.value.tC = !togcstate.value.tC
}

function TOGGLE_CUTTAGE2() {
  togcstate2.value.tC2 = !togcstate2.value.tC2
}

function toggleCuttage() {
  TOGGLE_CUTTAGE()
}

function toggleCuttage2() {
  TOGGLE_CUTTAGE2()
}

const getToggleCuttage = computed(() => togcstate.value.tC)
const getToggleCuttage2 = computed(() => togcstate2.value.tC2)

export function enactC () {
  return {
    toggleCuttage,
    getToggleCuttage,
    toggleCuttage2,
    getToggleCuttage2
  }
}
