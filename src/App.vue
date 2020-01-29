<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    //本地请求加载静态json文件的形式
    this.axios.get('/mock/user/login.json').then((res)=>{
      this.res = res;
    })
    
  }
}
</script>

<style>

</style>
