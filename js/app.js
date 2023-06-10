const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

// create a new instance of WordCounter
new WordCounter(inputText);

const render = (event) => {
    statElem.innerHTML = `<p>WORDS <span class="highlight">${event.detail.wordStat.words}</span> 
    <span class="highlight">CHARACTERS ${event.detail.wordStat.characters}</span></p>`;
}

inputText.addEventListener('count', render);