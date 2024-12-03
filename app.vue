/*
<template>
<div class="layout-container">
    <nav class="sidebar">
      <button @click="showComponent('Card')">Card</button>
      <button @click="showComponent('Footer')">Footer</button>
      <button @click="showComponent('Header')">Header</button>
      <button @click="showComponent('Kategoriler')">Kategoriler</button>
      <button @click="showComponent('ProductCards1')">Product Cards 1</button>
    
    </nav>
    <main class="main-content">
      <Card v-show="currentComponent === 'Card'" />
      <Footer v-show="currentComponent === 'Footer'" />
      <Header v-show="currentComponent === 'Header'" />
      <Kategoriler v-show="currentComponent === 'Kategoriler'" />
      <ProductCards1 v-show="currentComponent === 'ProductCards1'" />

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


const currentComponent = ref('Card');

function showComponent(componentName) {
  currentComponent.value = componentName;
}
</script>


