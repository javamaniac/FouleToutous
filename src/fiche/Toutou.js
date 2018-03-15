import React from 'react'
import ToutouImage from '../ToutouImage.js'
import musique from '../musique/ambiance.mp3'
import { resize } from '../ImagesUtil.js'
import '../App.css'
import fireb from '../fireb'

class FicheToutou extends React.Component {
  constructor (props) {
    super(props)
    this.onUpload = this.onUpload.bind(this)
    this.setGenre = this.setGenre.bind(this)
    this.setValue = this.setValue.bind(this)
    this.setChecked = this.setChecked.bind(this)
  }

  componentWillReceiveProps (nextProps) {
  }

  async onUpload (e) {
    // FIXME loading
    const dataUrl = await resize(e.target.files[0])
    const ref = `toutous/${window.history.state.key}`
    fireb.database().ref(ref).update({ imageSrc: dataUrl })
    console.log('update imageSrc')
  }

  retourAccueil () {
    window.history.back()
    window.history.replaceState({}, '', '/')
  }

  render () {
    const toutou = this.props.toutou
    const age = this.getAge(toutou.naissance)

    return (
      <div className='Fiche'>
        <header className='Fiche-header'>
          <button
            id='back'
            onClick={this.retourAccueil}
                  >◀</button>
          <input
            id='nom'
            type='text'
            defaultValue={toutou.nom}
            onBlur={this.setValue}
            />
        </header>

        <label htmlFor='file-input'>
          <ToutouImage gros toutou={toutou} />
        </label>
        <input type='file' accept='image/*' id='file-input'
          onChange={this.onUpload} />

        <div>
          <div className='infos'>
            <div className='type'>
              <label htmlFor='nom'>Genre</label>
              <div >
                <button
                  id='male'
                  genre='male'
                  value='male'
                  className={(toutou.genre && toutou.genre === 'male' ? 'select' : 'noSelect')}
                  onClick={this.setGenre}>♂</button>
                <button
                  id='femelle'
                  className={(toutou.genre && toutou.genre === 'femelle' ? 'select' : 'noSelect')}
                  onClick={this.setGenre}>♀</button>
              </div>
            </div>

            <div className='type'>
              <label htmlFor='naissance'>Naissance</label>
              <input
                id='naissance'
                type='date'
                placeholder='jj/mm/aaaa'
                onChange={this.setValue}
                defaultValue={toutou.naissance}
                 />
            </div>
            <div className='type'>
              <label htmlFor='age'>Âge</label>
              <div id='age' >{age}</div>
            </div>

            <div className='type'>
              <label htmlFor='delegue'>Délégué</label>
              <div>
                <input
                  id='delegue'
                  type='checkbox'
                  defaultValue={toutou.delegue}
                  onChange={this.setChecked} />
              </div>
            </div>

            <div className='type'>
              <label htmlFor='equipe'>Équipe</label>
              <select
                id='equipe'
                defaultValue={toutou.equipe}
                onChange={this.setValue}>
                <option value=''>Sans équipe</option>
                <option value='11'>Équipe 1 - Jelly beans</option>
                <option value='12'>Équipe 2 - </option>
                <option value='13'>Équipe 3 - </option>
                <option value='14'>Équipe 4 - </option>
                <option value='15'>Équipe 5 - </option>
                <option value='16'>Équipe 6 - </option>
                <option value='17'>Équipe 7 - Sedna</option>
                <option value='18'>Équipe 8 - </option>
                <option value='19'>Équipe 9 - </option>
              </select>
            </div>

            <div className='type'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                onBlur={this.setValue}
                defaultValue={toutou.description}
                 />
            </div>

            <div className='type'>
              <label htmlFor='habiletes'>Talents</label>
              <textarea
                id='habiletes'
                onBlur={this.setValue}
                defaultValue={toutou.habiletes}
                 />
            </div>

            <div className='type'>
              <label htmlFor='faiblesses'>Faiblesses</label>
              <textarea
                id='faiblesses'
                onBlur={this.setValue}
                defaultValue={toutou.faiblesses}
                 />
            </div>
          </div>
          <button onClick={this.supprimer.bind(this, toutou)}>✖</button>
        </div>

        <audio autoPlay loop controls>
          <source src={musique} type='audio/mpeg' />
        </audio>
      </div>
    )
  }

  setValue (ev) {
    const champ = ev.target.id
    const ref = `toutous/${window.history.state.key}`
    const nouvelleValeur = {}
    nouvelleValeur[champ] = ev.target.value

    if (champ === 'naissance') {
      document.querySelector('#age').innerText = this.getAge(nouvelleValeur.naissance)
    }

    fireb.database().ref(ref).update(nouvelleValeur)
    console.log('update ', champ, ev.target.value)
  }

  setChecked (ev) {
    const champ = ev.target.id
    const ref = `toutous/${window.history.state.key}`
    const nouvelleValeur = {}
    nouvelleValeur[champ] = ev.target.checked
    fireb.database().ref(ref).update(nouvelleValeur)
    console.log('update ', champ, ev.target.checked)
  }

  getAge (naissance) {
    if (naissance) {
      const auj = new Date()
      return Math.floor((auj - new Date(naissance)) / 1000 / 60 / 60 / 24 / 352)
    }
    return '?'
  }

  setGenre (ev) {
    const genre = ev.target.id
    const ref = `toutous/${window.history.state.key}`
    fireb.database().ref(ref).update({ genre: genre })
    console.log('update genre', genre)
  }

  supprimer (toutou) {
    window.fireb = fireb
    if (window.confirm('Es-tu sûr de vouloir effacer ' + this.props.toutou.nom + '?')) {
      fireb.database().ref('toutous/' + window.history.state.key).set(null, (resolve, reject) => {
        document.location.replace('/')
      })
    }
  }
}

export default FicheToutou
