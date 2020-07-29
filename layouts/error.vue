<template>
  <section>
    <h2>错误页面</h2>
    <p>{{error}}</p>
  </section>
</template>
<script>
export default {
  props: ["error"],
  layout: "blank",
  created() {
    console.log("ddsf", this);
  },
};
</script>