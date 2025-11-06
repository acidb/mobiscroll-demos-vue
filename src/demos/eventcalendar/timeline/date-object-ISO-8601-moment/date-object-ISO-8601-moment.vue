<script setup>
import {
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import moment from 'moment'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const selectedDateObj = ref(new Date(2020, 4, 19))
const selectedDateISO = ref('2020-05-20')
const selectedDateMoment = ref(moment([2020, 4, 21]))

const dateObjEvents = ref([
  {
    start: new Date(2020, 4, 19, 7),
    end: new Date(2020, 4, 19, 8),
    title: 'General orientation',
    resource: 2
  }
])

const dateISOEvents = ref([
  {
    start: '2020-05-20T07:00:00',
    end: '2020-05-20T08:00:00',
    title: 'Clever Conference',
    resource: 2
  }
])

const dateMomentEvents = ref([
  {
    start: moment([2020, 4, 21, 7]),
    end: moment([2020, 4, 21, 8]),
    title: 'Product team mtg.',
    resource: 2
  }
])

const myView = {
  timeline: {
    type: 'week'
  }
}

const myResources = [
  {
    id: 1,
    name: 'Resource A',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff4600'
  }
]

function addDateObjEvent() {
  const newEvent = {
    start: new Date(2020, 4, 19, 10, 45),
    end: new Date(2020, 4, 19, 11, 45),
    text: 'New Event',
    resource: 4
  }
  dateObjEvents.value = [...dateObjEvents.value, newEvent]
  selectedDateObj.value = new Date(2020, 4, 19)
}

function addDateISOEvent() {
  const newEvent = {
    start: '2020-05-20T12:30:00',
    end: '2020-05-20T13:00:00',
    text: 'New Event',
    resource: 1
  }
  dateISOEvents.value = [...dateISOEvents.value, newEvent]
  selectedDateISO.value = '2020-05-20'
}

function addDateMomentEvent() {
  const newEvent = {
    start: moment([2020, 4, 21, 11]),
    end: moment([2020, 4, 21, 14]),
    text: 'New Event',
    resource: 5
  }
  dateMomentEvents.value = [...dateMomentEvents.value, newEvent]
  selectedDateMoment.value = moment([2020, 4, 21])
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Date object</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addDateObjEvent">
                start: new Date(2020, 4, 19, 10, 45) <br />
                end: new Date(2020, 4, 19, 11, 45)
              </MbscButton>
            </div>
            <!-- dragOptions -->
            <MbscEventcalendar
              :data="dateObjEvents"
              :view="myView"
              :resource="myResources"
              :selectedDate="selectedDateObj"
              @selected-date-change="selectedDateObj = $event.date"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">ISO 8601 date string</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addDateISOEvent">
                start: 2020-05-20T12:30:00 <br />
                end: 2020-05-20T13:00:00
              </MbscButton>
            </div>
            <!-- dragOptions -->
            <MbscEventcalendar
              :data="dateISOEvents"
              :view="myView"
              :resource="myResources"
              :selectedDate="selectedDateISO"
              @selected-date-change="selectedDateISO = $event.date"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Moment.js object</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addDateMomentEvent">
                start: moment([2020, 4, 21, 11]) <br />
                end: moment([2020, 4, 21, 14])
              </MbscButton>
            </div>
            <!-- dragOptions -->
            <MbscEventcalendar
              :data="dateMomentEvents"
              :view="myView"
              :resource="myResources"
              :selectedDate="selectedDateMoment"
              @selected-date-change="selectedDateMoment = $event.date"
            />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
