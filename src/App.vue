<template>
  <router-view />
</template>

<script setup lang="ts">
import 'quasar/src/css/index.sass';
import { useUserStore } from '@/stores/user';
import { applyTheme } from '@/utils/theme';
import { watch } from 'vue';

const userStore = useUserStore();

userStore.loadSettings();
applyTheme();

watch(
  () => userStore.settings.theme === 'dark',
  (isDark: boolean) => {
    document.body.classList.toggle('dark--page', isDark);
    document.body.classList.toggle('light--page', !isDark);
  },
  { immediate: true },
);
</script>
