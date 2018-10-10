import path from 'path'

export default {
  /**
   * Return the decomposed direct paths to a folder
   * ex: getSubPaths('test/directory/file') => ['test', 'test/directory', 'test/directory/file']
   * @param path_ the path to split
   */
  getSubPaths (path_) {
    let paths = ['']
    for (const subFolderName of path_.substr(1).split('/')) {
      if (subFolderName === '')
        continue

      let newPath = path.join(paths[paths.length - 1], subFolderName)
      paths.push(newPath)
    }

    return paths
  },

  /**
   * Return the subfolder located at the given path
   * @param folders the folders to look into
   * @param path_ the path to look for
   * @returns the wanted folder
   */
  getSubFolder (folders, path_) {
    let subFolder = folders
    let names = path_.split('/')

    for (const subFolderName of names) {
      if (subFolderName === '')
        continue

      let childrens = subFolder.childrens
      if (childrens === null) {
        return null
      }
      subFolder = childrens.filter(child => child.name === subFolderName)[0]
    }

    return subFolder
  }
}
