<template>
  <div class="tugasdua">
       <div id="subnav">
         <router-link to="/tugas/2/before-create-and-created">Before Create & Created</router-link> |
         <router-link to="/tugas/2/before-mount">Before Mount</router-link> |
         <router-link to="/tugas/2/mounted">Mounted</router-link> |
         <router-link to="/tugas/2/update">Update</router-link> |
         <router-link to="/tugas/2/active-deactive">Active & Deactive</router-link>
       </div>
    <h1 ref="root">Before Mount</h1>
  </div>
</template>

<script>
  import { ref, onBeforeMount } from 'vue'
export default {
    name: 'BeforeMount',
    setup() {
        const root = ref(null)
        onBeforeMount(() => {
            console.log(root.value)
        })
        return {
            root,
        };
    }
};

</script>
