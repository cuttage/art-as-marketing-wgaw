import { reactive, computed } from '@vue/composition-api';
const rawCaptionsAbove = reactive({
  captsa: [
    {
      _uid: "BUY6Drn9e1",
      caption: "Entertain in action. We turn audiences into animated participants. Or else."
    },
    {
      _uid: "gJZoSLkfZV",
      caption: "More than a great sales incentive. We turn tailoring into (digital) architectural installations. Or else."
    },
    {
      _uid: "u1JCacoZxy",
      caption: "See things in new, surprising ways. We turn quality products into (tokenized) assets. Or else."
    }
  ]
})

const captions_above = computed(() => rawCaptionsAbove.captsa)

export default function useCaption (data) {
  let caption = rawCaptionsAbove.captsa.find(c => c._uid == data).caption
  return {
    caption,
    captions_above
  }
}
