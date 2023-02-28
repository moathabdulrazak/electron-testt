<template>
  <div class="component">
<h3>home</h3>
<router-link :to="{ name: 'about' }" class="btn">
  <button> go to aboutpage</button>
</router-link>
  </div>
</template>


<script>
// import { AppState } from '../AppState';
// import { computed, reactive, onMounted } from 'vue';
export default {
  setup(){
  return {  }
  }
};
</script>


<style lang="scss" scoped>

</style>