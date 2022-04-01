<template>
  <div class="tugasdua">
    <div id="subnav">
      <router-link to="/tugas/2/before-create">Before Create</router-link> |
      <router-link to="/tugas/2/after-create">Created</router-link> |
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
