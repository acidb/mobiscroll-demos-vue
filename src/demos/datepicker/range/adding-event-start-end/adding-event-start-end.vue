<script setup>
import {
  MbscDatepicker,
  MbscInput,
  MbscPage,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSwitch,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const allDay = ref(false)
const showAs = ref('busy')
const myControls = ref(['datetime'])
const startInput = ref(null)
const endInput = ref(null)

function allDayChange() {
  myControls.value = allDay.value ? ['date'] : ['datetime']
}
</script>

<template>
  <MbscPage>
    <MbscInput label="Title" placeholder="Name of the event" />
    <MbscInput label="Location" placeholder="Where will it be?" />
    <MbscSwitch label="All day" v-model="allDay" @change="allDayChange" />
    <MbscDatepicker
      select="range"
      :controls="myControls"
      :startInput="startInput"
      :endInput="endInput"
    />
    <MbscInput ref="startInput" label="Start" placeholder="Event start" />
    <MbscInput ref="endInput" label="End " placeholder="Event end" />
    <MbscSegmentedGroup v-model="showAs">
      <MbscSegmented value="busy">Show as busy</MbscSegmented>
      <MbscSegmented value="free">Show as free</MbscSegmented>
    </MbscSegmentedGroup>
    <MbscTextarea label="Notes" placeholder="Enter notes, URL, comments" />
  </MbscPage>
</template>
