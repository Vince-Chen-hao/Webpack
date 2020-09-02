
<template>
  <div>
    <p>{{description}}</p>
    <img :src="src" class="photo">
  </div>
</template>

<script lang="ts" >
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class xxx extends Vue {
  src: string = 'https://img2.vipcn.com/img2016/6/21/2016062150586477.jpg'
  description: string = 'Saber-webbbbe'
}
</script>