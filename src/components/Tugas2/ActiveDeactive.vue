<template>
  <div class="tugasdua">
       <div id="subnav">
         <router-link to="/tugas/2/before-create-and-created">Before Create & Created</router-link> |
         <router-link to="/tugas/2/before-mount">Before Mount</router-link> |
         <router-link to="/tugas/2/mounted">Mounted</router-link> |
         <router-link to="/tugas/2/update">Update</router-link> |
         <router-link to="/tugas/2/active-deactive">Active & Deactive</router-link>
       </div>
    <h1 ref="root">Active & Deactive</h1>
  </div>
  <div>
    <span @click='tabName = "TabOne"'>Tab 1 </span>
    <span @click='tabName = "TabTwo"'>Tab 2</span>
    <keep-alive>
      <component :is="tabName" class="tab-area" />
    </keep-alive>
  </div>
</template>

<script>
  import TabOne from './TabOne.vue'
  import TabTwo from './TabTwo.vue'

  import { ref } from 'vue'

  export default {
    name: 'ActiveDeactive',
  	components: {
  		TabOne,
  		TabTwo
  	},
  	setup () { /* Composition API */
  		const tabName = ref('TabOne')

  		return {
  			tabName
  		}
  	}
  }
</script>
