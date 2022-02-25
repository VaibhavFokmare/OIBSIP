const changeDeg = () =>{
  const fv = document.getElementById('fd').value;

  // T(°C) = (T(°F) - 32) × 5/9

  let newcv = (fv - 32) * 5/9;

  console.log(newcv);

  document.getElementById('cd').value = newcv+"* cel";
}