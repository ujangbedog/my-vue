<template>
  <div class="tugasdua">
      <subnav>
        <router-link to="/tugas/2/before-create">Before Create</router-link> |
        <router-link to="/tugas/2/created">Created</router-link> |
      </subnav>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Tugas 2",
    };
  },
};
</script>
