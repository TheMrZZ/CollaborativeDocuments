<template>
  <li>
    <span class="sidebar-folder" :class="{ selected }">
      <span class="right-chevron" @click.prevent="toggleSelected"></span>
      <span class="folder-icon"></span>
      <a :href="'#' + folderPath">{{ subFolder.name }}</a>
    </span>

    <ul v-if="subFolder.children && subFolder.children.length && selected">
      <li v-for="child in childrenFolders">
        <SideTree :sub-folder="child" :folder-path="folderPath + '/' + child.name"></SideTree>
      </li>
    </ul>

  </li>
</template>

<script>
  import foldersMixin from '../mixins/foldersMixin'

  export default {
    name: 'SideTree',
    props: ['subFolder', 'folderPath'],
    mixins: [foldersMixin],

    data () {
      return {
        // The element is selected by default if it is in the current path
        selected: this.inPath(),
      }
    },

    computed: {
      childrenFolders: function () {
        return this.subFolder.children.filter((child) => child.type === 'dir')
      },
    },

    methods: {
      toggleSelected: function () {
        this.$store.dispatch('updateFolders', this.$route.path).then(() => {
          this.selected = !this.selected
        })
      },

      inPath: function () {
        return this.$route.path.startsWith(this.folderPath)
      },

      // If the current folder is not selected but is now in the path, select it
      selectIfInPath: function () {
        if (this.inPath())
          this.selected = true
      },
    },

    watch: {
      '$route': 'selectIfInPath',
    },
  }
</script>

<style lang="less">
  @import "../stylesheets/_media";
  @import "../stylesheets/_vars";
  @import "../stylesheets/_icons";

  .sidebar-folder.selected > .right-chevron {
    transform: rotate(90deg);
  }

  .sidebar-folder {
    transition: 0s color;

    > a:before {
      .display-folder(@folder-icon-size, @folder-icon-size);
      margin-right: 7px;
    }

    &.selected > a:before {
      .display-folder-open(@folder-icon-size, @folder-icon-size);
      margin-right: 7px;
    }
  }
</style>
