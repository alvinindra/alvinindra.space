<script setup lang="ts">
useHead({
  title: 'Alvin Indra Pratama',
  meta: [
    {
      name: 'description',
      content: 'An online portfolio and blog by Alvin Indra Pratama.',
    },
  ],
})
</script>

<template>
  <Header />
  <main class="app-container">
    <router-view />
    <footer class="relative text-center left-0 bottom-0 py-3 w-full">
      Made by Alvin Indra &copy; 2022
    </footer>
  </main>
</template>

<style lang="scss">
.app-container {
  @apply px-10 md:px-20 py-3 md:py-10;
}

@media (max-width: 330px) {
  .app-container {
    @apply px-5;
  }
}
</style>
