<template>
    <div>
        <h1 v-text="$t('home.title')" />
        <div v-text="test" />
    </div>

    <div>
      <div v-text="userStore.name" />
      <a-button v-text="$t('home.updateState')" @click="onUpdateName" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '@/store/user';

const { t } = useI18n();

const test = ref(t('home.test'));

const userStore = useUserStore();
  const onUpdateName = () => {
    // 通过 actions 去修改 state
    userStore.updateName('杨洋');
  }
</script>