<!-- eslint-disable vue/html-self-closing -->
<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <div v-if="count > 4">
    4보다 큽니다!
  </div>
  <ul>
    <Fruit 
      :test2="count">
    </Fruit>
    <!--Fruit
      v-for="num in nums"
      :key="num"
      :test="num" -->
      <!-- Fruit.vue에 props -> test에 num 데이터를 bind -->
    <!--/Fruit-->
  </ul>
</template>

<script>
import Fruit from '~/components/Fruit'

export default {

  components: {
    Fruit
  },
  data() {
    return {
      count: 0,
      fruits: ['apple', 'cherry', 'pineapple', 'test'],
      nums: [0, 1, 2, 3],
    }
  },
  props: ['test2'],

  methods: {
    increase() {
      this.count += 1
    }
  }
}
</script>

<style lang="scss">
  h1{
    font-size: 50px;
    color:grey;
  }
  ul {
    li {
      font-size: 40px;
    }
  }
</style>
