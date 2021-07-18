import { ref, computed } from '@vue/composition-api';

const toghelpstate = ref({ tHelp: false })

function TOGGLE_HELP() {
  toghelpstate.value.tHelp = !toghelpstate.value.tHelp
}

function toggleHelp() {
  TOGGLE_HELP()
}

const getToggleHelp = computed(() => toghelpstate.value.tHelp)

export function enactHelp () {
  return {
    toggleHelp,
    getToggleHelp
  }
}
