<script setup>
import { print } from '@mobiscroll/print'
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const calendarRef = ref(null)
const myView = {
  agenda: {
    type: 'month'
  }
}

function printView() {
  calendarRef.value.instance.print()
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/work-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage>
    <MbscButton @click="printView()">Print agenda</MbscButton>
    <!-- dragOptions -->
    <MbscEventcalendar ref="calendarRef" :data="myEvents" :view="myView" :modules="[print]" />
  </MbscPage>
</template>
