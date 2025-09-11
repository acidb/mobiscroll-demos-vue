<script setup>
import { getJson, MbscEventcalendar /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

const myEvents = ref([])
const myTheme = ref('material') // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
const myThemeVariant = ref('dark') // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

const myView = {
  calendar: { labels: true }
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
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :theme="myTheme"
    :themeVariant="myThemeVariant"
  />
</template>
