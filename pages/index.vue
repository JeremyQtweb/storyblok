<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' }) // published
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>