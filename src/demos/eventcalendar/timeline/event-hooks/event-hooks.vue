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
  timeline: {
    type: 'day',
    resourceReorder: true
  }
}
const myResources = ref([
  { id: 1, name: 'Ryan', color: '#fdf500' },
  { id: 2, name: 'Kate', color: '#ff4600' },
  { id: 3, name: 'John', color: '#ff0101' },
  { id: 4, name: 'Mark', color: '#239a21' },
  { id: 5, name: 'Sharon', color: '#8f1ed6' },
  { id: 6, name: 'Ashley', color: '#01adff' }
])
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

const dragData3 = {
  name: 'External resource',
  color: '#d19494'
}

const dragElm1 = ref()
const dragElm2 = ref()
const dragElm3 = ref()

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
function handleResourceDragEnd() {
  // Logic for resource drag end
}
function handleResourceDragStart() {
  // Logic for resource drag start
}
function handleResourceOrderUpdate() {
  // Logic for resource update
}
function handleResourceCreate() {
  // Logic for resource create
}
function handleResourceCreated() {
  // Logic for resource created
}
function handleResourceDelete() {
  // Logic for resource delete
}
function handleResourceDeleted() {
  // Logic for resource deleted
}
function handleResourceDragEnter() {
  // Logic for resource update
}
function handleResourceDragLeave() {
  // Logic for resource update
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
    'https://trial.mobiscroll.com/timeline-events/',
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
  <div ref="dragElm3" class="event-hooks-draggable" :style="{ background: '#d19494' }">
    <div class="draggable-title">External resource</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="dragElm3" :dragData="dragData3" type="resource" />
  </div>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :invalid="myInvalids"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :externalDrop="true"
    :externalResourceDrop="true"
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
    @resource-drag-end="handleResourceDragEnd"
    @resource-drag-start="handleResourceDragStart"
    @resource-order-update="handleResourceOrderUpdate"
    @resource-create="handleResourceCreate"
    @resource-created="handleResourceCreated"
    @resource-delete="handleResourceDelete"
    @resource-deleted="handleResourceDeleted"
    @resource-drag-enter="handleResourceDragEnter"
    @resource-drag-leave="handleResourceDragLeave"
    @resource-right-click="handleResourceRightClick"
    @resource-hover-in="handleResourceHoverIn"
    @resource-hover-out="handleResourceHoverOut"
    @selected-date-change="handleSelectedDateChange"
  />
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
