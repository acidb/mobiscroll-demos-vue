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

function handleSelectedDateChange(args) {
  mySelectedDate.value = args.date
}

function handleDateChange(args) {
  mySelectedDate.value = args.value
}

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
  <div class="mds-external-nav-calendar mbsc-flex">
    <div class="mds-external-nav-dp">
      <MbscDatepicker display="inline" :value="mySelectedDate" @change="handleDateChange" />
    </div>
    <div class="mds-external-nav-ec mbsc-flex-1-1">
      <MbscEventcalendar
        :data="myEvents"
        :selectedDate="mySelectedDate"
        @selected-date-change="handleSelectedDateChange"
      />
    </div>
  </div>
</template>

<style>
.mds-external-nav-calendar {
  height: 100%;
}

.mds-external-nav-dp .mbsc-datepicker-inline {
  height: auto;
}

.mds-external-nav-ec {
  border-left: 1px solid #ccc;
}

@media screen and (max-width: 700px) {
  .mds-external-nav-calendar {
    display: block;
  }
}
</style>
