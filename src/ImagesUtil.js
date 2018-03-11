const resize = async (file, callback) => {
  return new Promise((resolve, reject) => {
    var reader = new window.FileReader()
    reader.onloadend = function () {
      var tempImg = new window.Image()
      tempImg.src = reader.result
      tempImg.onload = function () {
        var MAX_WIDTH = 400
        var MAX_HEIGHT = 300
        var tempW = tempImg.width
        var tempH = tempImg.height
        if (tempW > tempH) {
          if (tempW > MAX_WIDTH) {
            tempH *= MAX_WIDTH / tempW
            tempW = MAX_WIDTH
          }
        } else {
          if (tempH > MAX_HEIGHT) {
            tempW *= MAX_HEIGHT / tempH
            tempH = MAX_HEIGHT
          }
        }

        var canvas = document.createElement('canvas')
        canvas.width = tempW
        canvas.height = tempH
        var ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0, tempW, tempH)
        var dataURL = canvas.toDataURL('image/jpeg')
        resolve(dataURL)
      }
    }
    reader.readAsDataURL(file)
  })
}

export { resize }
