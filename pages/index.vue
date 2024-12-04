<template>
    <div >
    <div class="sidebar">
      <button @click="navigateToNavbarbutton1" class="sidebar-button">
        SearchBar
      </button>
      <button @click="navigateToNavbarbutton2" class="sidebar-button">
        ImageSlider2
      </button>
      <button @click="navigateToNavbarbutton3" class="sidebar-button">
        ImageSlider
      </button>
      <button @click="navigateToNavbarbutton4" class="sidebar-button">
        BrandCards
      </button>
      <button @click="navigateToNavbarbutton5" class="sidebar-button">
         CategoryCircles
      </button>
      <button @click="navigateToNavbarbutton6" class="sidebar-button">
        Footer
      </button>
      <button @click="navigateToNavbarbutton7" class="sidebar-button">
        Header
      </button>
      <button @click="navigateToNavbarbutton8" class="sidebar-button">
        Card
      </button>
      <button @click="navigateToNavbarbutton9" class="sidebar-button">
        ProductCards1
      </button>
      <button @click="navigateToNavbarbutton10" class="sidebar-button">
         Kategoriler
      </button>
     
    </div>
   
    </div>

  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const navigateToNavbarbutton1 = () => {
    router.push('/SearchBar');
  };
  
  const navigateToNavbarbutton2 = () => {
    router.push('/ImageSlider2');
  };
  
  const navigateToNavbarbutton3 = () => {
    router.push('/ImageSlider');
  };
  const navigateToNavbarbutton4 = () => {
    router.push('/BrandCards');
  };
  const navigateToNavbarbutton5 = () => {
    router.push('/CategoryCircles');
  };
  const navigateToNavbarbutton6 = () => {
    router.push('/Footer');
  };
  
  const navigateToNavbarbutton7 = () => {
    router.push('/Header');
  };
  
  const navigateToNavbarbutton8 = () => {
    router.push('/Card');
  };
  const navigateToNavbarbutton9 = () => {
    router.push('/ProductCards1');
  };
  const navigateToNavbarbutton10 = () => {
    router.push('/Kategoriler');
  };

  
  
  </script>
  
  <style scoped>
  .sidebar {
    width: 100px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100vh;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar-button {
    width: 80px;
    height: 40px;
    margin-bottom: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
  }
  
  .sidebar-button:hover {
    background-color: #0056b3;
  }
  </style>