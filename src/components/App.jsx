import React, { Component } from 'react';
import DaftarSiswa from './daftarSiswa';
import BioSiswa from './bioSiswa';

class App extends Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <DaftarSiswa />
          </div>
          <div className="column eight wide">
            <BioSiswa />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
