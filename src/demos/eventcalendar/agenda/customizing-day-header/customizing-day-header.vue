<script setup>
import {
  formatDate,
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const toastMessage = ref('')
const isToastOpen = ref(false)

const myView = {
  agenda: {
    type: 'month',
    showEmptyDays: true
  }
}

function addEvent(date) {
  const newEvent = {
    title: 'Event',
    start: date
  }

  myEvents.value = [...myEvents.value, newEvent]

  toastMessage.value = 'Event added'
  isToastOpen.value = true
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
  <MbscEventcalendar cssClass="mds-custom-day-header" :view="myView" :data="myEvents">
    <template #day="day">
      <div class="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">
        <div class="mbsc-flex-1-1">
          <div>{{ formatDate('D MMM YYYY', day.date) }}</div>
        </div>
        <MbscButton
          className="mds-custom-day-header-btn"
          color="primary"
          startIcon="plus"
          variant="outline"
          @click="addEvent(day.date)"
          >Add event</MbscButton
        >
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-custom-day-header .mbsc-event-day.mbsc-windows {
  padding: 8px 24px;
}

.mds-custom-day-header-btn.mbsc-button {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border-radius: 12px;
  margin: 0;
}
</style>
