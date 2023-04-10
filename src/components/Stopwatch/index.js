// Write your code here
import {Component} from 'react'
import './index.css'

const initialClock = {
  timerMinutes: 0,
  timerSeconds: 0,
  isTimerRunning: false,
}
class Stopwatch extends Component {
  state = initialClock

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalTimer)

  resetTimer = () => {
    this.clearTimerInterval()
    this.setState(initialClock)
  }

  stopTimer = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false})
  }

  setIncrementTimerSeconds = () => {
    const {isTimerRunning} = this.state
    console.log(isTimerRunning)
    this.intervalTimer = setInterval(() => {
      this.setState(prevState => ({timerSeconds: prevState.timerSeconds + 1}))
    }, 1000)
  }

  startTimer = () => {
    this.setIncrementTimerSeconds()
    this.setState({isTimerRunning: true})
  }

  getTimerSectionRunning = () => {
    const {timerMinutes, timerSeconds} = this.state
    const timerRemainingSeconds = timerMinutes * 60 + timerSeconds

    const minute = Math.floor(timerRemainingSeconds / 60)
    const seconds = Math.floor(timerRemainingSeconds % 60)
    const displayMinute = minute > 9 ? minute : `0${minute}`
    const displaySecond = seconds > 9 ? seconds : `0${seconds}`

    return `${displayMinute}:${displaySecond}`
  }

  render() {
    const {isTimerRunning, timerSeconds} = this.state
    console.log(isTimerRunning, timerSeconds)
    return (
      <div className="bg-container">
        <div className="bg-image">
          <div className="clock-section">
            <h1>Stopwatch</h1>
            <div className="card-clock">
              <div className="header-clock">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <p>Timer</p>
              </div>
              <h1>{this.getTimerSectionRunning()}</h1>
              <div className="buttons">
                <button
                  type="button"
                  className="btn-1"
                  onClick={this.startTimer}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="btn-2"
                  onClick={this.stopTimer}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="btn-3"
                  onClick={this.resetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
