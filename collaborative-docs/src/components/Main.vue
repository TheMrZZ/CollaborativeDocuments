<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <Content></Content>
  </div>
</template>

<script>
  import Content from './Content'
  import Sidebar from './Sidebar'
  import Header from './Header'

  export default {
    name: 'Main',
    components: { Header, Sidebar, Content },

    methods: {
      updateFolders: function () {
        this.$store.commit('updateFolders', this.$route.path)
      },
    },

    beforeMount () {
      this.updateFolders()
    },

    watch: {
      '$route': 'updateFolders',
    },
  }
</script>

<style lang="less">
  @import "../stylesheets/_vars";
  @import "../stylesheets/_media";
  @import "../stylesheets/_icons";

  #app {
    display: grid;
    grid-template-areas: "header header" "sidebar main";
    grid-template-columns: fit-content(50%);
    grid-template-rows: fit-content(10%);

    background-color: @background-color;
    color: @font-color;
    font-size: 18px;

    @media @phone {
      font-size: 15px;
      grid-template-areas: "header header" "main main";
    }

    height: 100vh;
    width: 100vw;
  }

  // Blue color on link hover
  a:hover {
    color: @select-color;
    transition-duration: 0.2s;
    &:before {
      background-color: @select-color;
    }
  }
</style>
