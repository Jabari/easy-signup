<template>
  <form id="signup" autocomplete="off">
    <h1>Come Inside!</h1>
    <text-input-floating-label 
      v-for="(field, item) in fields"
      :name="item"
      :key="item"
      :pattern="field.pattern"
      :styleClass="field.class"
      :type="field.type" >
    </text-input-floating-label>
    <input type="submit" value="Sign up"/>
  </form>
</template>
<script>
import TextInputFloatingLabel from './shared/TextInput--floating-label'

export default {
  name: 'SignUpForm',
  components: {
    TextInputFloatingLabel
  },
  data() {
    return {
      fields: {
        email: {type: 'email', value: ''},
        firstName: {type: 'text', value: '', class:"half"},
        lastName: {type: 'text', value: '', class:"half"},
        password: {type: 'password', value: '', 
          pattern: '^\\S{6,}$'},
        confirmPassword: {type: 'password', value: ''},
      },
    };
  },
  mounted() {
    this.$el.elements[0].focus();
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  font: 14px/1.4 Sans-Serif;
}
h1 {
  color: #bfa295;
}
form {
  border: 2px #F1EBE8 solid;
  border-radius: .5rem;
  padding: 1.5em;
  min-width: 320px;
  max-width: 98%;
  width: 480px;
  margin: auto;
  &:valid {
    h1 {
      color: #5cb85c;
    }
    input[type="submit"] {
      background-color: #5cb85c;
      border-width: 1px;
      color: #fff;
    }
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
