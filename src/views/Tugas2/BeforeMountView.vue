<template>
  <div class="tugas">
    <BeforeMount></BeforeMount>
  </div>
</template>

<script>
// @ is an alias to /src
import BeforeMount from '@/components/Tugas2/BeforeMount.vue'

export default {
  name: 'BeforeMountView',
  components: {
    BeforeMount
  }
}
</script>
