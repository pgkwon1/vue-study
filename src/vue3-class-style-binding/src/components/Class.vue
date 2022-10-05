<template>

<h1 
  @click="change"
  v-bind:class="{ test: isActive }"> 
  Hello! 
</h1>  
</template>


<script>

export default {
  data() {
    return {
      isActive: false,
    }
  },
  
  methods: {
    change() {
      this.isActive = true
    }
  }
}
</script>


<style scoped>
  .test {
    color: red;
    font-weight: bold;
  }
</style>
