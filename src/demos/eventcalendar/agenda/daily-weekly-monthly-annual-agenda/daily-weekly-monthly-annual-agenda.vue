<script setup>
import {
  getJson,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const dayView = {
  agenda: { type: 'day' }
}

const weekView = {
  agenda: { type: 'week' }
}

const monthView = {
  agenda: { type: 'month' }
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
            <div class="mbsc-form-group-title">Daily schedule</div>
            <MbscEventcalendar :view="dayView" :data="myEvents" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Weekly schedule</div>
            <MbscEventcalendar :view="weekView" :data="myEvents" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Monthly schedule</div>
            <MbscEventcalendar :view="monthView" :data="myEvents" />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
