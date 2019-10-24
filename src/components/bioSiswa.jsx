import React from 'react';
import { connect } from 'react-redux';

const BioSiswa = ({ siswa }) => {
  if (!siswa) {
    return <h3>Pilih Siswa</h3>;
  }
  return (
    <div>
      <h3>Biodata Siswa :</h3>
      <p>
        Nama : {siswa.nama}
        <br />
        Kelas : {siswa.kelas}
        <br />
        Umur : {siswa.umur}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { siswa: state.selectedSiswa };
};

export default connect(mapStateToProps)(BioSiswa);
