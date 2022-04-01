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
      msg: "Before Create",
    };
  },
  beforeCreate() {
    console.log("Value of val is: " + this.msg);
  },
//   created() {
//     console.log("Value of val is: " + this.msg);
//   },
};
</script>
