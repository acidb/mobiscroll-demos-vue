<script setup>
import { localeEs, MbscDatepicker, setOptions } from '@mobiscroll/vue'

setOptions({
  // theme
})
</script>

<template>
  <!-- sets the language of the component -->
  <MbscDatepicker :locale="localeEs" :controls="['calendar']" select="range" display="inline" />
</template>
