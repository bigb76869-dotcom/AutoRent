function showAddCarModal() {
  document.getElementById('addCarModal').style.display = 'block';
}

function closeAddCarModal() {
  document.getElementById('addCarModal').style.display = 'none';
}

function addCar() {
  const name = document.getElementById('carName').value;
  const image = document.getElementById('carImage').value;
  const price = document.getElementById('carPrice').value;

  if (!name || !image || !price) {
    alert('Барлық өрістерді толтырыңыз!');
    return;
  }

  const carCard = document.createElement('div');
  carCard.className = 'car-card';
  carCard.innerHTML = `
    <img src="${image}" alt="${name}" />
    <div class="car-info">
      <h3>${name}</h3>
      <p>Бағасы: ${price} ₸/күн</p>
      <button>Жалға алу</button>
    </div>
  `;

  document.getElementById('carGrid').appendChild(carCard);
  closeAddCarModal();

  // Форманы тазалау
  document.getElementById('carName').value = '';
  document.getElementById('carImage').value = '';
  document.getElementById('carPrice').value = '';
}

 /*-------------------------------------------*/

function addCar() {
  const name = document.getElementById('carName').value;
  const image = document.getElementById('carImage').value;
  const price = document.getElementById('carPrice').value;

  if (!name || !image || !price) {
    alert('Барлық өрістерді толтырыңыз!');
    return;
  }

  const carCard = document.createElement('div');
  carCard.className = 'car-card';
  carCard.innerHTML = `
    <img src="${image}" alt="${name}" />
    <div class="car-info">
      <h3>${name}</h3>
      <p>Бағасы: ${price} ₸/күн</p>
      <div class="car-buttons">
        <button onclick="showRentalModal()" class="rent-btn"><i class="fas fa-car"></i> Жалға алу</button>
        <button onclick="this.closest('.car-card').remove()" class="delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `;

  document.getElementById('carGrid').appendChild(carCard);
  closeAddCarModal();

  // Форманы тазалау
  document.getElementById('carName').value = '';
  document.getElementById('carImage').value = '';
  document.getElementById('carPrice').value = '';
}

function showRentalModal() {
  document.getElementById('rentalModal').style.display = 'block';
}

function closeRentalModal() {
  document.getElementById('rentalModal').style.display = 'none';
}

/*-----------------------история----------------------------------*/
let currentRentalCar = null;

// Көлік карточкасын жасау (мысал үшін)
function createCarCard(car) {
  const card = document.createElement("div");
  card.className = "car-card";
  card.innerHTML = `
    <img src="${car.image}" alt="${car.name}" />
    <h3>${car.name}</h3>
    <p>${car.price} ₸ / күн</p>
    <button class="rent-btn">Жалға алу</button>
  `;

  card.querySelector(".rent-btn").addEventListener("click", () => {
    currentRentalCar = car;
    document.getElementById("rentalModal").style.display = "block";
  });

  return card;
}



// Rental form өңдеу
document.getElementById("rentalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const customerName = this.elements[0].value;
  const phone = this.elements[1].value;
  const email = this.elements[2].value;
  const rentalDate = this.elements[3].value;
  const numberOfDays = this.elements[4].value;

  if (!currentRentalCar) {
    alert("Көлік таңдалмады!");
    return;
  }

  const rentalList = document.getElementById("rentalsList");
  const rentalDiv = document.createElement("div");
  rentalDiv.className = "rental-item";
  rentalDiv.innerHTML = `
    <img src="${currentRentalCar.image}" class="rental-car-image" />
    <div>
      <h3>${currentRentalCar.name}</h3>
      <p><strong>Бағасы:</strong> ${currentRentalCar.price} ₸ / күн</p>
      <p><strong>Клиент:</strong> ${customerName}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Басталу күні:</strong> ${rentalDate}</p>
      <p><strong>Күн саны:</strong> ${numberOfDays}</p>
    </div>
  `;

  rentalList.appendChild(rentalDiv);
  this.reset();
  closeRentalModal();
});

function closeRentalModal() {
  document.getElementById("rentalModal").style.display = "none";
}
