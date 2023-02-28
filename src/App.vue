<template>
  
    <router-link class="" :to="{ name: 'home' }">
      <button class=" btn text-light">woviez</button>
    </router-link>
  <div id="app">
    <router-view></router-view>
  </div>
  <footer class="padding">Made by M1000</footer>
</template>

<script src="">
import { defineComponent } from 'vue'

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    if (to.path === '/') {
      next()
    } else {
      next('/home')
    }
  }
})
</script>

<style >
.text-color{
  color: rgb(193, 58, 58);
}
.padding{
  padding: 1em;
  color: rgb(193, 58, 58);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
