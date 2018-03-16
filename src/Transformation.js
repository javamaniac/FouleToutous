import fireb from './fireb'
import { resize2 } from './ImagesUtil.js'

const transform = async () => {
  console.log('traitement...')
  const ref = fireb.database().ref('toutous')
  ref.once('value').then(async snapshot => {
    const toutous = snapshot.val()
    for (const id in toutous) {
      const toutou = toutous[id]
      // console.log(toutous[id])
      await traitement(id, toutou)
    }
    console.log('traitement terminé')
  })

//   return new Promise((resolve, reject) => {
//     // console.log(`transformer ${toutou.nom} (${toutouKey})`)
//     onConvert(toutouKey, toutou)
//     console.log(toutou.nom, 'out')
//     setTimeout(() => {
//       console.log(toutou.nom, 'in')
//       // resolve()
//     }, 2000)
//   })
}

const traitement = (id, toutou) => {
  return new Promise((resolve, reject) => {
    console.log(`traitement : [${id}] ${toutou.nom}...`)
    setTimeout(() => {
      convert(id, toutou)

      resolve()
    }, 1000)
  })
}

const convert = (id, toutou) => {
  // console.log(toutou)
  const imageSrc = toutou.imageSrc
  // console.log(imageSrc.length)
  if (!toutou.imageSrcSmall) {
    console.log(`\n\nconversion ${toutou.nom} (${id})...`)
    const imageSrcSmall = resize2({
      imageSrc,
      maxWidth: 32,
      maxHeight: 32
    })

    if (id === 'ddd') {
      const ref = `toutous/${id}/`
      var updates = {
        '/imageSrcSmall': imageSrcSmall
      }
      fireb.database().ref(ref).set({ '/imageSrcSmall': imageSrcSmall })
      // fireb.database().ref(ref).update(updates)
      console.log(`fireb.database().ref(ref).update({ imageSrcSmall: imageSrcSmall })`, imageSrcSmall)
    }
    // const ref2 = `toutousImages/${id}`
    // fireb.database().ref(ref2).update({ imageSrc: imageSrc })
    // console.log(`fireb.database().ref(ref2).update({ imageSrc: imageSrc })`)
  } else {
    // console.log(`${toutou.nom} existe déjà`)
  }
}

export { transform }

console.log('transformation...')
