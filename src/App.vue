<template>
<div class="container">
  <input type="checkbox" v-model="ledState" @click="toggleLed">
</div>
</template>

<script setup>
import { useGetState, useToggleState } from './composables/useLedRepository';

const { ledState } = useGetState();
const { toggleLedState } = useToggleState();

const toggleLed = async () => ledState.value = await toggleLedState();
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="checkbox"] {
  height: 200px;
  width: 200px;
  -webkit-appearance: none;
  box-shadow: 
  -10px -10px 15px rgba(255, 255, 255, 0.5),
  10px 10px 15px rgba(70, 70, 70, 0.12);
  border-radius: 50%;
  border: 8px solid #ececec;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

input[type="checkbox"]:after {
  font-family: FontAwesome;
  content: '|';
  font-size: 40px;
}

input[type="checkbox"]:checked {
   box-shadow: 
  -10px -10px 15px rgba(255, 255, 255, 0.5),
  10px 10px 15px rgba(70, 70, 70, 0.12),
  inset -10px -10px 15px rgba(255, 255, 255, 0.5),
  inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  color: greenyellow;
}
</style>