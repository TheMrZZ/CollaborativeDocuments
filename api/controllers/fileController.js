const fs = require('fs')
const path = require('path')

const filesPath = path.join(__dirname, '..', 'files')

function isDirectory (objectPath) {
  return fs.lstatSync(objectPath).isDirectory()
}

function getFolderContent (dirPath, callback) {
  fs.readdir(dirPath, (err, subFiles) => {
    if (err)
      return callback(err)

    subFiles = subFiles.map(function (subFile) {
      const realPath = path.join(dirPath, subFile)
      let type
      if (isDirectory(realPath))
        type = 'dir'
      else
        type = 'file'

      return {
        name: subFile,
        type: type,
        childrens: null
      }
    })

    callback(null, subFiles)
  })
}

const fileController = {
  root (req, res) {
    // Returns the root folders
    getFolderContent(filesPath, (err, subFiles) => {
      if (err)
        res.status(404)
      else
        res.json(subFiles)
    })
  },

  byPath (req, res) {
    const inputPath = req.params.path
    const finalPath = path.join(filesPath, inputPath)

    if (!fs.existsSync(finalPath) || !finalPath.startsWith(filesPath)) {
      return res.status(404)
    }

    // If the path is an object, serve it
    if (!isDirectory(finalPath)) {
      return res.status(200).sendFile(finalPath)
    }

    getFolderContent(finalPath, (err, subFiles) => {
      if (err)
        res.status(404)
      else
        res.status(200).json(subFiles)
    })
  },
}

module.exports = fileController