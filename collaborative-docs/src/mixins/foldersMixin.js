import { mapState } from 'vuex'
import helper from '../helper'

export default {
  computed: mapState({
    formatedPath () {
      return decodeURI(this.$route.path);
    },

    folders: state => state.folders,

    currentFolder: function (state) {
      console.log('FORMATEDPATH:', this.formatedPath)
      return helper.getSubFolder(state.folders, this.formatedPath)
    },

    currentPath () {
      const initialFolder = { name: 'Documents', path: '', url: '/#/' }

      if (this.formatedPath === '/') {
        return [initialFolder]
      }

      console.log('FORMATEDPATH:', this.formatedPath)
      let fullPath = this.formatedPath.split('/')
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
