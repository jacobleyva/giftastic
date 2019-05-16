document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif')


document.querySelector('#sbmt').addEventListener('click', e => {
  e.preventDefault()
  if (document.querySelector('#new').value === '') {
      null
  } else {
  anime.push(document.querySelector('#new').value)
  document.getElementById("btn").innerHTML = ''
  document.querySelector('#new').value = ''
  add()
  }
})

function add() {
  for (var i = 0; i < anime.length; i++) {
      document.getElementById("btn").innerHTML += `<button class="anime" data-anime="${anime[i]}">` + anime[i] + `</button>`
  }
}
let toggle = false

document.addEventListener('click', ({ target }) => {
  if (target.className === 'anime') {
      let { anime } = target.dataset
      fetch(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${anime}&limit=9`)
      .then(r => r.json())
      .then(r => {
          document.querySelector('#gif').innerHTML = ''
          for (let i = 0; i < 10; i++) {
          let still = r.data[i].images.fixed_height_still.url
          let animated = r.data[i].images.fixed_height.url
          let boxElem = document.createElement("div")
          boxElem.style.display = 'inline-block'
          boxElem.setAttribute('id', 'rating')
          boxElem.innerHTML = `
          <img id="gif" src="${still}" data-still="${still}" data-animated="${animated}">
          `
          document.querySelector('#gif').append(boxElem)
       }   
    })
  .catch(e => console.error(e))
}
})

document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4 anime') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
document.addEventListener('click', e => {
  if (e.target.className === 'waves-effect waves-light btn col s4') {
    let anime = e.target.dataset.eva
     return fetch(`https://api.giphy.com/v1/gifs/random?&limit=9&api_key=dc6zaTOxFJmzC&tag=${anime}&limit=9`)
    .then(r => r.json())
    .then(r => {
      let gif = r.data.images.fixed_height.url
      document.querySelector('#gif').innerHTML = `
      <img src="${gif}" alt="${anime}">`
    })
    .catch(e => console.log(e))
  } else if (e.target.id === 'gif') {

  }
})
})
