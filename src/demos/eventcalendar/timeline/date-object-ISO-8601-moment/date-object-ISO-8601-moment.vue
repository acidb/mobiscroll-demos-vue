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

const myView = {
  timeline: {
    type: 'day'
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

const dateObjData = ref([
  {
    start: new Date(2020, 4, 19, 7),
    end: new Date(2020, 4, 19, 8),
    title: 'General orientation',
    color: '#35bb5a',
    resource: 2
  }
])

const selectedObj = ref(new Date(2020, 4, 19))

const isoData = ref([
  {
    start: '2020-05-20T07:00:00',
    end: '2020-05-20T08:00:00',
    title: 'Clever Conference',
    color: '#a71111',
    resource: 2
  }
])

const selectedISO = ref('2020-05-20')

const momentData = ref([
  {
    start: moment([2020, 4, 21, 7]),
    end: moment([2020, 4, 21, 8]),
    title: 'Product team mtg.',
    color: '#913aa7',
    resource: 2
  }
])

const selectedMoment = ref(moment([2020, 4, 21]))

function addDate() {
  const newEvent = {
    start: new Date(2020, 4, 19, 10, 45),
    end: new Date(2020, 4, 19, 11, 45),
    text: 'New Event',
    resource: 4
  }
  dateObjData.value = [...dateObjData.value, newEvent]
  selectedObj.value = new Date(2020, 4, 19)
}

function addISO() {
  const newEvent = {
    start: '2020-05-20T12:30:00',
    end: '2020-05-20T13:00:00',
    text: 'New Event',
    resource: 1
  }
  isoData.value = [...isoData.value, newEvent]
  selectedISO.value = '2020-05-20'
}

function addMoment() {
  const newEvent = {
    start: moment([2020, 4, 21, 11]),
    end: moment([2020, 4, 21, 14]),
    text: 'New Event',
    resource: 5
  }
  momentData.value = [...momentData.value, newEvent]
  selectedMoment.value = moment([2020, 4, 21])
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
              <MbscButton @click="addDate">
                start: new Date(2020, 4, 19, 10, 45) <br />
                end: new Date(2020, 4, 19, 11, 45)
              </MbscButton>
            </div>
            <MbscEventcalendar
              :data="dateObjData"
              :resources="myResources"
              :view="myView"
              :selectedDate="selectedObj"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">ISO string</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addISO">
                start: 2020-05-20T12:30:00 <br />
                end: 2020-05-20T13:00:00
              </MbscButton>
            </div>
            <MbscEventcalendar
              :data="isoData"
              :resources="myResources"
              :view="myView"
              :selectedDate="selectedISO"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Moment js</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addMoment">
                start: moment([2020, 4, 21, 11]) <br />
                end: moment([2020, 4, 21, 14])
              </MbscButton>
            </div>
            <MbscEventcalendar
              :data="momentData"
              :resources="myResources"
              :view="myView"
              :selectedDate="selectedMoment"
            />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
