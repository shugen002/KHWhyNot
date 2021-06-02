<template>
  <div class="KHWhyNot">
    <link v-if="CustomCss" rel="stylesheet" :href="CustomCss">
    <Panel v-if="displayPanel" v-on:close="closePanel"/>
  </div>
</template>
<script>
import Panel from './components/Panel.vue'
export default {
  components: { Panel },
  data: function () {
    return {
      CustomCss: null,
      displayPanel: true
    }
  },
  created () {
    this.getBingImage().then((e) => {
      this.updateBackgroundImage(e)
    })
    this.getLatestCSS().then((e) => {
      this.CustomCss = e
    })
  },
  methods: {
    async getBingImage () {
      return fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN').then((e) => {
        return e.json().then((e) => {
          if (e.images && e.images.length) {
            return `https://cn.bing.com${e.images[0].url}`
          } else {
            throw new Error(e)
          }
        })
      })
    },
    async getLatestCSS () {
      try {
        const latest = await fetch('https://www.kaiheila.cn/api/v2/messages/6134937423472467').then((e) => {
          return e.json()
        }).then((e) => {
          return e.filter((e) => { return e.type === 4 }).pop().attachments.url
        })
        return latest
      } catch (error) {
        console.log(error)
        return 'https://img.kaiheila.cn/attachments/2021-05/01/608d13a1f205c.css'
      }
    },
    async updateBackgroundImage (url) {
      document.body.style.backgroundImage = `url(${await this.getBingImage()})`
    },
    async openPanel () {
      this.displayPanel = true
    },
    async closePanel() {
      this.displayPanel = false
    }
  }
}
</script>
<style scoped>
.KHWhyNot {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
}
</style>
<style>
.win-button.skin {
  background-image: url(https://img.kaiheila.cn/attachments/2021-05/01/608d62355333b.svg);
  background-repeat: no-repeat;
  background-position: center;
}
</style>
