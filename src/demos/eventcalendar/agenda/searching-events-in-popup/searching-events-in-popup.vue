<script setup>
import {
  formatDate,
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calEvents = ref([])
const isPopupOpen = ref(false)
const listEvents = ref([])
const searchInput = ref(null)
const selectedEvent = ref([])

const calInst = ref(null)
const timer = ref(null)
const inputRef = ref(null)

const calView = { agenda: { type: 'month' } }
const listView = { agenda: { type: 'year', size: 5 } }

function handleInputChange(ev) {
  const searchText = ev.target.value

  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    if (searchText.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?text=' + searchText,
        (data) => {
          listEvents.value = data
          isPopupOpen.value = true
        },
        'jsonp'
      )
    } else {
      isPopupOpen.value = false
    }
  }, 200)
}

function handleInputFocus(ev) {
  if (ev.target.value.length > 0) {
    isPopupOpen.value = true
  }
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

function handlePopupClose() {
  isPopupOpen.value = false
}

function handleEventClick(args) {
  selectedEvent.value = [args.event]
  isPopupOpen.value = false
  calInst.value.instance.navigateToEvent(args.event)
}

function handleInit() {
  setTimeout(() => {
    searchInput.value = inputRef.value.instance.nativeElement
  })
}
</script>

<template>
  <MbscEventcalendar
    ref="calInst"
    :data="calEvents"
    :selectMultipleEvents="true"
    :selectedEvents="selectedEvent"
    :view="calView"
    @init="handleInit"
    @page-loading="handlePageLoading"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="mds-search-bar mbsc-flex-1-0">
        <MbscInput
          autocomplete="off"
          inputStyle="box"
          placeholder="Search events"
          startIcon="material-search"
          ref="inputRef"
          @input="handleInputChange"
          @focus="handleInputFocus"
        />
      </div>
      <MbscCalendarPrev />
      <MbscCalendarToday />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
  <MbscPopup
    display="anchored"
    :anchor="searchInput"
    :contentPadding="false"
    :focusElm="searchInput"
    :focusOnClose="false"
    :focusOnOpen="false"
    :isOpen="isPopupOpen"
    :scrollLock="false"
    :showArrow="false"
    :showOverlay="false"
    :width="200"
    @close="handlePopupClose"
  >
    <MbscEventcalendar
      cssClass="mds-search-results"
      :data="listEvents"
      :showControls="false"
      :view="listView"
      @event-click="handleEventClick"
    />
  </MbscPopup>
</template>

<style>
.mds-search-bar .mbsc-textfield-wrapper {
  max-width: 400px;
  margin: 8px auto;
}

.mds-search-bar .mbsc-textfield.mbsc-ios-dark {
  background: #313131;
}

.mds-search-results .mbsc-calendar-wrapper {
  margin-top: -1px;
}
</style>
