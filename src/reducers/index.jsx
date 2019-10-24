import { combineReducers } from 'redux';

const siswaReducer = () => {
  return [
    { nama: 'Dimas', kelas: 'V', umur: 12 },
    { nama: 'Yudhis', kelas: 'VI', umur: 13 },
    { nama: 'Tira', kelas: 'IV', umur: 11 },
    { nama: 'Darso', kelas: 'V', umur: 12 },
    { nama: 'Dul Kempit', kelas: 'IV', umur: 10 }
  ];
};

const selectedSiswaReducer = (selectedSiswa = null, action) => {
  if (action.type === 'SISWA_SELECTED') {
    return action.payload;
  }
  return selectedSiswa;
};

export default combineReducers({
  siswa: siswaReducer,
  selectedSiswa: selectedSiswaReducer
});
