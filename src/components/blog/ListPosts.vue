<script setup lang="ts">
import { useRouter } from 'vue-router'
import { formatDate } from '~/composables/helper'
const props = defineProps<{
  type?: string
}>()
const router = useRouter()

const routes = router.getRoutes()
  .filter(i => i.path.startsWith('/blog') && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

const posts = computed(() =>
  routes.filter(i => !i.path.endsWith('.html') && i.meta.frontmatter.type === props.type),
)

const filteredPost = computed(() =>
  posts.value.reduce((r: any, a: any) => {
    r[new Date(a.meta.frontmatter.date).getFullYear()] = r[new Date(a.meta.frontmatter.date).getFullYear()] || []
    r[new Date(a.meta.frontmatter.date).getFullYear()].push(a)
    return r
  }, []),
)

const postFiltered = computed(() => {
  return Object.keys(filteredPost.value).map((date) => {
    return {
      year: date,
      posts: filteredPost.value[date],
    }
  })
})

</script>

<template>
  <div v-for="post in postFiltered.reverse()" :key="post.year" class="block sm:flex mb-1.9em animated animate-fadeInUp">
    <div class="text-size-1.6em mr-1.8em opacity-60 pt-6px <md:text-size-1.2em">
      {{ post.year }}
    </div>
    <ul class="!flex-grow !m-0 !p-0 !list-none">
      <li class="!pl-0">
        <router-link
          v-for="route in post.posts"
          :key="route.path"
          class="article"
          :to="route.path"
        >
          <div class="title text-lg <sm:text-sm">
            {{ route.meta.frontmatter.title }}
          </div>
          <div class="ml-auto my-auto time opacity-60 text-md <sm:text-sm">
            {{ formatDate(route.meta.frontmatter.date) }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.prose ul > li::before {
  display: none;
}

.article {
  @apply flex font-normal pl-0 border-b-gray-500 border-dashed
  border-b-1px border-b py-12px align-middle justify-between;
  text-decoration: none !important;

  &:first-child {
    padding-top: 0 !important;
  }
}
</style>
