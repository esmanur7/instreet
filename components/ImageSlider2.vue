<template>
  <div class="container-fluid mt-4 text-center">
    <p style="font-size: 24px; text-align: left;" class="mb-4">Sizin İçin Seçtiklerimiz</p>
    <div
      id="productCarousel"
      class="carousel mx-auto"
      width: 100%
    >
      <div class="carousel-inner">
        <!-- Her carousel-item içinde 5 ürün -->
        <div v-for="(chunk, index) in chunkedProducts" :key="index" class="carousel-item" :class="{ active: index === currentIndex }">
          <div class="row justify-content-center">
            <div
              v-for="(product, i) in chunk"
              :key="i"
              class="col-md-2 d-flex justify-content-center"
            >
              <div class="card text-center" style="width: 12rem">
                <a :href="product.link" target="_blank">
                  <img
                    :src="product.image"
                    class="card-img-top"
                    alt="product image"
                  />
                </a>
                <div class="card-body">
                  <h6 class="card-title">{{ product.brand }}</h6>
                  <p class="card-text text-muted">
                    <small><del>{{ product.oldPrice }}</del></small>
                    <br />
                    <strong>{{ product.price }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Controls -->
      <button class="carousel-control-prev" type="button" @click="prevSlide">
        <i class="bi bi-chevron-left"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="nextSlide">
        <i class="bi bi-chevron-right"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // Aktif sayfa indeksi
      products: [
        // Ürün bilgileri burada
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-05/22/101918152_f2.jpg?w=600",
          brand: "Lumberjack",
          oldPrice: "1.699,99 TL",
          price: "849,99 TL",
          link: "https://example.com/product1",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-02/29/101449807_m1.JPG?w=600",
          brand: "Reebok",
          oldPrice: "1.399,99 TL",
          price: "1.099,99 TL",
          link: "https://example.com/product2",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/11/101876088_f2-1728662377.JPG?w=600",
          brand: "Reebok",
          oldPrice: "2.499,99 TL",
          price: "2.199,99 TL",
          link: "https://example.com/product3",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-09/03/101926516_d2.jpg?w=600",
          brand: "Reebok",
          oldPrice: "3.999,99 TL",
          price: "3.499,99 TL",
          link: "https://example.com/product4",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-04/15/101783802_f2.jpg?w=600",
          brand: "Lumberjack",
          oldPrice: "2.999,99 TL",
          price: "2.599,99 TL",
          link: "https://example.com/product5",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-06/26/101909331_d2-1719399915.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-04/03/101782880_f2.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/01/101815514_f2-1727778629.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/11/101876060_f2-1728663069.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/23-06/22/101792764_d2.jpeg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/22-09/08/101343944_f2.JPG?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-08/20/101894308_m1.JPG?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/01/101816211_f2-1727778651.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/23-10/27/101792825_d2-1698423352.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-11/06/101926394_f2.JPG?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/01/101815511_f2-1727778627.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/11/101783596_f2-1728662120.JPG?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/11/101783599_f2-1728662123.JPG?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-06/14/101917368_f2.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/22-08/18/100445028_f1.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/23-07/28/101553495_d2-1690522362.jpeg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-05/13/101894763_f2.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/22-08/18/100445028_f1.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-09/30/101782901_f2-1727676109.jpg?w=600",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
        {
          image:
            "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-10/09/102056221_m1-1728464366.jpg?w=600 ",
          brand: "Nike",
          oldPrice: "4.999,99 TL",
          price: "4.499,99 TL",
          link: "https://example.com/product6",
        },
      ],
    };
  },
  computed: {
    chunkedProducts() {
      const chunkSize = 5; // Her sayfada kaç ürün gösterilecek
      return this.products.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);
    },
  },
  methods: {
    nextSlide() {
      // Bir sonraki slayda geç
      this.currentIndex = (this.currentIndex + 1) % this.chunkedProducts.length;
    },
    prevSlide() {
      // Bir önceki slayda geç
      this.currentIndex =
        (this.currentIndex - 1 + this.chunkedProducts.length) %
        this.chunkedProducts.length;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0.5rem;
  border: 3px solid #ffffff;
  width: 38rem;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: transparent;
  border: none;
  color: black; /* İkon rengi */
  font-size: 2rem; /* İkon boyutu */
  width: 15%;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: none; /* Önceki ikonları gizle */
}
.carousel-inner .row {
  justify-content: center;
  max-width: 100%; /* Genişliği artırabilirsiniz */
  margin: 0 auto;
}
</style>
