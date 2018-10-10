<template>
  <nav id="sidebar">
    <ul>
      <li>
            <span class="sidebar-folder selected">
                <span class="right-chevron"></span>
                <span class="folder-icon"></span>
                <a href="">Documents</a>
            </span>
        <ul>
          <li>
                    <span class="sidebar-folder">
                        <span class="right-chevron"></span>
                        <a href="">Folder</a>
                    </span>
          </li>
          <li>
                    <span class="sidebar-folder selected">
                        <span class="right-chevron"></span>
                        <a href="">Expanded Folder</a>
                    </span>
            <ul>
              <li>
                            <span class="sidebar-folder">
                                <span class="right-chevron"></span>
                                <a href="">Folder</a>
                            </span>
              </li>
            </ul>
          </li>
          <li>
                    <span class="sidebar-folder">
                        <span class="right-chevron"></span>
                        <a href="">Folder</a>
                    </span>
          </li>
          <li>
                    <span class="sidebar-folder">
                        <span class="right-chevron"></span>
                        <a href="">Folder</a>
                    </span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Sidebar',
  }
</script>

<style scoped lang="less">
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
