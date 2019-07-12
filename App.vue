<template>
  <div id="app">
    <!-- 引入router文件以 【<router-view/>】 形式放在 App.vue中，
      <router-view/>是一个容器，用于显示路由中配置的文件 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#app h1{
  margin: 0;
}
</style>
