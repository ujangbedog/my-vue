<template>
  <div>
    <h2>Tab 1</h2>
    <input type="text" placeholder="this content will persist!" />
  </div>
</template>

<script>
  import { onActivated, onDeactivated } from 'vue'

  export default {
  name: 'TabOne',
   setup() {
    onActivated(() => {
      console.log("Tab 1 Activated");
    });

    onDeactivated(() => {
      console.log("Tab 1 Deactivated");
    });
   }
  }
</script>
