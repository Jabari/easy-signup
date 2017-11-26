<template>
	<div class="text-input--floating-label">
		<input id="first-name" name="first-name" type="text" placeholder="First Name" required>
  	<label for="name">First Name</label>
	</div>
</template>
<script>
export default {
	name: 'TextInputFloatingLabel',
	props: ['fields']
}
</script>
<style lang="scss">
/** $primary-color **/
input, textarea {
  width: 100%;
  border: 2px solid #8CE9FF; 
  border-radius: 4px;
  background: none;
  color: #1f292f;
  margin: 1rem auto;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 12px 12px 12px 12px;
  outline: 0;
  &:valid {
    // Hides the label
    background: white; 
  }
  &:focus {
    border-color: #f06d06;
    padding: 4px 6px 20px 6px;
    + label {
    	background: #f06d06;
	    color: white;
	    font-size: 70%;
	    padding: 1px 6px;
	    z-index: 2;
	    text-transform: uppercase;
	    top: 100%;
	    margin-top: -16px;
    }
  }
}
label {
	top: 0;
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
  color: #999;
  padding: 7px 6px;
}
textarea {
  display: block;
  resize: vertical;
}

</style>