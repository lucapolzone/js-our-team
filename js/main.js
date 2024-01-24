// Ciclo per iterare attraverso l'array e stampare le informazioni per ogni membro del team

const mainContainer = document.querySelector(".container")

for (let i = 0; i < team.length; i++) {
  let member = team[i]; 
  const description = `<p>Il suo nome è ${member.name}, il suo ruolo è ${member.role}`
  
  const image = `<img src="./img/${member.image}"></p>`

  console.log(image)

  mainContainer.innerHTML += description + image;
  
}


