<template>
  <h1> {{ count }}</h1>
  <!--Test/-->

    <Reverse/>

  <!-- Reverse/ -->
</template>

<script>
import Reverse from '~/components/ReverseMessage'
import Test from '~/components/Test'
export default {
  components: {
    Reverse,
    Test
  }, 
  data() {
    return { 
      count : 1 
    }
  },
  created() {  
    console.log('created!')

  },
  mounted() {
    console.log("mounted!")
  }
}
</script>