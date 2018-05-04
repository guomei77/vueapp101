<template>
<div>
  <div class="mcon-logo">
    <img src="https://www.crm-factory.eu/wp-content/uploads/2017/09/mcon-logo_small_white.png" alt="mcon-logo" />
  </div>
  <div class="factory-logo">
    <img src="https://www.crm-factory.eu/wp-content/uploads/2017/03/cf-logo-mob.png" alt="factory-logo" />
  </div>

  <div class="nav">
    <router-link class="nav-item" v-for='(tabItem,index) in tabParams' :to='tabItem.path'>
      <span>{{tabItem.title}}</span>
    </router-link>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      tabParams: [{
          title: 'Home',
          path: '/'
        },
        {
          title: 'Who we are',
          path: '/Whoweare'
        },
        {
          title: 'What we do',
          path: '/Whatwedo'
        },
        {
          title: 'We are hiring',
          path: '/Hiring'
        },
        {
          title: 'Insights',
          path: '/Insights'
        },
        {
          title: "Let's talk",
          path: '/Talk'
        }
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mcon-logo {
  height: 57.5px;
  background-color: black;
  padding-top: 13px;
  padding-right: 150px;
  box-sizing: border-box;
}

.mcon-logo img {
  margin: 0px;
  padding: 0px;
  float: right;
  height: 70%;
}

.factory-logo {
  height: 125px;
  margin: 0;
  padding-top: 20px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
}

.factory-logo img {
  margin-left: 42.5%;
  height: 85%;
  color: rgb(112, 0, 0);
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.nav {
  border-top: 1px solid #e5e4e3;
  height: 50px;
  line-height: 50px;
  text-align: center;
  /*padding-top: 15px;*/
  border-bottom: 1px solid #e5e4e3;
  margin: 0;
}

.nav-item {
  font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
  letter-spacing: 1.5px;
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  margin-top: 0px;
  margin-right: 80px;
  padding-top: 14px;
  text-decoration: none;
  margin-bottom: 0;
}

.nav-item:hover {
  color: #bc0000;
  border-top: 1.5px solid #bc0000;
}

.nav-item:first-child {
  color: #bc0000;
  border-top: 1.5px solid #bc0000;
}
</style>
