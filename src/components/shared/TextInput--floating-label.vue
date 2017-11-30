<template>
	<div class="text-input--floating-label" :class="styleClass">
		<input 
			v-if="type !== 'password'"
			:name="kebabCased(name)"
			:class="dirty === true ? ' dirty' : ''" 
			:type="type" 
			:placeholder="spacedCased(name)"
			:pattern="pattern"
      @blur="dirty = true"
			required>
		<input 
			v-else
			:name="kebabCased(name)"
			:class="dirty === true ? ' dirty' : ''" 
			type="password" 
			:placeholder="spacedCased(name)"
			:pattern="pattern"
      @blur="dirty = true"
      @input="validate($event)"
			required>
  	<label for="name" v-once>{{ spacedCased(name) }}</label>
  	<span class="text-input--error-message" v-if="name === 'password'">
  		Please use at least 6 characters.
  	</span>
  	<span class="text-input--error-message" v-if="name === 'confirmPassword'">
  		Please ensure this field exactly matches your password.
  	</span>
	</div>
</template>
<script>
var passwordFields;

export default {
	name: 'TextInputFloatingLabel',
	data(){
		return {
			dirty: false,
			match: false,
		}
	},
	directives: {
		focus() {

		}
	},
	methods: {
    spacedCased(text) {
      text = text.replace( /([A-Z])/g, " $1" );
      return text.charAt(0).toUpperCase() + text.slice(1)
    },
    kebabCased(text) {
      return text.replace( /([A-Z])/g, "-$1" ).toLowerCase();
    },
    validate(e) { 	
    	if ( passwordFields.length > 1 && passwordFields[1].value ) {
    		
    		passwordFields[0].value === passwordFields[1].value ? 
					(passwordFields[0].setCustomValidity(''), passwordFields[1].setCustomValidity('')) : 
					passwordFields[1].setCustomValidity('invalid');
    	}
    	return;
    }
  },
  mounted() {
    passwordFields = this.$el.parentElement.querySelectorAll('input[type="password"');
  },
	props: [
		'styleClass',
		'error',
		'pattern',
		'placeholder',
		'name',
		'type'
	],
}
</script>
<style lang="scss">
$primary-color: #8CE9FF;
$error-color: #f79483;
$success-color: #5cb85c;
.text-input--floating-label {
	width: 100%;
	&.half {
		float: left;
		width: 49%;
		&:nth-of-type(3n) {
			margin-left: 2%;
		}
	}
}
input, textarea {
  background-color: #ddd;
	border: 2px solid #cdcdcd; 
  border-radius: 4px;
  color: #bfa295; //9b6d5a
  font-size: 1rem;
  left: 0;
  margin: 1rem auto;
  outline: 0;
  padding: 0.7rem;
  position: relative;
  transition: border .1s ease;
  top: 0;
  width: 100%;
  z-index: 1;
  &[type="text"] {
  	text-transform: capitalize;
  }
  &:invalid.dirty:not(:focus) {
  	border-color: $error-color;
		~ .text-input--error-message {
			display: block;
		}
  }
  &:valid:not([type="submit"]) {
    // Hides the label
    background: white;
    //border-color: #cdc;
    //color: #cdc;
    background-image: url('../../assets/check.svg');
  	border-color: $success-color; //green
  	padding-right: 2.25rem;
    background-repeat: no-repeat;
    background-position: center right 0.5625rem;
    background-size: 1.125rem;
    + label {
    	background: $success-color; //#f06d06 orange
	    top: 100%;
	    margin-top: -16px;
	    z-index: 2;
    }
  }
  &:focus {
  	background-color: white;
    border-color: #8CE9FF; 
    + label {
    	background: #8CE9FF; //#f06d06 orange
	    top: 100%;
	    margin-top: -16px;
	    z-index: 2;
    }
  }
  &::placeholder {
		color: #aaa;
  }
	~ .text-input--error-message {
		color: $error-color;
		display: none;
	}

}

label {
	top: 0;
	font-size: 70%;
  text-transform: uppercase;
	border-radius: 1px;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: // not padding
    background 0.2s,
    color 0.2s,
    top 0.2s,
    bottom 0.2s,
    right 0.2s,
    left 0.2s;
  position: absolute;
  color: white;
  padding: 1px 0.9rem;
}
textarea {
  display: block;
  resize: vertical;
}
</style>