import axios from 'axios'
import urljoin from 'url-join'

import helper from '../helper'

const API_URL = 'http://localhost:3000/files'

function updateFolderRecursive (state, paths) {
  console.log('Updating', paths)
  if (!paths.length)
    return null

  let path_ = paths[0]
  let folder = helper.getSubFolder(state.folders, path_)
  if (folder.type === 'file')
    return null

  paths.shift()

  // If the folder is already fetched, don't update it
  if (folder.children) { return updateFolderRecursive(state, paths) }

  const url = urljoin(API_URL, path_)

  return axios.get(url).then(response => {
    folder.children = response.data
    updateFolderRecursive(state, paths)
  }).catch(error => {
    console.error(error)
  })
}

export default {
  updateFolders (state, path_) {
    let paths = helper.getSubPaths(path_)
    return updateFolderRecursive(state, paths)
  },
}
