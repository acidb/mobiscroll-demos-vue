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
const mySelectedEvent = ref([])
const showList = ref(false)
const currentDate = ref(new Date())
const timer = ref(null)

const calView = {
  schedule: {
    type: 'week'
  }
}

const listView = {
  agenda: {
    type: 'year',
    size: 5
  }
}

function handleSearch(ev) {
  const text = ev.target.value

  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }

  timer.value = setTimeout(() => {
    if (text.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?text=' + text,
        (data) => {
          listEvents.value = data
          showList.value = true
        },
        'jsonp'
      )
    } else {
      showList.value = false
    }
  }, 200)
}

function handlePageLoading(args) {
  const start = formatDate('YYYY-MM-DD', args.viewStart)
  const end = formatDate('YYYY-MM-DD', args.viewEnd)

  setTimeout(() => {
    getJson(
      'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
      (data) => {
        calEvents.value = data
      },
      'jsonp'
    )
  })
}

function handleEventClick(args) {
  currentDate.value = args.event.start
  mySelectedEvent.value = [args.event]
}
</script>

<template>
  <MbscPage>
    <div class="md-search-events-sidebar mbsc-flex">
      <div class="md-search-events-cont mbsc-flex-col mbsc-flex-none">
        <MbscInput
          startIcon="material-search"
          inputStyle="outline"
          placeholder="Search events"
          @input="handleSearch"
        />
        <MbscEventcalendar
          v-if="showList"
          :view="listView"
          :data="listEvents"
          :showControls="false"
          @event-click="handleEventClick"
        />
      </div>
      <div class="md-search-events-calendar mbsc-flex-1-1">
        <MbscEventcalendar
          :clickToCreate="false"
          :dragToCreate="false"
          :dragToMove="false"
          :dragToResize="false"
          :selectMultipleEvents="true"
          :view="calView"
          :data="calEvents"
          :selectedEvents="mySelectedEvent"
          :selectedDate="currentDate"
          @page-loading="handlePageLoading"
        />
      </div>
    </div>
  </MbscPage>
</template>

<style>
.md-search-events-cont {
  width: 350px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
  margin-top: 34px;
  margin-bottom: 34px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-windows {
  margin-top: 8px;
  margin-bottom: 8px;
}

@media (min-width: 1135px) {
  .md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .md-search-events-cont .mbsc-textfield-wrapper.mbsc-windows {
    margin-top: 14px;
    margin-bottom: 14px;
  }
}

.md-search-events-calendar {
  border-left: 1px solid #ccc;
  overflow: hidden;
}

.demo-searching-events-in-sidebar,
.md-search-events-sidebar,
.md-search-events-calendar {
  height: 100%;
}
</style>
