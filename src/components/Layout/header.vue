<template>
  <div class="header-wrapper df-sb">
    <p>{{title}}</p>
  </div>
</template>
<script>
  export default {
    props:["title"],
    data() {
      return {

      }
    },
  }

</script>
<style lang="less" scoped>
    p{
      margin:0 auto;
    }
</style>
