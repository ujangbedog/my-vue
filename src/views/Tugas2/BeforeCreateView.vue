<template>
  <div class="tugas">
    <BeforeCreate 
        msg="Before Created" 
        />
  </div>
</template>

<script>
// @ is an alias to /src
import BeforeCreate from '@/components/Tugas2/BeforeCreate.vue'

export default {
  name: 'BeforeCreate',
  components: {
    BeforeCreate
  }
}
</script>
