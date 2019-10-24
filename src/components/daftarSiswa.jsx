import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSiswa } from '../actions';

class DaftarSiswa extends Component {
  renderList() {
    return this.props.siswa.map((siswa) => {
      return (
        <div className="item" key={siswa.nama}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSiswa(siswa)}>
              Select
            </button>
          </div>
          <div className="content">{siswa.nama}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { siswa: state.siswa };
};

export default connect(
  mapStateToProps,
  { selectSiswa }
)(DaftarSiswa);
