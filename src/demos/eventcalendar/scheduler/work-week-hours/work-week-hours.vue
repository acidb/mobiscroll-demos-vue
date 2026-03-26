<script setup>
import {
  getJson,
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
  scheduler: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '09:00',
    endTime: '18:00'
  }
}

const myInvalid = [
  {
    start: '12:00',
    end: '13:00',
    title: 'Lunch break',
    type: 'lunch',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  }
]

function handleEventCreateFailed(args) {
  if (args.invalid.type == 'lunch') {
    toastMessage.value = "Can't create this task on lunch break."
    isToastOpen.value = true
  }
}

function handleEventUpdateFailed(args) {
  if (args.invalid.type == 'lunch') {
    toastMessage.value = "Can't schedule this task on lunch break."
    isToastOpen.value = true
  }
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/workday-events/',
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
    :invalid="myInvalid"
    :dragToCreate="true"
    :dragToMove="true"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
