<template>
<Layout>
  <div class="flex flex-wrap items-start justify-start">

    <div class="order-2 w-full md:w-1/6 sm:pl-4 md:pl-6 lg:pl-8 sticky" style="top: 4rem">
      <OnThisPage />
    </div>

    <div class="order-1 w-full md:w-5/6">
      <div class="content" v-html="$page.markdownPage.content" />

      <div class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border">
        <NextPrevLinks />
      </div>
    </div>

  </div>
</Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>
<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    timeToRead
    content
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from '@/components/OnThisPage.vue';
import NextPrevLinks from '@/components/NextPrevLinks.vue';

export default {
  components: {
    OnThisPage,
    NextPrevLinks
  },

  metaInfo() {
    const title = this.$page.markdownPage.title;
    const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

    return {
      title: title,
      meta: [{
          key: 'description',
          name: 'description',
          content: description
        },
        {
          key: 'og:type', 
          property: 'og:type', 
          content: 'article' 
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: this.$static.metadata.siteUrl + '/itcracy_logo.svg'
        },



        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: this.$static.metadata.siteUrl + '/itcracy_logo.svg'
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
@import 'prism-themes/themes/prism-material-oceanic.css';

.youtube-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
