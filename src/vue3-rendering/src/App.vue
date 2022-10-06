<template>
  <button @click="handler"> Click Me!</button>
  <!--h1 v-if="isShow">
    Hello
    </h1>
  <h1 v-else-if="count > 3">
    Count > 3
  </h1>
  <h1 v-else>
    GOOD
  </h1-->

  <!-- template v-if="isShow">
    <h1>Title</h1>
    <p>1</p>
    <p>2</p>
  </template>
</template -->
<!-- v-if는 전환비용이 높다 -->
<h1 v-if="isShow">
  Hello?!
</h1>

<!-- v-show는 초기 렌더링 비용이 높다 -->
<h1 v-show="isShow">
  Hello?!
</h1>
</template>
<script>

export default {
  data() {
    return {
      isShow: false,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count++
      console.log(`show: ${this.isShow} count ${this.count}`)
    }
  }
}
</script>
