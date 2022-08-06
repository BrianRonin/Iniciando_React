import { func, string } from 'prop-types'
import { Component } from 'react'
import './styles.css'
export class SearchBar extends Component {
  render() {
    const { type, value, onChange, placeholder } = this.props
    return (
      <div>
        <input
          type={type}
          defaultValue={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  type: string,
  value: string,
  onChange: func,
  placeholder: string,
}
