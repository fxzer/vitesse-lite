export class View {
  count: number = 1
  render() {
    Promise.resolve(1).then(() => {
      this.count = 2
    }).then(() => { this.count = 3 })
  }
}
