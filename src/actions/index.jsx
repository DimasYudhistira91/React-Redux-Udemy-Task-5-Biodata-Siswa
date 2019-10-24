export const selectSiswa = (siswa) => {
  return {
    type: 'SISWA_SELECTED',
    nama: siswa
  };
};
