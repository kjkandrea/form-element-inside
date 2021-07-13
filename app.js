const app = {
  el: {
    form: document.getElementById('form')
  },
  init() {
    this.bindEvent()
  },
  bindEvent() {
    this.el.form.addEventListener('submit', this.onSubmit)
  },
  onSubmit(event) {
    event.preventDefault()
    console.log(event)
  }
}

app.init()