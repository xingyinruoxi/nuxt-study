<template>
  <section>
    <h2 @click="errorClick">错误页面</h2>
    <p>{{error}}</p>
  </section>
</template>
<script>
export default {
  props: ["error"],
  layout: "blank",
  created() {
    // console.log("ddsf", this);
  },
  methods: {
    errorClick() {
      console.log("99999999");
    },
  },
};
</script>