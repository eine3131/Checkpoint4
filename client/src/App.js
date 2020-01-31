import React, { Component } from 'react';
import './App.css';
// import Histoire from '/components/Histoire';
import MvtContainer from './components/MvtContainer';
import TabSelector from './components/TabSelector';

const Histoire = () => <p>This is the  component!</p>;
const PageAdmin = () => <p> Formulaire ajout de ListMouvements </p>
const Error = () => <p>Il y a <strong>erreur</strong>!</p>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 'histoire'
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.getTabContent = this.getTabContent.bind(this);
  }

  getTabContent() {
    switch (this.state.activeId) {
      case 'histoire':
        return <Histoire />;
      case 'techniques':
        return <MvtContainer />;
      case 'admin':
        return <PageAdmin />;
      default:
        return <Error />;
    }
  }

  handleChangeTab(event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  render() {
    return (
      <div className="App">
          <TabSelector activeId={this.state.activeId} handleChangeTab={this.handleChangeTab} />
          <div className="App-content">
            {
              this.getTabContent()
            }
          </div>
      </div>
    );
  }
}

export default App;