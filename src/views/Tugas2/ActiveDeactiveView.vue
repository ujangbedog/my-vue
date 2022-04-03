<template>
  <div class="tugas">
    <ActiveDeactive></ActiveDeactive>
  </div>
</template>

<script>
// @ is an alias to /src
import ActiveDeactive from '@/components/Tugas2/ActiveDeactive.vue'

export default {
  name: 'ActiveDeactiveView',
  components: {
    ActiveDeactive
  }
}
</script>
