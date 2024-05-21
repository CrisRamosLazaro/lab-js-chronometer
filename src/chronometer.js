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
    }, 1000)
  }

  getMinutes() {
    let seconds = this.currentTime
    let minutes = Math.floor(seconds / 60)
    return minutes
  }


  getSeconds() {
    let totalSeconds = this.currentTime
    return totalSeconds % 60
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    let paddedValue = `0${stringValue}`
    if (stringValue.length === 1) {
      return paddedValue
    } else {
      return stringValue
    }
    // return paddedValue.slice(-2) // ---> or this
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
    const seconds = this.getSeconds()
    const ss = this.computeTwoDigitNumber(seconds)

    return `${mm}:${ss}`
  }
}