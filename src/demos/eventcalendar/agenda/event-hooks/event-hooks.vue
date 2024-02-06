<script setup>
import {
  getJson,
  MbscDraggable,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const myView = {
  agenda: {
    type: 'month'
  }
}
const myInvalids = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  }
]
const dragData1 = {
  title: 'External drag 1',
  color: '#ffdab8'
}
const dragData2 = {
  title: 'External drag 2',
  color: '#ddfcf7'
}

function handleDestroy() {
  // Logic for destroying the event calendar
}
function handleEventClick() {
  // Logic for event click
}
function handleEventDoubleClick() {
  // Logic for event double click
}
function handleEventHoverIn() {
  // Logic for event hover in
}
function handleEventHoverOut() {
  // Logic for event hover out
}
function handleEventRightClick() {
  // Logic for event right click
}
function handleInit() {
  // Logic running on component init
}
function handlePageChange() {
  // Your custom event handler goes here
}
function handlePageLoaded() {
  // Use it to inject custom markup & attach custom listeners
}
function handlePageLoading() {
  // Use it to load data on demand
}
function handleSelectedDateChange() {
  // Use it to keep track of the selected date externally
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
  <div ref="dragElm1" class="event-hooks-draggable" :style="{ background: '#ffdab8' }">
    <div class="draggable-title">External drag 1</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="$refs.dragElm1" :dragData="dragData1" />
  </div>
  <div ref="dragElm2" class="event-hooks-draggable" :style="{ background: '#ddfcf7' }">
    <div class="draggable-title">External drag 2</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="$refs.dragElm2" :dragData="dragData2" />
  </div>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :invalid="myInvalids"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :externalDrop="true"
    @destroy="handleDestroy"
    @event-click="handleEventClick"
    @event-double-click="handleEventDoubleClick"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverOut"
    @event-right-click="handleEventRightClick"
    @init="handleInit"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-oading="handlePageLoading"
    @selected-date-change="handleSelectedDateChange"
  />
</template>
