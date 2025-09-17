// Menu burger
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

// Formulaire simulation
const form = document.getElementById("donForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = form.nom.value;
  const email = form.email.value;
  const montant = form.montant.value;

  if(nom && email && montant){
    message.textContent = `Merci ${nom} pour votre don de ${montant} FCFA ! (Simulation front-end)`;
    form.reset();
  } else {
    message.textContent = "Veuillez remplir tous les champs.";
  }
});
