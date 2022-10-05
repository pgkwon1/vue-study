<template>
    <button 
      @click="changeActive">
      CHANGE ACTIVE
    </button>
    <h1
      :style="styleData"> 
      STYLE1
    </h1>
    <h1
      @click="changeActive"
      :class="{ active: isActive }"
    >
      STYLE2
    </h1>

</template>

<script>
export default {
    
    data() {
        return {
            isActive: false,
            styleData: {
                color: 'red',
                fontSize: '30px'
            }
        }
    },
    methods: {
        changeStyle() {
            this.color = "blue",
            this.fontSize = '40px'
        },
        changeActive() {
            this.isActive = true
        }
    }
}
</script>

<style scoped>
    .active {
        color:darkorange;
        font-size: 40px;
    }
</style>