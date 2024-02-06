<script setup>
import { getJson, MbscEventcalendar /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

const myEvents = ref([])
const myTheme = ref('material') // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
const myThemeVariant = ref('dark') // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

const myView = {
  timeline: { type: 'day' }
}

const myResources = ref([
  {
    id: 1,
    name: 'Ryan',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#ff4600'
  },
  {
    id: 3,
    name: 'John',
    color: '#ff0101'
  },
  {
    id: 4,
    name: 'Mark',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Sharon',
    color: '#8f1ed6'
  },
  {
    id: 6,
    name: 'Ashley',
    color: '#01adff'
  }
])

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :theme="myTheme"
    :themeVariant="myThemeVariant"
  />
</template>
