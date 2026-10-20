
<template>
  <nav class="navbar">
    <RouterLink to="/home" class="brand">
      <span class="brand-icon">▦</span>
      Pixel Art
    </RouterLink>

    <div class="nav-links">
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/gallery">Gallery</RouterLink>
      <RouterLink to="/drawing" class="new-button">+ New Drawing</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/home">Logout</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 5%;
  background-color: #222831;
  color: white;
  border-bottom: 3px solid #00adb5;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
}

.brand-icon {
  color: #00adb5;
  font-size: 30px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links a {
  color: #eeeeee;
  font-size: 15px;
  transition: color 0.2s;
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #00adb5;
}

.nav-links .new-button {
  padding: 10px 16px;
  background-color: #00adb5;
  color: #222831;
  border-radius: 6px;
  font-weight: bold;
}

.nav-links .new-button:hover {
  background-color: #40d9df;
  color: #222831;
}

@media (max-width: 850px) {
  .navbar {
    flex-direction: column;
    gap: 16px;
  }

  .nav-links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 14px;
  }
}
</style>
