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
const allLabelsView = { calendar: { type: 'month', labels: 'all' } }
const nrLabelsView = { calendar: { type: 'month', labels: 3 } }
const fitLabelsView = { calendar: { labels: true } }
const allLabelsWeekView = { calendar: { type: 'week', labels: 'all' } }
const nrLabelsWeekView = { calendar: { type: 'week', labels: 3 } }
const fitLabelsWeekView = { calendar: { type: 'week', labels: true } }

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
            <div class="mbsc-form-group-title">All labels</div>
            <!-- dragOptions -->
            <MbscEventcalendar :data="myEvents" :view="allLabelsView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Up to 3 labels</div>
            <!-- dragOptions -->
            <MbscEventcalendar :data="myEvents" :view="nrLabelsView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Labels fitting the row</div>
            <!-- dragOptions -->
            <MbscEventcalendar :data="myEvents" :view="fitLabelsView" />
          </div>
        </div>
      </div>
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">All labels</div>
            <!-- dragOptions -->
            <MbscEventcalendar :data="myEvents" :view="allLabelsWeekView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Up to 3 labels</div>
            <!-- dragOptions -->
            <MbscEventcalendar :data="myEvents" :view="nrLabelsWeekView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Labels fitting the row</div>
            <!-- dragOptions -->
            <MbscEventcalendar :data="myEvents" :view="fitLabelsWeekView" />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
