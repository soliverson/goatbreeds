document.addEventListener('DOMContentLoaded', () => {
  const profiles = [];

  const profileContainer = document.getElementById('profile-container');
  const goatForm = document.getElementById('goat-form');

  goatForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value || 'images/default-goat.jpg'; // Default image if none provided

    const newProfile = { name, breed, age, description, image };
    profiles.push(newProfile);

    addProfileToDOM(newProfile);

    goatForm.reset();
  });

  function addProfileToDOM(profile) {
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');

    profileCard.innerHTML = `
      <img src="${profile.image}" alt="${profile.name}">
      <h3>${profile.name}</h3>
      <p><strong>Breed:</strong> ${profile.breed}</p>
      <p><strong>Age:</strong> ${profile.age} years</p>
      <p>${profile.description}</p>
      <button class="show-more">Show More</button>
      <div class="more-info hidden">
        <p>More information about ${profile.name}.</p>
      </div>
    `;

    profileContainer.appendChild(profileCard);

    const showMoreButton = profileCard.querySelector('.show-more');
    const moreInfo = profileCard.querySelector('.more-info');

    showMoreButton.addEventListener('click', () => {
      moreInfo.classList.toggle('hidden');
      showMoreButton.textContent = moreInfo.classList.contains('hidden') ? 'Show More' : 'Show Less';
    });
  }
});
