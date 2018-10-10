<template>
  <nav id="sidebar">
    <ul>
      <SideTree :sub-folder="folders" :folder-path="''"></SideTree>
    </ul>
  </nav>
</template>

<script>
  import SideTree from './SideTree'
  import foldersMixin from '../mixins/foldersMixin'

  export default {
    name: 'Sidebar',
    components: { SideTree },
    mixins: [foldersMixin],
  }
</script>

<style lang="less">
  @import "../stylesheets/_media";
  @import "../stylesheets/_vars";
  @import "../stylesheets/_icons";

  #sidebar {
    grid-area: sidebar;
    overflow: auto;
    padding: @small-padding;
    padding-left: 5px;

    @media @phone {
      display: none;
    }

    ul {
      list-style: none;
      white-space: nowrap;
    }

    // Every layer (except the first) has more indentation, but is hidden by default
    ul ul {
      margin-left: 10px;
    }
  }

</style>
