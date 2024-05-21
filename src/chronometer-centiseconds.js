// 1 centisecond = 10 milliseconds
// 1 second = 100 centiseconds = 1000 milliseconds

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    let centiseconds = this.currentTime
    let minutes = Math.floor(centiseconds / 6000)
    return minutes
  }

  getSeconds() {
    let totalSeconds = this.currentTime / 100
    return Math.floor(totalSeconds % 60)
  }

  getCentiseconds() {
    let totalCentiseconds = this.currentTime
    return totalCentiseconds % 100
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    let paddedValue = `0${stringValue}`

    return paddedValue.slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes()
    const mm = this.computeTwoDigitNumber(minutes)
    console.log("minutes", minutes, mm)
    const seconds = this.getSeconds()
    const ss = this.computeTwoDigitNumber(seconds)
    const centiseconds = this.getCentiseconds()
    const cs = this.computeTwoDigitNumber(centiseconds)

    return `${mm}:${ss}.${cs}`
  }
}