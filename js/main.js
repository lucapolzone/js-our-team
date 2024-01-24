// Ciclo per iterare attraverso l'array e stampare le informazioni per ogni membro del team

for (let i = 0; i < team.length; i++) {
  const member = team[i];
  console.log(`Il suo nome è ${member.name}, il suo ruolo è ${member.role}. Ecco la stringa della sua foto: '${member.image}'`)
}