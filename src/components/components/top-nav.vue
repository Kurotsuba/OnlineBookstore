<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link :to="{ name: 'Index' }" class="navbar-brand">Online Bookstore</router-link>
      </div>
      <div class="collapse navbar-collapse" id="top-nav-content">
        <ul class="nav navbar-nav">
          <li :class="home">
            <a @click="checkLogin" href="#/good/all">
              首页
            </a>
          </li>
          <li :class="cart">
            <a @click="checkLogin" href="#/cart">
              购物车
              <span class="badge">{{ tot }}</span>
            </a>
          </li>
          <li :class="personal">
            <a @click="checkLogin" href="#/user/info">
              用户
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'top-nav',
  props: [
    'home',
    'cart',
    'personal'
  ],
  data () {
    var tot = 0
    var buys = []
    if (this.data.LoginId !== '') {
      tot = this.data.UserList[this.data.LoginId].buy.length
      buys = this.data.UserList[this.data.LoginId].buy
    }
    return {
      tot: tot,
      buys: buys
    }
  },
  methods: {
    checkLogin () {
      var url = window.location.href
      url = url.substring(0, url.indexOf('#/'))
      if (this.data.LoginId === '') {
        window.location.href = url + '#/login'
      }
    }
  },
  watch: {
    'buys': {
      handler: function (val, oldval) {
        this.tot = 0
        if (this.data.LoginId !== '') {
          this.tot = this.data.UserList[this.data.LoginId].buy.length
        }
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-nav li {
  text-align: center;
}
</style>
