// Ciclo per iterare attraverso l'array e stampare le informazioni per ogni membro del team

const mainContainer = document.querySelector(".container")

for (let i = 0; i < team.length; i++) {
  let member = team[i]; 
  const description = `<p>Il suo nome è ${member.name}, il suo ruolo è ${member.role}. Ecco la stringa della sua foto: '${member.image}'</p>`
  mainContainer.innerHTML += description
  console.log(typeof description)
}


