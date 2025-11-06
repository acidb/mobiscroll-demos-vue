<script setup>
import {
  getJson,
  MbscDropdown,
  MbscEventcalendar,
  MbscPage /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

const myEvents = ref([])
const myTheme = ref('material')
const myThemeVariant = ref('dark')
const myView = { timeline: { type: 'day' } }
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
  <MbscPage cssClass="mds-full-height">
    <div class="mds-full-height mbsc-flex-col">
      <div class="mbsc-grid">
        <div class="mbsc-row">
          <div class="mbsc-col-sm-6">
            <MbscDropdown inputStyle="box" label="Theme" labelStyle="stacked" v-model="myTheme">
              <option value="auto">Auto</option>
              <option value="ios">iOS</option>
              <option value="material">Material</option>
              <option value="windows">Windows</option>
            </MbscDropdown>
          </div>
          <div class="mbsc-col-sm-6">
            <MbscDropdown
              inputStyle="box"
              label="Theme variant"
              labelStyle="stacked"
              v-model="myThemeVariant"
            >
              <option value="auto">Auto</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </MbscDropdown>
          </div>
        </div>
      </div>
      <div className="mds-overflow-hidden mbsc-flex-1-1">
        <MbscEventcalendar
          :data="myEvents"
          :resources="myResources"
          :theme="myTheme"
          :themeVariant="myThemeVariant"
          :view="myView"
        />
      </div>
    </div>
  </MbscPage>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-overflow-hidden {
  overflow: hidden;
}
</style>
