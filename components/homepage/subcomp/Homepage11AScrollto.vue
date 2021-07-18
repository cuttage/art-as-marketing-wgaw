<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <!--eslint-disable-->
  <div class="cntnr">
    <div class="day c-d1 a1">
      <div class="declaration declaration1">
        <div class="text">
          <div id="target-d1 tI" class="t-s-d3 t-d3var">Exploit an haute-couture design strategy.
            <div class="sbt-d3 tI">Anywhere you promote or sell,</div>
            <div class="c-s2-d3">
              <div class="s2-d3 tI">Give your customer a full-blown,</div>
              <div class="s-s22-d3">
                <div class="s22-d3 tI">original soundtrack Music experience.</div>
                <div class="s222-d3 tI">*</div>
              </div>
            </div>
            <div class="s3-d3 tI">A small investment, great added value.</div>
            <div class="c-s4-s5-d3">
              <div class="s4-d3 tI s4-d3-bsnss">Original studio Music brought to your selling sites</div>
              <div class="s44-d3 tI">brings customer awareness to match your service quality.</div>
              <div class="s5-d3 tI">*Is this the best haute-couture tweak for you? We will find out.</div>
            </div>
            <Help v-if="father === 'Homepage1Scrollto'" :mother="mother" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Help from '~/components/Help.vue'
export default {
  props: ['father'],
  components: {
    Help
  },
  data() {
    return {
      mother: 'Homepage11AScrollto'
    }
  }
}
</script>
