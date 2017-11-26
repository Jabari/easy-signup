<template>
  <div id="app">
<!--     <img src="./assets/logo.png">
 -->    <!-- <HelloWorld /> -->
    <SignUpForm />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SignUpForm from './components/SignUp__form'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SignUpForm
  }
}
/** one input is displayed at a time 
make sure fields are tabbable
http://mediatemple.net/blog/tips/interesting-takes-log-sign-forms/
**/
</script>

<style>
$dark-color: #1f292f;
#app {
  font-family: 'HurmeGeometricSans3-SemiBold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
