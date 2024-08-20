tailwind.config = {
  darkMode: 'class',
};

const nameInput = document.getElementById('name');
const generateBtn = document.getElementById('generate');
const outputCard = document.getElementById('output-card');
const generatedUsername = document.getElementById('generated-username');
const copyBtn = document.getElementById('copy-btn');
const themeToggle = document.querySelector('button.fixed');

generateBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    const randomNumber = Math.floor(Math.random() * (9999 - 10 + 1)) + 10;
    const username = `${name}${randomNumber}`;
    generatedUsername.textContent = username;
    outputCard.classList.remove('hidden');
  } else {
    outputCard.classList.add('hidden');
  }
});

copyBtn.addEventListener('click', () => {
  const username = generatedUsername.textContent;
  navigator.clipboard.writeText(username);
  copyBtn.innerHTML = '<i class="fas fa-check"></i>';
  setTimeout(() => {
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
  }, 2000);
});

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  themeToggle.innerHTML = document.documentElement.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
