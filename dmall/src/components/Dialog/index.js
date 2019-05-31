import Dialog from './dialog'

export default {
  install (Vue) {
    Vue.component('Dialog', Dialog)
    Vue.prototype.$alert = (str) => {
      return new Promise((resolve, reject) => {
        const DialogClass = Vue.extend(Dialog)
        const DialogComponent = new DialogClass({
          propsData: {
            title: str,
            visible: true,
            noCancel: true
          },
          created () {
            this.$on('update:visible', (visible) => {
              this.visible = visible
              this.$destroy()
            })
            this.$on('success', () => {
              resolve()
              this.$destroy()
            })
          },
          destroyed () {
            document.body.removeChild(this.$el)
          }
        })
        DialogComponent.$mount()
        document.body.appendChild(DialogComponent.$el)
      })
    }
    Vue.prototype.$confirm = (str) => {
      return new Promise((resolve, reject) => {
        const DialogClass = Vue.extend(Dialog)
        const DialogComponent = new DialogClass({
          propsData: {
            title: str,
            visible: true
          },
          created () {
            this.$on('update:visible', (visible) => {
              this.visible = visible
              this.$destroy()
            })
            this.$on('success', () => {
              resolve()
              this.$destroy()
            })
            this.$on('cancel', () => {
              // reject()
            })
          },
          destroyed () {
            document.body.removeChild(this.$el)
          }
        })
        DialogComponent.$mount()
        document.body.appendChild(DialogComponent.$el)
      })
    }
  }
}
