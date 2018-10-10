<template>
  <header>
    <nav id="top-path">
      <ul>
        <li v-for="folder in currentPath">
          <span class="right-chevron"></span>
          <a :href="folder.url">{{folder.name}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import foldersMixin from '../mixins/foldersMixin'

  export default {
    name: 'Header',
    mixins: [foldersMixin]
  }
</script>

<style scoped lang="less">
  @import "../stylesheets/_media";
  @import "../stylesheets/_vars";
  @import "../stylesheets/_icons";

  // Top navigation bar
  header {
    grid-area: header;

    background-color: @header-color;

    display: flex;
    align-items: center;
  }

  // Navigation bar itself
  #top-path {
    font-size: 20px;
    margin-left: 0;

    ul {
      list-style-type: none;
    }

    // Folders list

    // On all devices, display the full folder's list with chevrons
    li {
      float: left;
      margin-left: 10px;
    }

    // On mobile, only display the current folder's name
    @media @phone {

      // Center the folder's name & make text smaller
      & {
        font-size: 15px;
        margin: 0 auto;
      }

      // Remove other displays, except the last one
      li {
        display: none;

        &:nth-last-of-type(1) {
          display: flex;
        }

        // Remove the chevron
        .right-chevron {
          display: none;
        }
      }
    }
  }

</style>
