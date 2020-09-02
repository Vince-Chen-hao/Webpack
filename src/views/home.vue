
<template>
  <div class="home-container">
    <h1>show time</h1>
    <p>1. data: {{name}}</p>
    <p>2. Computed: {{MyName}}</p>
    <button @click="sayHello()">3. methods:Touch me</button>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class home extends Vue {
  name:string = 'I am Simon Vince'

  // computed:前面要加get
  get MyName():string {
    return `My name is ${this.name}`
  }

  // methods:直接寫函式名稱
  sayHello():void {
    alert(`Hello ${this.name}`)
  }

  createdpart(){
    alert('first say hi')
  };

  mounted() {
    this.sayHello();
  }

  created(){
    this.createdpart()
  }
}


</script>