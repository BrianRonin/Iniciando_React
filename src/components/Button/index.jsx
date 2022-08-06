import p from 'prop-types'
import { Component } from 'react'
import './styles.css'

export class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props
    return (
      <>
        <button onClick={onClick} className="Btn" disabled={disabled}>
          {text}
        </button>
      </>
    )
  }
}

Button.propTypes = {
  text: p.string.isRequired,
  onClick: p.func,
  disabled: p.bool,
}
