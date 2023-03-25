import {Component} from 'react'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    inputText: '',
    textOutput: '',
    onSave: false,
  }

  findText = () => {
    const {inputText} = this.state
    this.setState({
      textOutput: inputText,
      onSave: true,
    })
  }

  editText = () => {
    this.setState({
      onSave: false,
    })
  }

  textUpdate = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    const {inputText, textOutput, onSave} = this.state

    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {onSave === false ? (
              <div className="change-container">
                <input
                  type="text"
                  value={inputText}
                  onChange={this.textUpdate}
                  className="text-style"
                  placeholder=""
                />{' '}
                <button
                  className="button-style"
                  onClick={this.findText}
                  type="button"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="change-container">
                <p className="para-style">{textOutput}</p>{' '}
                <button
                  className="button-style"
                  onClick={this.editText}
                  type="button"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
