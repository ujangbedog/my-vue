<template>
  <div class="tugas">
    <OnMounted></OnMounted>
  </div>
</template>

<script>
// @ is an alias to /src
import OnMounted from '@/components/Tugas2/OnMounted.vue'

export default {
  name: 'OnMountedView',
  components: {
    OnMounted
  }
}
</script>
