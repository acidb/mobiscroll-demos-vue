<script setup>
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myView = {
  scheduler: {
    type: 'month',
    timeCellStep: 15,
    timeLabelStep: 15
  }
}

const resourceNr = 20
const eventsNr = 2000
const myResources = []
const myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a']

for (let i = 1; i <= resourceNr; i++) {
  myResources.push({ name: 'Resource ' + i, id: i })
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function handlePageLoading(args) {
  setTimeout(() => {
    const newEvents = []
    const year = args.firstDay.getFullYear()
    const month = args.firstDay.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    // Generate random events for the visible month
    for (let i = 0; i < eventsNr; i++) {
      const day = getRandomInt(1, daysInMonth + 1)
      const resource = getRandomInt(1, resourceNr + 1)
      const color = getRandomInt(0, myEventColors.length)
      const startHour = getRandomInt(0, 23)
      const startMinute = getRandomInt(0, 4) * 15
      const start = new Date(year, month, day, startHour, startMinute)
      const end = new Date(start.getTime() + getRandomInt(2, 9) * 15 * 60 * 1000)
      if (end.getDate() === start.getDate()) {
        newEvents.push({
          color: myEventColors[color],
          end: end,
          resource: resource,
          start: start,
          title: 'Event ' + i
        })
      }
    }
    myEvents.value = newEvents
  })
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    groupBy="date"
    @page-loading="handlePageLoading"
  />
</template>
