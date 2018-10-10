<template>
  <main id="content" v-if="currentFolder !== null">
    <div class="left-vertical-line"></div>

    <div>Current folder: {{currentFolder.name}}</div>

    <ul style="margin-top: 30px">
        <li v-for="elements in currentFolder.childrens">{{elements.name}}</li>
    </ul>

  </main>
</template>

<script>
  import foldersMixin from '../mixins/foldersMixin'

  export default {
    name: 'Content',
    mixins: [foldersMixin],
  }
</script>

<style scoped lang="less">
  @import "../stylesheets/_vars";
  @import "../stylesheets/_media";

  // Thin vertical separator
  .left-vertical-line {
    border: 0 solid fade(@secondary-font-color, 15%);
    border-left-width: 1px;
    height: 100%;

    @media @phone {
      display: none;
    }
  }

  // Main area
  #content {
    grid-area: main;
    display: flex;

    padding: @small-padding;

    ul {
      list-style: none;
    }
  }
</style>
