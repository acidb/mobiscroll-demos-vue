<script setup>
import {
  MbscButton,
  MbscInput,
  MbscPage,
  MbscPopup,
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

const popupOpen = ref(false)
const popupAnchor = ref(null)
const popupButtons = ['set', 'cancel']
const popupResponsive = {
  medium: {
    display: 'anchored',
    width: 400,
    fullScreen: false,
    touchUi: false
  }
}

function handleClick(ev) {
  popupAnchor.value = ev.target
  popupOpen.value = true
}

function handleClose() {
  popupOpen.value = false
}
</script>

<template>
  <MbscPage>
    <MbscButton @click="handleClick">Show modal</MbscButton>
    <MbscPopup
      display="anchored"
      :isOpen="popupOpen"
      :anchor="popupAnchor"
      :buttons="popupButtons"
      :contentPadding="false"
      :responsive="popupResponsive"
      @close="handleClose"
    >
      <div class="mbsc-form-group">
        <MbscInput label="Title" />
        <MbscTextarea label="Description" />
      </div>
      <div class="mbsc-form-group">
        <MbscSwitch label="All-day" />
        <MbscInput label="Starts" />
        <MbscInput label="Ends" />
        <MbscSegmentedGroup>
          <MbscSegmented :defaultChecked="true">Show as busy</MbscSegmented>
          <MbscSegmented>Show as free</MbscSegmented>
        </MbscSegmentedGroup>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
