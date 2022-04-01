<template>
  <div class="tugassatu">
    <h1>{{ msg }}</h1>
    <h3>Nama : {{ nama }}</h3>
    <h3>Prodi : {{ prodi }}</h3>
    <h3>Tahun Angkatan : {{ angkatan }}</h3>
    <h3>Email : {{ email }}</h3>
  </div>
</template>

<script>
export default {
  name: 'TugasSatu',
  props: {
    msg: String,
    nama: String,
    prodi: String,
    angkatan: String,
    email: String,
  }
}
</script>
