<template>
  <!--section v-if="hasFruit">
    <h1>Fruits</h1>
    <ul>
      <li 
        v-for="fruit in fruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>

    <button @click="addFruit">ADD</button>
    <button @click="delFruit">DELETE</button>
  </section>

  <section>
    <h1> reverse fruits </h1>
    <ul>
      <li 
        v-for="fruit in reverseFruits"
        :key="fruit"
      > {{ fruit }}
      </li>
    </ul>
    </section-->
    <button @click="add">add</button>
    <!-- reverseMessage 의 getter(get) 실행 -->
    <h1 @click="changeMessage3"> {{ reverseMessage }}</h1>
    <h1> {{ reverseMessage }}</h1>
    <h1> {{ reverseMessage }}</h1>

</template>

<script>
export default {

  data() {
    return {
      // Getter Setter
      msg: 'Hello Computed!',
      msg2: 'MSG2'
    }
  },

  methods: {
    add() {
      // reverseMessage 의 setter(set) 실행
      this.reverseMessage += '!?' // <- 이렇게 되면 template에서 한번 뒤집어졌으니
      // reverseMessage 의 getter 실행
      // console.log(reverseMessage)
    },

    changeMessage() {
      this.msg = "GOOD!"
    },

    changeMessage2() {
      this.msg2 = "CHANGE MESSAGE"
    },

    changeMessage3() {
      this.reverseMessage = "Hello Computed!"
    }
  },

  watch: {
    msg() {
      console.log('msg:', this.msg)
    },
    reverseMessage() {
      console.log('reverse msg: ', this.reverseMessage)
    }
  },
  computed: {
    // 읽기전용 값을 얻어내는 용도로만 사용 (Getter)
    /* reversed() {
      return this.msg.split('').reverse().join('')
    }, */

    // Getter Setter 둘다 되게끔 해주는법
    reverseMessage: {
      get() {
        console.log("getter")
        return this.msg
        //return this.msg.split('').reverse().join('')
      },
      set(newValue) {
        this.msg = newValue
      }
    }
  }
}
/*
export default {

  data() {
    return {
      fruits: [
        'Apple', 'Banana', 'Cherry'
      ]
    }
  },
  methods: {}
  computed: { // 반드시 어떠한 데이터를 리턴해야 하는 함수들 모음
    hasFruit() {
      return this.fruits.length > 0
    },
    reverseFruits() {
      console.log("test")
      return this.fruits.map(fruit => {
        return fruit.split('').reverse().join('')
      })
    }
  },
  watch: { // 프로퍼티명으로 정의된 데이터가 변경이 될 경우 그 프로퍼티 안의 콜백함수가 실행됨
    fruits: function(newVal, oldVal) {
      console.log(`${oldVal} change to ${newVal}`)
    }
  }
}
*/
</script>
