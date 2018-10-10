<template>
  <main id="content" v-if="currentFolder !== null">
    <div class="left-vertical-line"></div>

    <div>Current folder: {{currentFolder.name}}</div>

    <p @click="selectProperty('name')">Name</p>
    <p @click="selectProperty('type')">Type</p>

    <ul style="margin-top: 30px">
      <li v-for="elements in sortedElements">{{elements.name}}</li>
    </ul>

  </main>
</template>

<script>
  import foldersMixin from '../mixins/foldersMixin'
  import _ from 'lodash'

  export default {
    name: 'Content',
    mixins: [foldersMixin],
    data () {
      return {
        selectedProperty: 'name', // The property to sort the items by
        reversed: false,           // True if the order is reversed
      }
    },

    methods: {
      selectProperty (property) {
        if (this.selectedProperty === property)
          this.reversed = !this.reversed
        else
          this.selectedProperty = property
      },
    },

    computed: {
      sortedElements: function () {
        const order = this.reversed ? 'desc' : 'asc'
        return _.orderBy(this.currentFolder.children,
                         child => child[this.selectedProperty].toLowerCase(),
                         order)
      },
    },
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
