<template>
  <component :is="whichHelpWrap" :mother="mother">
    <template v-slot:HelpWrapSlot>
      <div v-if="mother === 'Homepage11AScrollto' || mother === 'Subtouch1'">
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">* In Stores, Stories & beyond</a>
        <br />
        <br />
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">&#10132; Read pioneering research</a></br></br>
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">We use the word Design loosely</a></br></br>
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">Fy: for you</a>
      </div>
      <div v-else-if="mother === 'Homepage11CScrollto'">
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">&#10132; What are human experiences?</a>
        <br />
        <br />
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">We also give Brand Experiences as Products or Services</a>
      </div>
      <div v-else-if="mother === 'Subtouch3'">
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">&#10132; What are human experiences?</a>
        <br />
        <br />
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">We also give Brand Experiences as Products or Services</a></br></br>
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">Must read: Business</a></br></br>
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">Suggested reads: Land Developer</a>
      </div>
      <div v-else-if="mother === 'Homepage11EScrollto' || mother === 'Subtouch5'">
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">* Rewards or Semi-rewards</a></br></br>
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">&#10132; Not a big expense for you, compared to house prices</a></br></br>
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">&#10132; Your gain is so much higher</a></br></br>
        <a class ="no-dcr-a" href="https://www.google.com/" target="_blank">&#10132; Inject the right operation in due time</a>
      </div>
    </template>
  </component>
</template>

<script>
import HelpWrap from '~/components/HelpWrap.vue'
import HelpWrapMob from '~/components/HelpWrapMob.vue'
export default {
  props: ['mother'],
  components: {
    HelpWrap,
    HelpWrapMob
  },
  computed: {
    whichHelpWrap() {
      return (this.mother === 'Subtouch1' || this.mother === 'Subtouch3' || this.mother === 'Subtouch5') ? 'HelpWrapMob' : 'HelpWrap'
    }
  }
}
</script>
