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

const myView = {
  scheduler: { type: 'day' }
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
