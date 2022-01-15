<script setup lang="ts">
defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="experience">
    <span class="experience-point"></span>
    <div class="experience-details">
      <div class="experience-details__date">
        {{ experience.date }}
      </div><div class="experience-details__company">
        {{ experience.company }}
      </div><div class="experience-details__job">
        {{ experience.job }}
      </div>
    </div>
    <div class="experience-description">
      <ul>
        <li v-for="desc in experience.desc" :key="desc">
          {{ desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.experience {
  @apply flex <sm:flex-col w-[100%] relative border-green-500 dark:border-white p-4 border-l-1;

  &-point {
    @apply absolute w-0.75rem h-0.75rem border-light-50 bg-green-500 dark:bg-white
    rounded-full -left-6px top-25px;
  }

  &-details {
    @apply w-[100%] mb-4 sm:w-[33.3333%] sm:mb-0;

    &__date {
      @apply mb-4 border-green-500 dark:border-white dark:text-white text-sm py-1 px-3
      border-2 rounded-full w-max;
    }

    &__company {
      @apply text-dark-50 font-bold dark:font-normal dark:text-white;
    }

    &__job {
      @apply text-sm;
    }
  }

  &-description {
    @apply w-[100%] sm:w-[66.6667%] my-auto;
  }
}
</style>
