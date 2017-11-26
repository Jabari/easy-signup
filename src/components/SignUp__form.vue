<template>
  <div id="app">
    <form id="signup">
      <div v-for="field in fields">
        <text-input-floating-label></text-input-floating-label>
      </div>
      
    </form>
  </div>
</template>
<script>
import TextInputFloatingLabel from './shared/TextInput--floating-label'

export default {
  name: 'SignUpForm',
  components: {
    TextInputFloatingLabel
  },
  // data: {
  //   fields: {
  //     'firstName',
  //     'lastName',
  //     email: 'email',
  //     password: 'password',
  //     confirmPassword: 'password'
  //   },
  // },
  data() {
    return {
      fields: {
      'firstName': 'text',
      'lastName': 'text',
      email: 'email',
      password: 'password',
      confirmPassword: 'password'
      },
    };
  },
}

// floating labels
// fields an object containing list of text inputs, default value is 'text'
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  font: 14px/1.4 Sans-Serif;
}

form {
  border: 2px #F1EBE8 solid;
  border-radius: .5rem;
  padding: 1.5em;
  min-width: 320px;
  max-width: 98%;
  width: 480px;
  margin: auto;

  input {
    margin: 1rem auto;
  }

  > div {
    position: relative;
    overflow: hidden;

    input {
      margin: 1rem auto;
    }
  
  }
}
</style>
