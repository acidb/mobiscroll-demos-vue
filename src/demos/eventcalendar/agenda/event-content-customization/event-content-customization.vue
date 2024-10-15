<script setup>
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const isToastOpen = ref(false)
const toastMessage = ref('')

const myParticipants = {
  1: { name: 'Barry L.', img: 'https://img.mobiscroll.com/demos/m1.png' },
  2: { name: 'Hortense T.', img: 'https://img.mobiscroll.com/demos/f1.png' },
  3: { name: 'Carl H.', img: 'https://img.mobiscroll.com/demos/m2.png' }
}

const myView = {
  calendar: { type: 'week' },
  agenda: { type: 'day' }
}

function add(data) {
  toastMessage.value = data.title + ' clicked'
  isToastOpen.value = true
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/custom-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #eventContent="data">
      <div>{{ data.title }}</div>
      <div class="mds-agenda-event-content mbsc-flex mbsc-align-items-center">
        <img class="mds-agenda-event-avatar" :src="myParticipants[data.original.participant].img" />
        <div class="mbsc-flex-1-0">
          {{ myParticipants[data.original.participant].name }}
        </div>
        <MbscButton cssClass="mds-agenda-event-btn" color="secondary" @click="add(data.original)">
          Add participant
        </MbscButton>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-agenda-event-content {
  padding: 8px 0;
  font-size: 13px;
}

.mds-agenda-event-avatar {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.mds-agenda-event-btn.mbsc-button {
  line-height: 20px;
}

.mds-agenda-event-btn.mbsc-ios {
  position: absolute;
  right: 8px;
  bottom: 8px;
}
</style>
