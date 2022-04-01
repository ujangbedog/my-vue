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
import { ref } from "vue";
export default {
    name: 'BeforeCreate',
    setup() {
        const msg = ref("hello");
        console.log("Value of val is: " + msg.value);
        return {
            msg,
        };
    },
};

</script>
