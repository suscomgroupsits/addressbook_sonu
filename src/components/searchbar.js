
import React, { Component } from 'react'


class Searchbar extends Component {
  state = {
    query: '',
  }
  handleInputChange = () => {
    this.setState({
      query: this.Searchbar.value
    })
  }

  render() {
    return (
      <form>
        <input
        
          placeholder=" "
          ref={input => this.Searchbar = input}
          onChange={this.handleInputChange}
        />
        <button>Search from here</button>
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Searchbar

