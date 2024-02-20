<script setup>
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([
  {
    bufferAfter: 30,
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,8)',
    title: 'Morning routine',
    resource: 1
  },
  {
    bufferAfter: 120,
    bufferBefore: 30,
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Friends binge marathon',
    resource: 4
  },
  {
    bufferAfter: 120,
    bufferBefore: 30,
    start: 'dyndatetime(y,m,d+7,13)',
    end: 'dyndatetime(y,m,d+8,21)',
    title: '',
    resource: 1
  },
  {
    bufferAfter: 10,
    bufferBefore: 15,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Product team mtg.',
    resource: 5
  },
  {
    bufferAfter: 10,
    bufferBefore: 10,
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,8)',
    title: 'Green box to post office',
    resource: 5
  },
  {
    bufferAfter: 10,
    bufferBefore: 10,
    start: 'dyndatetime(y,m,d-1,8,30)',
    end: 'dyndatetime(y,m,d-1,10)',
    title: 'Quick mtg. with Martin',
    resource: 2
  },
  {
    bufferAfter: 10,
    bufferBefore: 45,
    start: 'dyndatetime(y,m,d,9,30)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Product team mtg.',
    resource: 4
  },
  {
    bufferAfter: 35,
    bufferBefore: 60,
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,12,30)',
    title: 'Stakeholder mtg.',
    resource: 2
  },
  {
    bufferAfter: 60,
    bufferBefore: 35,
    start: 'dyndatetime(y,m,d,13,30)',
    end: 'dyndatetime(y,m,d,14,30)',
    title: "Lunch @ Butcher's",
    resource: 2
  },
  {
    bufferAfter: 15,
    bufferBefore: 30,
    start: 'dyndatetime(y,m,8,15)',
    end: 'dyndatetime(y,m,8,17)',
    title: 'General orientation',
    resource: 4
  }
])

const myResources = ref([
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
])

const myView = {
  timeline: { type: 'day' }
}
</script>

<template>
  <MbscEventcalendar
    :drag="drag"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  ></MbscEventcalendar>
</template>
