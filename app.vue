/*
<template>
  <div>

    <Header />
    <SearchBar /> <!-- Arama çubuğu bileşeni -->
    <Kategoriler />
    <Card />
    <ProductCards1 />
    <footerss />
    <!-- Diğer bileşenleri buraya ekleyebilirsin -->
  </div>
</template>

<script setup>
import SearchBar from './components/SearchBar.vue'; // Bileşeni içe aktarma
import Header from './components/Header.vue';
import ProductCards1 from './components/ProductCards1.vue';
import Card from './components/Card.vue';
import footerss from './components/Footer.vue';
</script>


<template>
  <div class="layout-container">
    <nav class="sidebar">
      <button @click="showComponent('Card')">Card</button>
      <button @click="showComponent('Footer')">Footer</button>
      <button @click="showComponent('Header')">Header</button>
      <button @click="showComponent('Kategoriler')">Kategoriler</button>
      <button @click="showComponent('ProductCards1')">Product Cards 1</button>
      <button @click="showComponent('SearchBar')">Search Bar</button>
      <button @click="showComponent('Component7')">Component 7</button>
      <button @click="showComponent('Component8')">Component 8</button>
      <button @click="showComponent('Component9')">Component 9</button>
      <button @click="showComponent('Component10')">Component 10</button>
    </nav>
    <main class="main-content">
      <Card v-show="currentComponent === 'Card'" />
      <Footer v-show="currentComponent === 'Footer'" />
      <Header v-show="currentComponent === 'Header'" />
      <Kategoriler v-show="currentComponent === 'Kategoriler'" />
      <ProductCards1 v-show="currentComponent === 'ProductCards1'" />
      <SearchBar v-show="currentComponent === 'SearchBar'" />
     <Component7 v-show="currentComponent === 'Component7'" /> 
      <Component8 v-show="currentComponent === 'Component8'" />
      <Component9 v-show="currentComponent === 'Component9'" />
      <Component10 v-show="currentComponent === 'Component10'" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '~/components/Card.vue';
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
import Kategoriler from '~/components/Kategoriler.vue';
import ProductCards1 from '~/components/ProductCards1.vue';
import SearchBar from '~/components/SearchBar.vue';
import Component7 from '~/components/Component7.vue';
import Component8 from '~/components/Component8.vue';
import Component9 from '~/components/Component9.vue';
import Component10 from '~/components/Component10.vue';

const currentComponent = ref('Card');

function showComponent(componentName) {
  currentComponent.value = componentName;
}
</script>

<style scoped>
.layout-container {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 10px;
}

.sidebar button {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  text-align: left;
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.sidebar button:hover {
  background-color: #ddd;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}
</style>
