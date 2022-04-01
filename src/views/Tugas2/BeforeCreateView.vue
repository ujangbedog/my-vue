<template>
  <div class="tugas">
    <BeforeCreate></BeforeCreate>
  </div>
</template>

<script>
// @ is an alias to /src
import BeforeCreate from '@/components/Tugas2/BeforeCreate.vue'

export default {
  name: 'BeforeCreateView',
  components: {
    BeforeCreate
  }
}
</script>
