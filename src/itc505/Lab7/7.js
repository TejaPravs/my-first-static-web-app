document.addEventListener('DOMContentLoaded', function () {
  const madLibForm = document.getElementById('madLibForm');
  const madLibResult = document.getElementById('madLibResult');

  madLibForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nouns = ['cat', 'dog', 'bird', 'tree', 'mountain', 'house', 'friend', 'book', 'sun', 'moon'];
    const adjectives = ['happy', 'colorful', 'playful', 'mysterious', 'sunny', 'quiet', 'brave', 'gentle', 'wild', 'bright'];
    const verbs = ['run', 'jump', 'sing', 'dance', 'explore', 'laugh', 'sleep', 'read', 'swim', 'create'];
    const adverbs = ['quickly', 'joyfully', 'silently', 'carefully', 'boldly', 'happily', 'slowly', 'loudly', 'softly', 'briskly'];
    const places = ['forest', 'beach', 'castle', 'city', 'space', 'mountain', 'island', 'park', 'desert', 'home'];
    function getRandomWord(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;
    const place = document.getElementById('place').value;

    const madLib = `Once upon a time, in a ${place}, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}.`;
	

    madLibResult.innerHTML = `<p>${madLib}</p>`;
  });
});
