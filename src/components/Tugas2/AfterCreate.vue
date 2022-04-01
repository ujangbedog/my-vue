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
  name: 'AfterCreate',
  data() {
    return {
      msg: "Before Create",
    };
  },
//   beforeCreate() {
//     console.log("Value of val is: " + this.msg);
//   },
  created() {
    console.log("Value of val is: " + this.msg);
  },
};
</script>
