<template>
  <keep-alive>
    <div>
      <div v-if="getToggleHelp === true" class="p-wrppr p-wrppr-nB">
        <div class="p-blck p-crd p-crd-t">
          <slot name="HelpWrapSlot"></slot>
          <hr>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import { enactHelp } from '~/composables/toggle-help-store.js'
export default {
  props: ['mother'],
  setup () {
    const { getToggleHelp } = enactHelp();

    return {
      getToggleHelp
    }
  }
}
</script>
