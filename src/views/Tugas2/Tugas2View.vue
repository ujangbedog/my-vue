<template>
  <div class="tugas">
    <TugasDua 
        msg="Tugas 2" 
        />
  </div>
</template>

<script>
// @ is an alias to /src
import TugasDua from '@/components/Tugas2/TugasDua.vue'

export default {
  name: 'Tugas2View',
  components: {
    TugasDua
  }
}
</script>
