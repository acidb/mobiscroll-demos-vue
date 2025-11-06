<script setup>
import {
  getJson,
  hijriCalendar,
  jalaliCalendar,
  localeAr,
  localeFa,
  MbscEventcalendar,
  MbscPage,
  setOptions
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // theme
})

const myEvents = ref([])

const myResources = ref([
  {
    id: 1,
    name: 'Ryan',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#ff4600'
  },
  {
    id: 3,
    name: 'John',
    color: '#ff0101'
  },
  {
    id: 4,
    name: 'Mark',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Sharon',
    color: '#8f1ed6'
  },
  {
    id: 6,
    name: 'Ashley',
    color: '#01adff'
  }
])

const myView = {
  timeline: { type: 'day' }
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
  <MbscPage>
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Gregorian calendar</div>
            <!-- dragOptions -->
            <MbscEventcalendar :data="myEvents" :view="myView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Jalali calendar</div>
            <MbscEventcalendar
              :data="myEvents"
              :calendarSystem="jalaliCalendar"
              :locale="localeFa"
              :view="myView"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Hijri calendar</div>
            <MbscEventcalendar
              :data="myEvents"
              :resources="myResources"
              :calendarSystem="hijriCalendar"
              :locale="localeAr"
              :view="myView"
            />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
