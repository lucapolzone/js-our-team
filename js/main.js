// Ciclo per iterare attraverso l'array e stampare le informazioni per ogni membro del team

const rowElement = document.querySelector(".row")

for (let i = 0; i < team.length; i++) {
  let member = team[i]; 
  
  //const caption = `<p>Il suo nome è ${member.name}, il suo ruolo è ${member.role} <img src="./img/${member.image}"></p>`

  const caption = `
    <div class="col">
      <div class="card border-0 rounded-0 mt-3">
        <img src="./img/${member.image}" alt="img${i}">
        <p class="fw-bold mt-2 member-name">${member.name}</p>
        <p class="mb-3">${member.role}</p>
      </div>
    </div>`;

  rowElement.innerHTML += caption;  
}