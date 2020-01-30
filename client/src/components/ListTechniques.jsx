import React, { Component } from 'react';
import './ListTechniques.css';
import axios from 'axios';

class ListTechniques extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      techniques: [],
      activeTechniqueFilter: 'Techniques'
     };
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      activeTextureFilter: e.target.value
    });
  }

  componentDidMount() {
    axios
    .get('/api/technique')
    .then(res => res.data)
    .then(response =>
      this.setState({
        techniques: response
      }))
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    const { techniques, activeTechniqueFilter } = this.state;
    return (
      <div>
        <select value= {activeTechniqueFilter} onChange = {this.handChange}>
          <option className= "oneTechn" value = ""> Techniques </option>
          {techniques.map((technique, id) => (
            <option key = {id} value = {technique.type} >
              {technique.type}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ListTechniques;