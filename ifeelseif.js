//Ativiade if e else if
const atendimentonapoliclinica = prompt("Como está o atendimento na policlinica em relação a vacina contra gripe?, por favor deixe sua opniao.")
if (atendimentonapoliclinica == "muito bom") {
console.log("O atendimento está maravilhoso")  
} else if (atendimentonapoliclinica == "nao muito bom") {
console.log( "Está razoável, a falta de agilidade por parte da policlinica acaba atrasando todos os atendimentos")  
} else if (atendimentonapoliclinica == "muito ruim") {
console.log("O atendimento está péssimo, recepcionista confundindo os horarios dos pacientes, medicos atrasados, gerando tumulto no ambiente! ")  
} else {
console.log("A resposta está Invalida, por favor tente novamente")  
}
