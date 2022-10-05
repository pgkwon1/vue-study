<template>
    <h1 >{{ reverseMessage }} </h1>
    <button @click="add">ADD</button>
</template>

<script>
export default {
    data() {
        return {
            msg : "HYUKJIN"
        }
    },

    computed: {
        // 읽기전용 값을 얻어내는 용도로만 사용 (Getter)
        /* reversed() {
        return this.msg.split('').reverse().join('')
        }, */

        reverseMessage: {
        get() {
            console.log("getter")
            return this.msg.split('').reverse().join('')
        },
        set(newValue) {
            console.log("setter")
            this.msg = newValue 
        }
        }
    },

    methods: {
        add() {
            console.log("ADD")
            // reverseMessage 의 setter(set) 실행
            this.reverseMessage += '?!'
        
            // reverseMessage 의 getter 실행
            // console.log(reverseMessage)
        },
}
}

</script>

<style scoped>
h1 {
    font-size: 50px;
}
</style>