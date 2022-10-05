<template>

  <span>{{test2}}</span>
</template>

<script>
export default {
    props: {
        test2: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
h1 {
    color: red !important;
}
</style>