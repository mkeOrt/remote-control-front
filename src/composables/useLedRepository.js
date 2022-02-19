import { onMounted, ref } from "vue";

const URL = 'http://192.168.1.71:3000';

export const useGetState = () => {
  const ledState = ref(false);

  onMounted(async () => {
    ledState.value  = !!(await fetch(URL).then(res => res.json()));
  });

  return { ledState };
}

export const useToggleState = () => {
  const toggleLedState = async () => {
    return !!(await fetch(`${URL}/toggle`, { method: 'POST' }).then(res => res.json()));
  }
  return { toggleLedState };
}