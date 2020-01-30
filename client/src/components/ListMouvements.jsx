import React, { Component } from 'react';
import './listMouvements.css';
import axios from 'axios';

class ListMouvements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouvements: [],
      selectedFile: null
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/mouvement`)
      .then(res => res.data)
      // console.log(res.data)
      .then(response =>
        this.setState({
          mouvements: response
        }))
      .catch(e => {
        console.error(e);
      });
  }
  // upload files-images.
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post("/upload", data, {
    })
      .then(res => {
        console.log(res.statusText)
      })
  }

  render() {
    const { mouvements } = this.state;
    return (
      <div>
        <h1>
          Mouvements
        </h1>
        <div className="mouvements">
          {mouvements.map(mouvement =>
            <div className="amouvement" key={mouvement.id}>
              {mouvement.image}
              {mouvement.nom}
            </div>
          )}
        </div>
        {/* upload files-images */}
        <div className='uploadedFiles'>
            <input type="file" name="file" onChange={this.onChangeHandler} />
            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
          </div>
      </div>
    );
  }
}
export default ListMouvements;
