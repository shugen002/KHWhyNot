import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
root.id = 'KHWhyNot'
document.body.appendChild(root)

const KHWhynot = new Vue({
  render: (h) => h(App)
}).$mount('#KHWhyNot')

function getWindowController() {
  const a = document.body.getElementsByClassName('win-controler')
  if (a && a.length > 0) {
    return a[0]
  } else {
    return null
  }
}

const WindowTitleBarLoaded = new Promise((resolve, reject) => {
  if (getWindowController()) {
    resolve()
  } else {
    setTimeout((e) => {
      if (getWindowController) {
        resolve()
      } else {
        reject(new Error('No Window Title Bar ?'))
      }
    }, 10000)
  }
})
WindowTitleBarLoaded.then(() => {
  const controller = getWindowController()
  const skinButton = document.createElement('div')
  skinButton.classList.add('win-button', 'skin')
  controller.insertBefore(skinButton, controller.firstChild)
  skinButton.addEventListener('click', () => {
    KHWhynot.$children[0].openPanel()
  })
}).catch((e) => {
  console.error(e)
})
