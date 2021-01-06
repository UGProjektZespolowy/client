<template>
  <b-card :key="news._id"
          :title="news.Title"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 100rem;"
          class="mb-3">
    <b-card-text v-html="news.News"></b-card-text>
  </b-card>
</template>
<script>
export default {
  props: ['news']
};
</script>