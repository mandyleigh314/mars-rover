import React, { Component } from 'react'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = 'bwoccDN4gdr0Tf3CPdwEpGAyXamoiXUEUV5Bxy64'

class GetImageForm extends Component {
//   constructor(props){
//     super(props)
//
//     this.handleRover = this.handleRover.bind(this)
//     this.handleCamera = this.handleCamera.bind(this)
//     this.handleSol = this.handleSol.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.fetchRoverImage = this.fetchRoverImage.bind(this)
//
//   this.state = {
//   rover: "Curiosity",
//   camera: "FHAZ",
//   images: [],
//   sol: "",
// }
// }
state = {
  rover: "Curiosity",
  camera: "FHAZ",
  photos: [],
  sol: ""
}

handleRover = (e) => {
  this.setState({rover: e.target.value})
}
handleCamera = (e) => {
  this.setState({camera: e.target.value})
}
handleSol = (e) => {
  this.setState({sol: e.target.value})
}
fetchRoverImage = () => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${API_KEY}`
  fetch(url).then(res => res.json()).then(({ photos }) => {
      this.setState({ photos: photos })
      console.log(this.state.photos)
    }).catch((error) => {
        console.log("Error with Fetching : ", error)
  })
}
handleSubmit = (e) => {
  e.preventDefault()
  this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol})
  this.fetchRoverImage()
}

// componentDidMount() {
//   fetch(imageUrl).then(res => res.json()).then(({ photos }) => {
//     this.setState({ photos })
//   }).catch((error) => {
//       console.log("Error with Fetching : ", error)
// })
// }


  render() {
    return (
    <div>
      <label htmlFor="rover">Rover</label>
      <select onChange={this.handleRover} id="rover" value={this.state.value}>
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirt</option>
      </select>
      <label htmlFor="camera">Camera Type</label>
      <select onChange={this.handleCamera} id="rover" value={this.state.value}>
        <option value="fhaz">FHAZ (Front Hazard)</option>
        <option value="rhaz">RHAZ (Rear Hazard)</option>
        <option value="navcam">NAVCAM (Navigation Cam)</option>
      </select>
      <label htmlFor="sol">Martian Sol: 1000-2000</label>
      <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
      <GetImageButton handleSubmit={this.handleSubmit}/>
      <ImageDisplay photos={this.state.photos} />
      </div>
    );
  }
}

export default GetImageForm
