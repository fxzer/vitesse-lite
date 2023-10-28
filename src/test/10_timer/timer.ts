export function executeAfterTwoHours(func: Function) {
  setTimeout(func, 1000 * 60 * 60 * 2) // 2 hours
}

export function executeEveryMinute(func: Function) {
  setInterval(func, 1000 * 60) // 1 minute
}

export function sayHi() {
  setInterval(() => {
    console.log('hi')
  }, 300)
}

export function delay(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok')
    }, time)
  })
}
