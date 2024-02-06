<script setup>
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker
    display="inline"
    select="range"
    :controls="['calendar']"
    :showRangeLabels="true"
  />
</template>
