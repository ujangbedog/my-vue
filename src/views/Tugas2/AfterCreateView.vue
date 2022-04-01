<template>
  <div class="tugas">
    <AfterCreate 
    msg="after create"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import AfterCreate from '@/components/Tugas2/AfterCreate.vue'

export default {
  name: 'AfterCreateView',
  components: {
    AfterCreate
  }
}
</script>
