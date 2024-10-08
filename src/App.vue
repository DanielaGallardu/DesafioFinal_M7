<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-dark text-white p-3">
    <div class="container d-flex justify-content-between align-items-center">
      <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link ms-3">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bolder;
}

.nav-link:hover {
  text-decoration: underline;
  opacity: 0.8;
}

.container {
  border-bottom: 2px solid #86172f;
  padding-bottom: 10px;

}

@media (min-width: 1024px) {
  .nav-link {
    font-size: 1.1rem;
  }
}
</style>
