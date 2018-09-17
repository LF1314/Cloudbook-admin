//封装自己的checkbox


<template>
    <label class="checkboss" >
        <input type="checkbox"  class="checkbox" >
    </label>
</template>

<script>
export default {
  name: "radio"
  //   props: {
  //     value: {
  //       type: [String, Number]
  //     }
  //   },
  //   data() {
  //     return {
  //       checked: this.value
  //     };
  //   },
  //   watch: {
  //     value(val) {
  //       this.checked = val;
  //     }
  //   },
  //   methods: {
  //     check(e) {
  //       console.log(e);
  //     }
  //   }
};
</script>

<style scoped>
.checkboss {
  display: block;
  border-radius: 2px;
  width: 20px;
  height: 20px;
  border: 1px solid #6d6565;
  position: relative;
}
.checkbox {
  display: none;
}
.checkboss:checked {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 20px solid black;
  display: block;
  background-color: #f666;
}
</style>

















