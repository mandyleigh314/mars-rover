import React, { Component } from 'react'

class ImageDisplay extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let marsimg = this.props.photos.map(photo => {
      return (
      <div className="col-sm-6" key={photo.id}>
          <ul className="list-group">
            <li className="list-group-item">
              <img src={photo.img_src} />
            </li>
          </ul>
        </div>
    )})
    return (
      <div>
    {marsimg}
      </div>
    )
  }
}

export default ImageDisplay
