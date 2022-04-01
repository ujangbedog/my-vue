<template>
  <div class="tugasdua">
    <div id="subnav">
      <router-link to="/tugas/2/before-create-and-created">Before Create & Created</router-link> |
      <router-link to="/tugas/2/before-mount">Before Mount</router-link> |
      <router-link to="/tugas/2/mounted">Mounted</router-link> |
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TugasDua',
  data() {
    return {
      msg: "Tugas 2",
    };
  },
};
</script>
