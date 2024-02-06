<script setup>
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template><MbscDatepicker :controls="['date']" :rtl="true" display="inline" /></template>
