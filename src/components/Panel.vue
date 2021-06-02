<template>
  <div class="panel">
    <span class="close-button" @click="close">[x]</span>
    <div class="container">
      <h1>设置</h1>
      <value-input label="背景地址"/>
    </div>
  </div>
</template>
<script>
import ValueInput from './ValueInput.vue'

export default {
  components: { ValueInput },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
* {
  all:initial
}
h1 {
  font-size: 2em;
}
.panel {
  position: absolute;
  left: calc(50vw - 240px);
  top: calc(50vh - 135px);
  width: 480px;
  height: 270px;
  background-color: rgba(85, 85, 85, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 8px;
}
.container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.close-button {
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>
