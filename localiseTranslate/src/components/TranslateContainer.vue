<template>
  <!-- header -->
  <header class="translate-header">
    <button 
      v-for="(availableLocale, idx) of availableLocales"
      :key="idx"
      :class="[
        {
          'button--focus': availableLocale === locale
        }
      ]"
      @click="onClickLocale(availableLocale)"
    > 
      {{ availableLocale }}
    </button>
  </header>

  <!-- contents -->
  <div
    class="contents"
  >
    <div 
      class="contents-item"
      v-for="(key, idx) of keys"
      :key="idx"
    >
      <span>{{ idx }}</span>
      <span>
        {{ key }}
      </span>
      <span>
        {{ $t(key) }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import en_US from '@/locales/en_US.json'

const { locale, availableLocales } = useI18n()

const keys = computed(() => {
  return [...Object.keys(en_US)]
})

const onClickLocale = (selectedLocale) => {
  locale.value = selectedLocale
}
</script>

<style scoped>
.translate-header {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px;
}

.button--focus {
  background-color: #646cff;
}

.contents {
  width: 800px;
  height: 500px;
  overflow-y: scroll;
  /* border: 1px solid black; */
}

.contents-item {
  display: flex;
  align-items: center;
  padding: 4px;
  
  span {
    display: inline-block;
    flex: 1;
    text-align: start;
  }

  span:nth-child(2) {
    flex: 2;
  }
  span:nth-child(3) {
    flex: 3;
  }
}
</style>
