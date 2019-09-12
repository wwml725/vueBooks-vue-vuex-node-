<template>
    <div>
      <div @click="goback()">X</div>
        {{msg}}
    </div>
</template>
<script>
    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {
          goback(){
            this.$router.animate1 = 4
            this.$router.go(-1)
          }

        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>
