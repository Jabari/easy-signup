<template>
	<div class="text-input--floating-label">
		<input id="" v-bind:name="name" v-bind:type="type" v-bind:placeholder="placeholder" required>
  	<label for="name" v-once>{{ placeholder }}</label>
	</div>
</template>
<script>
export default {
	name: 'TextInputFloatingLabel',
	props: [
		'name',
		'type',
		'placeholder'
	],
}
</script>
<style lang="scss">
/** $primary-color **/
input, textarea {
  background-color: #ddd;
	border: 2px solid #1f292f; 
  border-radius: 4px;
  color: #1f292f;
  font-size: 1rem;
  left: 0;
  margin: 1rem auto;
  outline: 0;
  padding: 0.7rem;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 1;
  &:valid {
    // Hides the label
    background: white; 
  }
  &:focus {
  	background-color: white;
    border-color: #8CE9FF;
    
    + label {
    	background: #8CE9FF; //#f06d06 orange
	    font-size: 70%;
	    padding: 1px 0.9rem;
	    z-index: 2;
	    text-transform: uppercase;
	    top: 100%;
	    margin-top: -16px;
    }
  }
}
label {
	top: 0;
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
  padding: 7px 6px;
}
textarea {
  display: block;
  resize: vertical;
}

</style>