<script setup>
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = [
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Event1',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Event2',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,23,59)',
    title: 'Event3',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Event4',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Event5',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,2)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Event6',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,4)',
    end: 'dyndatetime(y,m,d+2,20)',
    title: 'Event7',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,6)',
    end: 'dyndatetime(y,m,d+2,17)',
    title: 'Event8',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,9)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Event9',
    resource: 4
  }
]

const myResources = [
  {
    id: 1,
    name: 'Flatiron Room',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'The Capital City',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Heroes Square',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Thunderdome',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'King’s Landing',
    color: '#ff4600'
  }
]

const myView = {
  timeline: {
    rowHeight: 'equal',
    type: 'week',
    timeCellStep: 240,
    timeLabelStep: 240
  }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    className="md-timeline-height"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  />
</template>

<style>
.md-timeline-height .mbsc-timeline-resource,
.md-timeline-height .mbsc-timeline-row {
  min-height: 120px;
}
</style>
