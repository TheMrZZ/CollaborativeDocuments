import { mapState } from 'vuex'
import helper from '../helper'

export default {
  computed: mapState({
    folders: state => state.folders,

    currentFolder: function (state) {
      return helper.getSubFolder(state.folders, this.$route.path)
    },

    currentPath () {
      const initialFolder = { name: 'Documents', path: '', url: '/#/' }

      if (this.$route.path === '/') {
        return [initialFolder]
      }

      let fullPath = this.$route.path.split('/')
      let currentPath = '/#/'

      fullPath = fullPath.
        filter(folder => folder !== '').
        map(function (folder) {
          currentPath += folder + '/'
          return { name: folder, path: currentPath, url: currentPath }
        })

      fullPath.unshift(initialFolder)
      return fullPath
    },
  }),
}
