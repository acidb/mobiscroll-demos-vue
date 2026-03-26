<script setup>
import {
  formatDate,
  getJson,
  MbscEventcalendar,
  MbscInput,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calEvents = ref([])
const listEvents = ref([])
const selectedEvent = ref([])
const displayResults = ref(false)

const calInst = ref(null)
const timer = ref(null)

const calView = { timeline: { type: 'month', eventDisplay: 'fill' } }
const listView = { agenda: { type: 'year', size: 5 } }

const myResources = [
  { id: 1, name: 'Resource 1', color: '#fdf500' },
  { id: 2, name: 'Resource 2', color: '#ff4600' },
  { id: 3, name: 'Resource 3', color: '#ff0101' },
  { id: 4, name: 'Resource 4', color: '#239a21' },
  { id: 5, name: 'Resource 5', color: '#8f1ed6' },
  { id: 6, name: 'Resource 6', color: '#01adff' }
]

function handleInputChange(ev) {
  const searchText = ev.target.value

  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    if (searchText.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents-timeline/?text=' + searchText,
        (data) => {
          listEvents.value = data
          displayResults.value = true
        },
        'jsonp'
      )
    } else {
      displayResults.value = false
    }
  }, 200)
}

function handlePageLoading(args) {
  const start = formatDate('YYYY-MM-DD', args.viewStart)
  const end = formatDate('YYYY-MM-DD', args.viewEnd)

  setTimeout(() => {
    getJson(
      'https://trial.mobiscroll.com/searchevents-timeline/?start=' + start + '&end=' + end,
      (data) => {
        calEvents.value = data
      },
      'jsonp'
    )
  })
}

function handleEventClick(args) {
  selectedEvent.value = [args.event]
  calInst.value.instance.navigateToEvent(args.event)
}
</script>

<template>
  <MbscPage cssClass="mds-full-height">
    <div class="mds-full-height mbsc-flex">
      <div class="mds-search-sidebar mbsc-flex-col mbsc-flex-none">
        <MbscInput
          autocomplete="off"
          startIcon="material-search"
          inputStyle="outline"
          placeholder="Search events"
          @input="handleInputChange"
        />
        <MbscEventcalendar
          v-if="displayResults"
          :data="listEvents"
          :resources="myResources"
          :showControls="false"
          :view="listView"
          @event-click="handleEventClick"
        />
      </div>
      <div class="mds-search-calendar mbsc-flex-1-1">
        <MbscEventcalendar
          ref="calInst"
          :clickToCreate="false"
          :data="calEvents"
          :dragToCreate="false"
          :dragToMove="false"
          :dragToResize="false"
          :resources="myResources"
          :selectMultipleEvents="true"
          :selectedEvents="selectedEvent"
          :view="calView"
          @page-loading="handlePageLoading"
        />
      </div>
    </div>
  </MbscPage>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-search-calendar {
  border-left: 1px solid #ccc;
  overflow: hidden;
}

.mds-search-sidebar {
  width: 350px;
}

.mds-search-sidebar .mbsc-textfield-wrapper.mbsc-ios {
  margin-top: 27px;
  margin-bottom: 26px;
}

.mds-search-sidebar .mbsc-textfield-wrapper.mbsc-material {
  margin-top: 26px;
  margin-bottom: 26px;
}

.mds-search-sidebar .mbsc-textfield-wrapper.mbsc-windows {
  margin-top: 35px;
  margin-bottom: 35px;
}

@media (min-width: 1135px) {
  .mds-search-sidebar .mbsc-textfield-wrapper.mbsc-windows {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
