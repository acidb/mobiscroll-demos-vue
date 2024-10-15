<script setup>
import {
  getJson,
  MbscDatepicker,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const mySelectedDate = ref(new Date())
const dayView = { agenda: { type: 'day' } }

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div class="mds-external-nav-agenda mbsc-flex">
    <div class="mds-external-nav-dp">
      <MbscDatepicker
        display="inline"
        :value="mySelectedDate"
        @change="mySelectedDate = $event.value"
      />
    </div>
    <div class="mds-external-nav-ec mbsc-flex-1-1">
      <MbscEventcalendar
        :data="myEvents"
        :selectedDate="mySelectedDate"
        :view="dayView"
        @selected-date-change="mySelectedDate = $event.date"
      />
    </div>
  </div>
</template>

<style>
.mds-external-nav-agenda {
  height: 100%;
}

.mds-external-nav-dp .mbsc-datepicker-inline {
  height: auto;
}

.mds-external-nav-ec {
  border-left: 1px solid #ccc;
}

@media screen and (max-width: 700px) {
  .mds-external-nav-agenda {
    display: block;
  }
}
</style>
