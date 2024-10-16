let nome = prompt("Olá, qual seu nome?)

let pesquisa = prompt("Olá, "+ nome +" Qual tipo de sugestões de comida da casa você deseja? Temos sugestões de comidas do tipo: italiana, japonesa, mexicana, brasileira e indiana para os pratos de hoje)

switch (pesquisa) {
  case "italiana":
    console.log("Temos uma opção deliciosa de Lasanha e Pizza")
    break;
  case "japonesa":
    console.log("Temos uma opção deliciosa de Sushi e Sashimi")
    break;
  case "mexicana":
    console.log("Temos uma opção deliciosa de Tacos e Burritos")
    break;
  case "brasileira":
    console.log("Temos uma opção deliciosa de Feijoada e Picanha")
    break;
  case "indiana":
    console.log("Temos uma opção deliciosa de Curry e Tikka Masala")
    break;
  default:
    console.log("Esse tipo de comida não está disponível nos pratos de hoje.")
}