<template>
  <form id="signup" autocomplete="off">
    <h1>Come Inside!</h1>
    <text-input-floating-label v-for="(field, item) in fields"
      v-model="field.value"
      :styleClass="field.class"
      :pattern="field.pattern"
      :name="item"
      :key="item"
      :dirty="$v.fields.$each[item].$dirty"
      :error="$v.fields.$each[item].$error"
      :type="field.type">
    </text-input-floating-label>
    <input type="submit" value="Sign up"/>
    <pre>{{ $v }}</pre>
  </form>
</template>
<script>
//@blur="$v.text.$touch"
import TextInputFloatingLabel from './shared/TextInput--floating-label'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, sameAs, dirty, minLength } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)
const touchMap = new WeakMap()

export default {
  name: 'SignUpForm',
  components: {
    TextInputFloatingLabel
  },
  data() {
    return {
      email: '',
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
  methods: {
    delayTouch($v) {
      console.log('input')
      // $v.$reset()
      // if (touchMap.has($v)) {
      //   clearTimeout(touchMap.get($v))
      // }
      // touchMap.set($v, setTimeout($v.$touch, 1000))
    },
    validate() {
      console.log("validate")
    }
  },
  mounted() {
    this.$el.elements[0].focus();
    //debugger;
  },
  validations: {
    fields: {
      $each: {
        required,
      },
      email: {
        value: {
          required,
        },
      },
      password: {
        value: {
          minLength: minLength(8)
        }
      },
      confirmPassword: {
        sameAsPassword: sameAs('password')
      },
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
  &:valid input[type="submit"] {
    background-color: #5cb85c;
    border-width: 1px;
    color: #fff;
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
