
<template>
  <nav class="navbar navbar-expand-lg px-4" style="background-color: #222831; border-bottom: 3px solid #00adb5;">
    <RouterLink to="/home" class="navbar-brand text-white fw-bold">
      <span style="color: #00adb5;">▦</span> Pixel Art
    </RouterLink>

    <div class="navbar-nav ms-auto align-items-center">
      <RouterLink to="/home" class="nav-link">Home</RouterLink>
      <RouterLink to="/gallery" class="nav-link">Gallery</RouterLink>
      <RouterLink to="/drawing" class="btn btn-info mx-2">+ New Drawing</RouterLink>
      <RouterLink to="/login" class="nav-link">Login</RouterLink>
      <RouterLink to="/register" class="nav-link">Register</RouterLink>
      <RouterLink to="/home" class="nav-link">Logout</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  color: white;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #00adb5;
}
</style>