<template>
  <div>
    <h2>Tab 2</h2>
    <input type="text" placeholder="this content will persist!" />
  </div>
</template>

<script>
  import { onActivated, onDeactivated } from 'vue'

  export default {
  name: 'TabTwo',
   setup() {
    onActivated(() => {
      console.log("Tab 2 Activated");
    });

    onDeactivated(() => {
      console.log("Tab 2 Deactivated");
    });
   }
  }
</script>
