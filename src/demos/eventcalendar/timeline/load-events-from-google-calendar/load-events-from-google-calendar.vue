<script setup>
import { googleCalendarSync } from '@mobiscroll/calendar-integration'
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calendars = [
  {
    id: 'en.french#holiday@group.v.calendar.google.com',
    name: 'Holidays in France',
    color: '#D81B60'
  },
  {
    id: 'en.german#holiday@group.v.calendar.google.com',
    name: 'Holidays in Germany',
    color: '#F4511E'
  },
  {
    id: 'en.hungarian#holiday@group.v.calendar.google.com',
    name: 'Holidays in Hungary',
    color: '#AD1457'
  },
  {
    id: 'en.indian#holiday@group.v.calendar.google.com',
    name: 'Holidays in India',
    color: '#E4C441'
  },
  {
    id: 'en.romanian#holiday@group.v.calendar.google.com',
    name: 'Holidays in Romania',
    color: '#0B8043'
  },
  {
    id: 'en.uk#holiday@group.v.calendar.google.com',
    name: 'Holidays in United Kingdom',
    color: '#3F51B5'
  },
  {
    id: 'en.usa#holiday@group.v.calendar.google.com',
    name: 'Holidays in United States',
    color: '#8E24AA'
  }
]

const calendarIds = calendars.map((cal) => cal.id)

const myEvents = ref([])
const firstDay = ref(null)
const lastDay = ref(null)
const toastMessage = ref('')
const isToastOpen = ref(false)
const myView = ref({
  timeline: {
    type: 'month',
    eventList: true
  }
})

function onError(resp) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function loadEvents() {
  googleCalendarSync
    .getEvents(calendarIds, firstDay.value, lastDay.value)
    .then((resp) => {
      resp.forEach((event) => {
        event.resource = event.googleCalendarId
      })
      myEvents.value = resp
    })
    .catch(onError)
}

function handleToastClose() {
  isToastOpen.value = false
}

function handlePageLoading(args) {
  const start = args.firstDay
  const end = args.lastDay

  // Calculate dates
  // (pre-load events for previous and next pages as well)
  firstDay.value = new Date(start.getFullYear(), start.getMonth() - 1, start.getDate())
  lastDay.value = new Date(end.getFullYear(), end.getMonth() + 1, end.getDate())

  loadEvents()
}

onMounted(() => {
  // Init google client
  googleCalendarSync.init({
    apiKey: '<YOUR_GOOGLE_API_KEY>',
    onInit: loadEvents
  })
})
</script>

<template>
  <MbscEventcalendar
    className="md-google-calendar "
    :exclusiveEndDates="true"
    :clickToCreate="false"
    :dragToCreate="false"
    :view="myView"
    :data="myEvents"
    :resources="calendars"
    @page-loading="handlePageLoading"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-google-calendar .mbsc-timeline-day {
  min-width: 150px;
}
</style>
