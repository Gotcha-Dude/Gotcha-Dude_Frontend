<template>
  <header data-bs-theme="dark">
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>GOTCHA-DUDE</strong>
        </a>
      </div>
    </div>
  </header>

  <main>

    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">오디오 이미지 유출 관리 사이트</h1>
          <p>
            <a href="#" class="btn btn-primary my-2">오디오</a>
            <a href="#" class="btn btn-secondary my-2">이미지</a>
          </p>
        </div>
      </div>
    </section>

  </main>


</template>

<script>
export default {
  name: "HomeView",
  components: {  },
  data() {
    return {
      ingredients: [],
      ingredient: "",
    };
  },
  inject: ['$http'],
  methods: {
  },
  mounted() {
  },
};
</script>

<style>

@media (min-width: 768px) {

}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}

</style>

