<script setup lang="ts">
import { useProjects } from '~/composables/useProjects'

const { listProjects } = useProjects()
</script>

<template>
  <h1 class="text-3xl mb-1 font-bold">
    Projects
  </h1>
  <h2 class="mb-5">
    Showcase of my work on Front-End Web Developer.
  </h2>
  <div class="list-projects mb-8 animated animate-fadeInUp">
    <CardProject v-for="project in listProjects" :key="project.id" :project="project" />
  </div>
</template>

<style lang="scss">
.list-projects {
  @apply grid grid-cols-1 gap-5
  sm:grid-cols-2 lg:grid-cols-3;
}
</style>
