<template>
  <div class="tugasdua">
       <div id="subnav">
         <router-link to="/tugas/2/before-create-and-created">Before Create & Created</router-link> |
         <router-link to="/tugas/2/before-mount">Before Mount</router-link> |
         <router-link to="/tugas/2/mounted">Mounted</router-link> |
         <router-link to="/tugas/2/update">Update</router-link> |
         <router-link to="/tugas/2/active-deactive">Active & Deactive</router-link>
       </div>
    <h1>Update</h1>
    <p>{{val}} | edited {{ count }} times</p>
    <button @click="val = Math.random(0, 100)">Click to Change</button>
  </div>
</template>

<script>
import { ref, onBeforeUpdate, onUpdated } from "vue";

export default {
    name: 'BeforeMount',
    setup() {
        const count = ref(0);
        const val = ref(0);

        onBeforeUpdate(() => {
            count.value++;
            console.log("beforeUpdate");
        });

        onUpdated(() => {
            console.log("updated() val: " + val.value);
        });

        return {
            count,
            val,
        };
    },
};
</script>
