<script setup lang="ts">
import { useProjects } from '~/composables/useProjects'

const { listProjects } = useProjects()
</script>

<template>
  <div class="text-left">
    <h1 class="text-2xl sm:text-3xl mb-5 font-bold">
      Featured Projects
    </h1>
    <div class="list-projects mb-8">
      <CardProject v-for="project in listProjects" :key="project.id" :project="project" />
    </div>
    <div class="mx-auto text-center">
      <router-link class="btn-outline" to="/projects">
        See more project
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.list-projects {
  @apply grid grid-cols-1 gap-5
  sm:grid-cols-2 lg:grid-cols-3;
}
</style>
