function check() {
  const val = parseInt(document.getElementById('num').value);
  const res = document.getElementById('result');

  if (isNaN(val)) {
    res.className = '';
    res.textContent = 'Enter a valid number.';
    return;
  }

  const even = val % 2 === 0;
  res.className = even ? 'even' : 'odd';
  res.textContent = `${val} is ${even ? 'Even' : 'Odd'}.`;
}

document.getElementById('num').addEventListener('keydown', e => {
  if (e.key === 'Enter') check();
});