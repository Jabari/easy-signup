<template>
	<div class="text-input--floating-label" :class="styleClass">
		<input 
			:name="kebabCased(name)" 
			:type="type" 
			:placeholder="spacedCased(name)"
			:pattern="pattern"
			required>
  	<label for="name" v-once>{{ spacedCased(name) }}</label>
  	<span class="text-input--error-message" v-show="!showError">
  		Field is required
  	</span>
  	<!-- <span class="text-input--message" v-if="!$v.item.required">Field is required</span> -->
	</div>
</template>
<script>
export default {
	name: 'TextInputFloatingLabel',
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
    showError() {
    	return this.$el.getElementsByTagName('input')[0].value == false;
    }
  },
  mounted() {
 		//debugger
  },
	props: [
		'styleClass',
		'dirty',
		'error',
		'patern',
		'placeholder',
		'name',
		'type'
	],
}
</script>
<style lang="scss">
/** $primary-color **/
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
  &:invalid {
  	//border-color: $error-color;
  	//outline-color: ea520b; // #4D90FE
		//outline-offset: -1px;
		//outline-style: auto;
		//outline-width: 3px;
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