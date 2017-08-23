import React, { Component } from 'react'

class GetImageButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
            <input type="submit" value="Get Rover Image" />
          </form>
      </div>
    )
  }
}

export default GetImageButton
