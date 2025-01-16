//your JS code here. If required.
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
  'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove leading articles ("The", "A", "An") for sorting
function stripArticle(bandName) {
  const articles = ['the', 'a', 'an'];
  const words = bandName.toLowerCase().split(' ');

  // Check if the first word is an article and remove it
  if (articles.includes(words[0])) {
    words.shift();
  }

  // Join the remaining words back together
  return words.join(' ');
}

// Sort bands alphabetically while ignoring "The", "A", and "An"
const sortedBands = bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// Display sorted bands in the unordered list
const bandList = document.getElementById('band');

sortedBands.forEach(band => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandList.appendChild(listItem);
});
