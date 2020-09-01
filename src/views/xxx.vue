
<template>
  <div class="xxx-container">
    <h1>欢迎来到xxx</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script lang="ts" type="text/javascript">
  export default {
    data() {
      return {
        msg: '我是XXX组件'
      }
    },

    methods:{

      running(){
        var people:string = 'vince is good'
        var age:number = 23
        var totoal:number = age+2
        
        this.msg = totoal
      }
    },

    created(){
      this.running();
    }
  }
</script>