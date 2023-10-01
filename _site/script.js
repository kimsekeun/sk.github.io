// script.js
const dnaHelix = document.querySelector('.dna-helix');

// Add 10 more base pairs dynamically
for (let i = 0; i < 10; i++) {
    const basePair = document.createElement('div');
    basePair.classList.add('base-pair');
    dnaHelix.appendChild(basePair);
}