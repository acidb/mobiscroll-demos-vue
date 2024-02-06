<script setup>
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template><MbscDatepicker :controls="['calendar']" :rtl="true" display="inline" /></template>
