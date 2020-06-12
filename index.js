calculateAgeOfCat = () => {
  let age = Number(document.getElementById("input-umur").value);
  let convertedAge;
  if (age === 1) {
    convertedAge = 15;
  } else if (age === 2) {
    convertedAge = 24;
  } else if (age >= 3) {
    convertedAge = 24 + (age - 2) * 4;
  }
  document.getElementById("hasil-konversi").innerHTML = convertedAge;
};
