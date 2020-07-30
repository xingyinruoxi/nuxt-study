<template>
  <div>
    <h2>用户登录</h2>
    <el-input v-model="user.username"></el-input>
    <el-input type="password" v-model="user.password"></el-input>
    <el-button @click="onLogin">登录</el-button>
  </div>
</template>

<script>
export default {
  layout: "blank",
  head() {
    return {
      title: "登录页面",
      // vue-meta利用hid确定要更新meta
      meta: [{ name: "description", hid: "description", content: "请登录" }],
      link: [{ rel: "favicon", href: "favicon.ico" }],
    };
  },
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    console.log("params", params, "redirect", redirect, "query", query);
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onLogin() {
      console.log("999999999999");
      /*  this.$store.dispatch("user/login", this.user).then(ok => {
        // 登录成功重定向
        if (ok) {
          const redirect = this.$route.query.redirect || "/";
          this.$router.push(redirect);
        }
      }); */
    },
  },
};
</script>