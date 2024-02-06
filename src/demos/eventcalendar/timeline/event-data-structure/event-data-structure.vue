<script setup>
import {
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const myEvents = ref([
  {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
    end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
    title: 'General orientation',
    resource: 2
  }
])

const myResources = ref([
  {
    id: 1,
    name: 'Resource A',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff4600'
  }
])

const toastMessage = ref('')
const isToastOpen = ref(false)
const mySelectedDate = ref(now)

const myView = {
  timeline: { type: 'week' }
}

function addEvent() {
  const newEvent = {
    // base properties
    title: 'Product planning',
    start: new Date(2018, 11, 21, 13),
    end: new Date(2018, 11, 21, 14),
    resource: 4,
    // add any property you'd like
    busy: true,
    description: 'Weekly meeting with team',
    location: 'Office'
  }

  mySelectedDate.value = new Date(2018, 11, 21)
  myEvents.value = [...myEvents.value, newEvent]

  toastMessage.value = 'Event added'
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscPage>
    <MbscEventcalendar
      :view="myView"
      :data="myEvents"
      :resources="myResources"
      :selectedDate="mySelectedDate"
    />
    <div class="mbsc-button-group-block">
      <MbscButton @click="addEvent()">Add event to calendar</MbscButton>
    </div>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </MbscPage>
</template>
