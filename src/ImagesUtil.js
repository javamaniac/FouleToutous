const resize = async ({ file, callback, maxWidth = 400, maxHeight = 300 }) => {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.onloadend = function () {
      const imageSrc = reader.result
      const tempImg = new window.Image()
      tempImg.src = imageSrc
      tempImg.onload = function () {
        let tempW = tempImg.width
        let tempH = tempImg.height
        if (tempW > tempH) {
          if (tempW > maxWidth) {
            tempH *= maxWidth / tempW
            tempW = maxWidth
          }
        } else {
          if (tempH > maxHeight) {
            tempW *= maxHeight / tempH
            tempH = maxHeight
          }
        }

        const canvas = document.createElement('canvas')
        canvas.width = tempW
        canvas.height = tempH
        const ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0, tempW, tempH)
        const dataURL = canvas.toDataURL('image/jpeg')

        resolve(dataURL)
      }
    }
    reader.readAsDataURL(file)
  })
}

const resize2 = async ({ imageSrc, callback, maxWidth = 400, maxHeight = 300 }) => {
  return new Promise((resolve, reject) => {
    const tempImg = new window.Image()
    tempImg.src = imageSrc
    tempImg.onload = function () {
      let tempW = tempImg.width
      let tempH = tempImg.height
      if (tempW > tempH) {
        if (tempW > maxWidth) {
          tempH *= maxWidth / tempW
          tempW = maxWidth
        }
      } else {
        if (tempH > maxHeight) {
          tempW *= maxHeight / tempH
          tempH = maxHeight
        }
      }

      const canvas = document.createElement('canvas')
      canvas.width = tempW
      canvas.height = tempH
      const ctx = canvas.getContext('2d')
      ctx.drawImage(this, 0, 0, tempW, tempH)
      const dataURL = canvas.toDataURL('image/jpeg')

      resolve(dataURL)
    }
  })
}

export { resize, resize2 }
