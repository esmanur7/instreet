<script setup>
import { ref } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';


// Componentleri import et
import SearchBar from '~/components/SearchBar.vue';

// Hangi componentin gösterileceğini kontrol eden state
const currentComponent = ref('searchBar'); // Varsayılan olarak 'SearchBar' seçili

function showComponent(componentName) {
  currentComponent.value = componentName; // Seçilen componenti güncelle
}
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <div class="sidebar">
      <h2>Menü</h2>
      <button @click="showComponent('searchBar')">Search Bar</button>
    </div>

    <!-- Ana Component Alanı -->
    <div class="main">
      <!-- Sadece seçilen component gösterilecek -->
      <SearchBar v-if="currentComponent === 'searchBar'" />
    </div>
  </div>
</template>

<style scoped>
/* Layout Ayarları */
.layout {
  display: flex; /* Yan yana düzen */
  height: 100vh; /* Tüm ekranı kapla */
}

/* Sidebar Stilleri */
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Butonlar arası boşluk */
  border-right: 1px solid #ddd; /* Sağ tarafa çizgi */
}

.sidebar h2 {
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
}

/* Sidebar Butonları */
.sidebar button {
  padding: 10px 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
}

.sidebar button:hover {
  background-color: #e6e6e6;
}

/* Main Alan Stili */
.main {
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto; /* Taşma durumunda kaydırma çubuğu */
}
</style>



