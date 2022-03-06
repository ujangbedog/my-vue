<template>
  <div class="tugas">
    <TugasSatu 
        msg="Tugas 1" 
        nama="Ilham Alfath" 
        prodi="Teknik Informatika" 
        angkatan="2019" 
        email="ilham28alfath@gmail.com"
        />
  </div>
</template>

<script>
// @ is an alias to /src
import TugasSatu from '@/components/TugasSatu.vue'

export default {
  name: 'Tugas1View',
  components: {
    TugasSatu
  }
}
</script>
