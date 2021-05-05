const text = document.getElementById('text');
console.log(text);
const upper = document.getElementById('upper');
console.log(upper);
const lower = document.getElementById('lower');
console.log(lower);

const handleCase = () => {
  if(upper.checked) {
    text.value = text.value.toUpperCase();
  }
  if(lower.checked) {
    text.value = text.value.toLowerCase();
  }
  console.log('teste')
}
handleCase();