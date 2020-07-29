<template>
  <p>详情页id{{$route.params.id}}</p>
</template>
<script>
export default {
  created() {
    console.log("this", this.$route.params.id);
  },
};
</script>
