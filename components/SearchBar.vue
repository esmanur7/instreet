<template>
  <header class="p-3 bg-light border-bottom">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <div class="logo">
        <NuxtLink to="/">
          <img 
            src="https://www.instreet.com.tr/pub/assets/instreet-v2/images/instreet-logo-v2-black.svg" 
            alt="Logo" 
            width="200" 
          />
        </NuxtLink>
      </div>

      <!-- Arama Çubuğu -->
      <div class="search-bar flex-grow-1 mx-3 position-relative">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-search"></i>
          </span>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Aradığınız ürün, marka veya kategoriyi yazınız"
            @focus="showSuggestions = true" 
            @blur="hideSuggestions"
          />
        </div>
        <!-- Arama Önerileri -->
        <div v-if="showSuggestions" class="search-suggestions bg-white border rounded shadow mt-1 p-2">
          <div class="mb-2"><strong>Popüler Aramalar</strong></div>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge bg-light text-dark border">Nike</span>
            <span class="badge bg-light text-dark border">Kadın Bot</span>
            <span class="badge bg-light text-dark border">Krampon</span>
            <span class="badge bg-light text-dark border">Adidas</span>
            <span class="badge bg-light text-dark border">Puma</span>
          </div>
          <div class="mb-2"><strong>Popüler Ürünler</strong></div>
          <ul class="list-unstyled">
            <li class="mb-2">
              <strong>Lumberjack</strong> - MURRY 4PR Siyah Erkek Koşu Ayakkabısı
              <span class="text-danger">849,99 TL</span>
            </li>
            <li class="mb-2">
              <strong>Reebok</strong> - Fleece Hoodie Beyaz Kadın Sweatshirt
              <span class="text-danger">999,99 TL</span>
            </li>
            <li>
              <strong>Lumberjack</strong> - BELISIMA 4PR Siyah Kadın Outdoor
              <span class="text-danger">2.699,99 TL</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Butonlar -->
      <div class="buttons d-flex align-items-center gap">
        <!-- Giriş Yap -->
        <div 
          class="dropdown position-relative"
          @mouseover="showLoginDropdown = true" 
          @mouseleave="showLoginDropdown = false"
        >
          <button class="btn btn-outline-secondary d-flex align-items-center" type="button">
            <i class="bi bi-person me-2"></i> Giriş Yap
            <i class="bi bi-chevron-down ms-2"></i>
          </button>
          <ul 
            v-if="showLoginDropdown" 
            class="dropdown-menu show position-absolute"
          >
            <li><button class="dropdown-item">Giriş Yap</button></li>
            <li><button class="dropdown-item">Üye Ol</button></li>
          </ul>
        </div>

        <!-- Sepetim -->
        <div class="dropdown position-relative">
          <button 
            class="btn btn-outline-secondary d-flex align-items-center" 
            @click="openCart"
          >
            <i class="bi bi-cart me-2"></i> Sepetim
            <i class="bi bi-chevron-down ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Sepetim Boş Sayfa -->
  <div v-if="cartOpen" class="empty-cart p-5 text-center">
    <h5>Sepetiniz şu an boş</h5>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showSuggestions = ref(false);
const cartOpen = ref(false);
const showLoginDropdown = ref(false);

const hideSuggestions = () => {
  setTimeout(() => (showSuggestions.value = false), 200);
};

const openCart = () => {
  cartOpen.value = !cartOpen.value;
};
</script>

<style scoped>
.logo img {
  max-height: 50px;
}

.input-group-text {
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-right: none;
}

.input-group .form-control {
  border-left: none;
  height: 55px; /* Arama çubuğunun boyutu */
  font-size: 17px; /* Arama çubuğu yazı boyutu */
}

.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
}

.dropdown-menu {
  top: 100%;
  left: 0;
  right: auto;
  margin-top: 5px;
  z-index: 1000;
}

.empty-cart {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-top: 20px;
}

.bi-chevron-down {
  font-size: 0.8rem;
  color: #6c757d;
}

.btn-outline-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000; /* Yazı rengi */
  border-color: #ddd; /* Kenarlık rengi */
  background-color: #f9f9f9; /* Açık gri arka plan */
  height: 35px; /* Yükseklik */
  padding: 0 10px; /* Kenar boşlukları */
  font-size: 14px; /* Yazı boyutu */
}

.btn-outline-secondary:hover {
  background-color: #e6e6e6; /* Hover rengi */
}

.dropdown-item {
  color: #333;
  font-size: 0.9rem;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

.text-danger {
  color: #dc3545 !important;
  font-weight: bold;
}
</style>

          



