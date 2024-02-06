<script setup>
import {
  MbscButton,
  MbscPage,
  MbscSnackbar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isBottomToastOpen = ref(false)
const isTopToastOpen = ref(false)
const isPrimaryToastOpen = ref(false)
const isSecondaryToastOpen = ref(false)
const isSuccessToastOpen = ref(false)
const isDangerToastOpen = ref(false)
const isWarningToastOpen = ref(false)
const isInfoToastOpen = ref(false)

const isBottomSnackbarOpen = ref(false)
const isTopSnackbarOpen = ref(false)
const isActionSnackbarOpen = ref(false)
const isActionToastOpen = ref(false)
const isPrimarySnackbarOpen = ref(false)
const isSecondarySnackbarOpen = ref(false)
const isSuccessSnackbarOpen = ref(false)
const isDangerSnackbarOpen = ref(false)
const isWarningSnackbarOpen = ref(false)
const isInfoSnackbarOpen = ref(false)

const actionButton = {
  text: 'Retry',
  action: () => {
    isActionToastOpen.value = true
  }
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Toast</div>
      <div class="mbsc-button-group-block">
        <MbscToast
          message="Message sent"
          :isOpen="isBottomToastOpen"
          @close="isBottomToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          display="top"
          :isOpen="isTopToastOpen"
          @close="isTopToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="primary"
          :isOpen="isPrimaryToastOpen"
          @close="isPrimaryToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="secondary"
          :isOpen="isSecondaryToastOpen"
          @close="isSecondaryToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="success"
          :isOpen="isSuccessToastOpen"
          @close="isSuccessToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="danger"
          :isOpen="isDangerToastOpen"
          @close="isDangerToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="warning"
          :isOpen="isWarningToastOpen"
          @close="isWarningToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="info"
          :isOpen="isInfoToastOpen"
          @close="isInfoToastOpen = false"
        />
        <MbscButton @click="isBottomToastOpen = true">Bottom toast</MbscButton>
        <MbscButton @click="isTopToastOpen = true">Top toast</MbscButton>
        <MbscButton @click="isPrimaryToastOpen = true">Primary toast</MbscButton>
        <MbscButton @click="isSecondaryToastOpen = true">Secondary toast</MbscButton>
        <MbscButton @click="isSuccessToastOpen = true">Success toast</MbscButton>
        <MbscButton @click="isDangerToastOpen = true">Danger toast</MbscButton>
        <MbscButton @click="isWarningToastOpen = true">Warning toast</MbscButton>
        <MbscButton @click="isInfoToastOpen = true">Info toast</MbscButton>
      </div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Snackbar</div>
      <div class="mbsc-button-group-block">
        <MbscSnackbar
          message="Your draft has been discarded"
          :isOpen="isBottomSnackbarOpen"
          @close="isBottomSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          display="top"
          :isOpen="isTopSnackbarOpen"
          @close="isTopSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Connection timed out. Showing limited messages."
          :button="actionButton"
          :isOpen="isActionSnackbarOpen"
          @close="isActionSnackbarOpen = false"
        />
        <MbscToast
          message="Retrying..."
          :isOpen="isActionToastOpen"
          @close="isActionToastOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="primary"
          :isOpen="isPrimarySnackbarOpen"
          @close="isPrimarySnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="secondary"
          :isOpen="isSecondarySnackbarOpen"
          @close="isSecondarySnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="success"
          :isOpen="isSuccessSnackbarOpen"
          @close="isSuccessSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="danger"
          :isOpen="isDangerSnackbarOpen"
          @close="isDangerSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="warning"
          :isOpen="isWarningSnackbarOpen"
          @close="isWarningSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="info"
          :isOpen="isInfoSnackbarOpen"
          @close="isInfoSnackbarOpen = false"
        />
        <MbscButton @click="isBottomSnackbarOpen = true">Bottom snackbar</MbscButton>
        <MbscButton @click="isTopSnackbarOpen = true">Top snackbar</MbscButton>
        <MbscButton @click="isActionSnackbarOpen = true">Snackbar with action</MbscButton>
        <MbscButton @click="isPrimarySnackbarOpen = true">Primary snackbar</MbscButton>
        <MbscButton @click="isSecondarySnackbarOpen = true">Secondary snackbar</MbscButton>
        <MbscButton @click="isSuccessSnackbarOpen = true">Success snackbar</MbscButton>
        <MbscButton @click="isDangerSnackbarOpen = true">Danger snackbar</MbscButton>
        <MbscButton @click="isWarningSnackbarOpen = true">Warning snackbar</MbscButton>
        <MbscButton @click="isInfoSnackbarOpen = true">Info snackbar</MbscButton>
      </div>
    </div>
  </MbscPage>
</template>
