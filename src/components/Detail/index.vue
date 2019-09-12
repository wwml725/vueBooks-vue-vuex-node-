<template>
    <div>
      <MHeader  :back="true">详情页</MHeader>
      <div class="content">
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>
        <p>{{$route.params.bid}}</p>

      </div>

    </div>
</template>
<script>
  import MHeader from "../../base/MHeader.vue"
    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {},
        computed: {},
        components: {MHeader}
    }
</script>
<style scoped>
.content{
  position: absolute;
  top:40px;
  width:100%;
  height:100%;
  background-color: #878787;

}
</style>
