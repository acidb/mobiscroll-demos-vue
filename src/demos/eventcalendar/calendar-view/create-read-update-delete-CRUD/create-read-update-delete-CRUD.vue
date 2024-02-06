<script setup>
import {
  MbscButton,
  MbscDatepicker,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSnackbar,
  MbscSwitch,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([
  {
    id: 1,
    start: '2023-03-08T13:00',
    end: '2023-03-08T13:45',
    title: "Lunch @ Butcher's",
    description: '',
    allDay: false,
    status: 'free',
    color: '#009788'
  },
  {
    id: 2,
    start: '2023-03-23T15:00',
    end: '2023-03-23T16:00',
    title: 'General orientation',
    description: '',
    allDay: false,
    status: 'busy',
    color: '#ff9900'
  },
  {
    id: 3,
    start: '2023-03-22T18:00',
    end: '2023-03-22T22:00',
    title: 'Dexter BD',
    description: '',
    allDay: false,
    status: 'free',
    color: '#3f51b5'
  },
  {
    id: 4,
    start: '2023-03-24T10:30',
    end: '2023-03-24T11:30',
    title: 'Stakeholder mtg.',
    description: '',
    allDay: false,
    status: 'busy',
    color: '#f44437'
  }
])
const myView = {
  calendar: { type: 'month', labels: true }
}
const isEdit = ref(false)
const popupEventColor = ref('')
const mySelectedDate = ref()
let addedEvent = null
let editedEvent = null

// Popup
const myResponsive = {
  medium: {
    display: 'anchored',
    width: 400,
    fullScreen: false,
    touchUi: false
  }
}
const popupEventTitle = ref('')
const popupEventDescription = ref('')
const popupEventDates = ref([])
const popupEventAllDay = ref(false)
const popupEventStatus = ref('free')
const popupAnchor = ref(null)
const popupButtons = ref([])
const popupHeaderText = ref('')
const isPopupOpen = ref(false)

// Datepicker
const startInput = ref(null)
const endInput = ref(null)

const datePickerControls = ['date']
const datePickerResponsive = {
  medium: {
    controls: ['calendar'],
    touchUi: false
  }
}
const datetimePickerControls = ['datetime']
const datetimePickerResponsive = {
  medium: {
    controls: ['calendar', 'time'],
    touchUi: false
  }
}

// Color picker
const colors = [
  '#ffeb3c',
  '#ff9900',
  '#f44437',
  '#ea1e63',
  '#9c26b0',
  '#3f51b5',
  '',
  '#009788',
  '#4baf4f',
  '#7e5d4e'
]
const colorAnchor = ref(null)
const isColorPickerOpen = ref(false)
const tempColor = ref('')
const colorElm = ref(null)
const colorPopup = ref(null)

const colorButtons = [
  'cancel',
  {
    text: 'Set',
    keyCode: 'enter',
    handler: () => {
      popupEventColor.value = tempColor.value
      isColorPickerOpen.value = false
    },
    cssClass: 'mbsc-popup-button-primary'
  }
]

const colorResponsive = {
  medium: {
    display: 'anchored',
    buttons: {}
  }
}

// Snackbar
const isSnackbarOpen = ref(false)
const snackbarButton = {
  action: () => {
    myEvents.value = [...myEvents.value, editedEvent]
  },
  text: 'Undo'
}

// Fills the popup with the event's data
function fillPopup(event) {
  popupEventTitle.value = event.title
  popupEventDescription.value = event.description
  popupEventAllDay.value = event.allDay || false
  popupEventDates.value = [event.start, event.end]
  popupEventStatus.value = event.status || 'busy'
  popupEventColor.value = event.color || ''
}

function createAddPopup(event, target) {
  // Hide delete button inside add popup
  isEdit.value = false

  addedEvent = event

  // Set popup header text and buttons
  popupHeaderText.value = 'New event'
  popupButtons.value = [
    'cancel',
    {
      text: 'Add',
      keyCode: 'enter',
      handler: () => {
        const newEvent = {
          id: addedEvent.id,
          title: popupEventTitle.value,
          description: popupEventDescription.value,
          allDay: popupEventAllDay.value,
          status: popupEventStatus.value,
          start: popupEventDates.value[0],
          end: popupEventDates.value[1],
          color: popupEventColor.value
        }
        myEvents.value = [...myEvents.value, newEvent]
        mySelectedDate.value = popupEventDates.value[0]
        isPopupOpen.value = false
      },
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  popupAnchor.value = target

  fillPopup(event)
  isPopupOpen.value = true
}

function createEditPopup(event, target) {
  // Show delete button inside edit popup
  isEdit.value = true

  editedEvent = event
  addedEvent = null

  popupHeaderText.value = 'Edit event'

  // Set popup header text and buttons
  popupButtons.value = [
    'cancel',
    {
      text: 'Save',
      keyCode: 'enter',
      handler: () => {
        const updatedEvent = editedEvent
        updatedEvent.title = popupEventTitle.value
        updatedEvent.description = popupEventDescription.value
        updatedEvent.allDay = popupEventAllDay.value
        updatedEvent.start = popupEventDates.value[0]
        updatedEvent.end = popupEventDates.value[1]
        updatedEvent.color = popupEventColor.value
        updatedEvent.status = popupEventStatus.value
        // Update event
        let newEventList = [...myEvents.value]
        const index = newEventList.findIndex((x) => x.id === updatedEvent.id)
        newEventList[index] = updatedEvent
        myEvents.value = newEventList

        isPopupOpen.value = false
      },
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  popupAnchor.value = target
  fillPopup(event)
  isPopupOpen.value = true
}

// Calendar events
function handleEventClick(args) {
  createEditPopup(args.event, args.domEvent.currentTarget)
}

function handleEventCreated(args) {
  createAddPopup(args.event, args.target)
}

function deleteEvent(event) {
  myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
  isSnackbarOpen.value = true
}

function handleEventDeleted(args) {
  deleteEvent(args.event)
  isPopupOpen.value = false
}

function handleDeleteClick() {
  deleteEvent(editedEvent)
}

function handlePopupClose() {
  // Remove event if popup is cancelled
  if (addedEvent) {
    deleteEvent(addedEvent)
  }
  isPopupOpen.value = false
  isColorPickerOpen.value = false
}

function openColorPicker(event) {
  tempColor.value = popupEventColor.value || ''
  colorAnchor.value = event.currentTarget
  isColorPickerOpen.value = true
}

function handleColorClick(event) {
  const color = event.currentTarget.getAttribute('data-value')
  tempColor.value = color

  if (!colorPopup.value.instance.s.buttons.length) {
    popupEventColor.value = color
    isColorPickerOpen.value = false
  }
}

function handleSnackbarClose() {
  isSnackbarOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    clickToCreate="double"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :selectedDate="mySelectedDate"
    @event-click="handleEventClick"
    @event-created="handleEventCreated"
    @event-deleted="handleEventDeleted"
  />
  <MbscPopup
    display="bottom"
    :contentPadding="false"
    :fullScreen="true"
    :isOpen="isPopupOpen"
    :responsive="myResponsive"
    :anchor="popupAnchor"
    :buttons="popupButtons"
    :headerText="popupHeaderText"
    @close="handlePopupClose"
  >
    <div class="mbsc-form-group">
      <MbscInput label="Title" v-model="popupEventTitle" />
      <MbscTextarea label="Description" v-model="popupEventDescription" />
    </div>
    <div class="mbsc-form-group">
      <MbscSwitch label="All-day" v-model="popupEventAllDay" />

      <MbscInput ref="startInput" label="Starts" />
      <MbscInput ref="endInput" label="Ends" />
      <MbscDatepicker
        v-model="popupEventDates"
        select="range"
        :controls="popupEventAllDay ? datePickerControls : datetimePickerControls"
        :responsive="popupEventAllDay ? datePickerResponsive : datetimePickerResponsive"
        :startInput="startInput"
        :endInput="endInput"
      />
      <div ref="colorElm" class="event-color-c" @click="openColorPicker($event)">
        <div class="event-color-label">Color</div>
        <div class="event-color" :style="{ background: popupEventColor }"></div>
      </div>
      <MbscSegmentedGroup v-model="popupEventStatus">
        <MbscSegmented value="busy" v-model="popupEventStatus">Show as busy</MbscSegmented>
        <MbscSegmented value="free" v-model="popupEventStatus">Show as free</MbscSegmented>
      </MbscSegmentedGroup>
      <div v-if="isEdit" class="mbsc-button-group">
        <MbscButton
          cssClass="mbsc-button-block"
          color="danger"
          variant="outline"
          @click="handleDeleteClick"
          >Delete event
        </MbscButton>
        <MbscSnackbar
          :button="snackbarButton"
          message="Event deleted"
          :isOpen="isSnackbarOpen"
          @close="handleSnackbarClose"
        />
      </div>
    </div>
  </MbscPopup>

  <MbscPopup
    ref="colorPopup"
    display="bottom"
    :anchor="colorAnchor"
    :contentPadding="false"
    :showArrow="false"
    :showOverlay="false"
    :buttons="colorButtons"
    :responsive="colorResponsive"
    :isOpen="isColorPickerOpen"
  >
    <div class="crud-color-row">
      <div v-for="(color, i) in colors" :key="color.value">
        <div
          v-if="i < 5"
          class="crud-color-c"
          :class="{ selected: tempColor === color }"
          :data-value="color"
          @click="handleColorClick($event)"
        >
          <div
            class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
    </div>
    <div class="crud-color-row">
      <div v-for="(color, i) in colors" :key="color.value">
        <div
          v-if="i >= 5"
          class="crud-color-c"
          :class="{ selected: tempColor === color }"
          :data-value="color"
          @click="handleColorClick($event)"
        >
          <div
            class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
    </div>
  </MbscPopup>
</template>

<style>
.event-color-c {
  display: flex;
  margin: 16px;
  align-items: center;
  cursor: pointer;
}

.event-color-label {
  flex: 1 0 auto;
}

.event-color {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 240px;
  background: #5ac8fa;
}

.crud-color-row {
  display: flex;
  justify-content: center;
  margin: 5px;
}

.crud-color-c {
  padding: 3px;
  margin: 2px;
}

.crud-color {
  position: relative;
  min-width: 46px;
  min-height: 46px;
  margin: 2px;
  cursor: pointer;
  border-radius: 23px;
  background: #5ac8fa;
}

.crud-color-c.selected,
.crud-color-c:hover {
  box-shadow: inset 0 0 0 3px #007bff;
  border-radius: 48px;
}

.crud-color:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  color: #f7f7f7;
  font-size: 20px;
  text-shadow: 0 0 3px #000;
  display: none;
}

.crud-color-c.selected .crud-color:before {
  display: block;
}
</style>
