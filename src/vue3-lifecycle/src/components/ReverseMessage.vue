<template>
  <!-- computed -> reverseMessage getter 발생 -->
  <h1> {{ reverseMessage }}</h1>
  <!-- h1> {{ message }}</h1 -->
  <button @click="add">ADD</button>
</template>

<script>

export default {
  data() {
    return { 
      message : 'hyukjin'
    }
  },
  mounted() {
    console.log("Reverse vue mounted!")
    console.log(this.reverseMessage)
  },
  methods: {
    add() {
        /*
        데이터 변경으로 인한 computed getter 발생
        */
        console.log("ADD")
        // this.message += "T"
        // 1. reverseMessage setter 호출
        // 기존에 리버스된 문자열에 ?!이 덧붙혀짐
        this.reverseMessage += "?!"
    }
  },

  computed: {
    // getter
    /* reverseMessage() {
        return this.message.split('').reverse().join('')
    } */

    
    reverseMessage: {
      get() {
        /* 
        3. 아래 setter에서 원래 데이터( message ) 가 변경 되었고.
        위 template에서 이쪽 getter ={{ reverseMessage }} 를 통해 
        출력되고 있기 때문에 반응형 getter 로써 getter가 호출됨 
        */
        console.log("getter")
        return this.message.split('').reverse().join('')
      },
      set(newVal, oldVal) {
        /*
        2. message 데이터가 변경됨으로써 위쪽의 {{ reverseMessage }}
          도 반응을 하여 
          ({{ reverseMessage }} 
          즉 getter에서 this.message를 이용하여 출력하고 있기때문에 
          this.message를 변경하면 getter가 호출됨)
          computed는 반응형이라 데이터 변경시 반응함.
          변경 안되면 getter 호출 x
       */
        console.log("SETTER")

        console.log(newVal)
       // console.log(newVal)
       this.message = newVal
      }
    }
  }
}
</script>