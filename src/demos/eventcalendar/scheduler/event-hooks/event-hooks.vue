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
const myResources = [
  { id: 1, name: 'Ryan', color: '#f7c4b4' },
  { id: 2, name: 'Kate', color: '#c6f1c9' },
  { id: 3, name: 'John', color: '#e8d0ef' }
]
const myView = {
  scheduler: {
    type: 'day'
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

const dragElm1 = ref()
const dragElm2 = ref()

function handleCellClick() {
  // Logic for event click
}
function handleCellDoubleClick() {
  // Logic for cell double click
}
function handleCellRightClick() {
  // Logic for cell right click
}
function handleCellHoverIn() {
  // Logic for cell hover in
}
function handleCellHoverOut() {
  // Logic for cell hover out
}
function handleDestroy() {
  // Logic for destroying the event calendar
}
function handleEventClick() {
  // Logic for event click
}
function handleEventCreate() {
  // Logic for event create
}
function handleEventCreated() {
  // Logic for event created
}
function handleEventCreateFailed() {
  // Logic for failed event create
}
function handleEventDelete() {
  // Logic for event delete
}
function handleEventDeleted() {
  // Logic for event deleted
}
function handleEventDoubleClick() {
  // Logic for event double click
}
function handleEventDragStart() {
  // Logic for event drag start
}
function handleEventDragEnd() {
  // Logic for event drag end
}
function handleEventDragEnter() {
  // Logic for event drag enter
}
function handleEventDragLeave() {
  // Logic for event drag leave
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
function handleEventUpdate() {
  // Logic for event update
}
function handleEventUpdated() {
  // Logic for event updated
}
function handleEventUpdateFailed() {
  // Logic for failed event update
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
function handleResourceClick() {
  // Logic for resource click
}
function handleResourceDoubleClick() {
  // Logic for resource double click
}
function handleResourceRightClick() {
  // Logic for resource right click
}
function handleResourceHoverIn() {
  // Logic for resource hover in
}
function handleResourceHoverOut() {
  // Logic for resource hover out
}
function handleSelectedDateChange() {
  // Use it to keep track of the selected date externally
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/resource-events/',
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
    <MbscDraggable :element="dragElm1" :dragData="dragData1" />
  </div>
  <div ref="dragElm2" class="event-hooks-draggable" :style="{ background: '#ddfcf7' }">
    <div class="draggable-title">External drag 2</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="dragElm2" :dragData="dragData2" />
  </div>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :invalid="myInvalids"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :externalDrop="true"
    :resources="myResources"
    @cell-click="handleCellClick"
    @cell-double-click="handleCellDoubleClick"
    @cell-right-click="handleCellRightClick"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
    @destroy="handleDestroy"
    @event-click="handleEventClick"
    @event-create="handleEventCreate"
    @event-created="handleEventCreated"
    @event-create-failed="handleEventCreateFailed"
    @event-delete="handleEventDelete"
    @event-deleted="handleEventDeleted"
    @event-double-click="handleEventDoubleClick"
    @event-drag-start="handleEventDragStart"
    @event-drag-end="handleEventDragEnd"
    @event-drag-enter="handleEventDragEnter"
    @event-drag-leave="handleEventDragLeave"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverOut"
    @event-right-click="handleEventRightClick"
    @event-update="handleEventUpdate"
    @event-updated="handleEventUpdated"
    @event-update-failed="handleEventUpdateFailed"
    @init="handleInit"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-loading="handlePageLoading"
    @resource-click="handleResourceClick"
    @resource-double-click="handleResourceDoubleClick"
    @resource-right-click="handleResourceRightClick"
    @resource-hover-in="handleResourceHoverIn"
    @resource-hover-out="handleResourceHoverOut"
    @selected-date-change="handleSelectedDateChange"
  ></MbscEventcalendar>
</template>

<style>
.event-hooks-draggable {
  padding: 10px 20px;
  display: inline-block;
  margin: 15px;
  border-radius: 8px;
  width: 210px;
}

.event-hooks-draggable .draggable-title {
  font-size: 16px;
  font-weight: 600;
}

.event-hooks-draggable .draggable-text {
  opacity: 0.7;
  line-height: 25px;
}

.event-hooks-draggable-1 {
  background: #ffdab8;
}

.event-hooks-draggable-2 {
  background: #ddfcf7;
}
</style>
