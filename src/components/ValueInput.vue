<template>
  <div class="value-input">
    <div class="label">{{label}}</div>
    <input class="input" v-bind="value" :type="type" :placeholder="placeholder">
    <div class="button">{{buttonText}}</div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Input Something'
    },
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    buttonText: {
      type: String,
      default: '应用'
    }
  },
  data: function() {
    return {
    }
  }
}
</script>
<style scoped>
.label {
  display: inline-block;
}
.input{
  display: inline-block;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 250px;
  padding: 4px;
  border-radius: 4px;
  font: unset
}
.input:focus, .input:hover{
  border: 1px solid rgba(255, 255, 255, 0.4);
}
.button{
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #1ed178;
}
.button:hover{
  background-color: #1cd679;
  box-shadow: 0 0 3px #1cd679;
}
</style>
