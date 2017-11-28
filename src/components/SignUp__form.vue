<template>
  <form id="signup" autocomplete="off">
    <text-input-floating-label v-for="(field, item) in fields"
      :name="snakeCased(item)"
      :placeholder="spacedCased(item)" 
      :item="item"
      :key="item"
      :type="field">
    </text-input-floating-label>  
  </form>
</template>
<script>
import TextInputFloatingLabel from './shared/TextInput--floating-label'
import Vue from 'vue'
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'SignUpForm',
  components: {
    TextInputFloatingLabel
  },
  data() {
    return {
      fields: {
        firstName: 'text',
        lastName: 'text',
        email: 'email',
        password: 'password',
        confirmPassword: 'password'
      },
    };
  },
  methods: {
    spacedCased(text) {
      text = text.replace( /([A-Z])/g, " $1" );
      return text.charAt(0).toUpperCase() + text.slice(1)
    },
    snakeCased(text) {
      return text.replace( /([A-Z])/g, "-$1" );
    },
  },
  mounted() {
    //debugger;
  },
  props: [
    'name',
    'type',
    'placeholder'
  ],
  validations: {
    fields: {
      required,
      confirmPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
}

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
