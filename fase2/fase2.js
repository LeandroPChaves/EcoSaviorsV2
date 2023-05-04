function btnFase2Guarda(){
    let opcoes = prompt (`
    Digite 1, 2 ou 3 para marcar a opção desejada:
    1: Permitir a construção, pois no projeto foi informado que a cada árvore cortada, será plantada duas em outra localidade.
    2: Encontrar outra opção viável para a construção do empreendimento.
    3: Ia a floresta e ficar no local para impedir a obra.`);

    if(opcoes == 1){
        alert("Você perdeu, destruiu a Folresta Encantada.");
        location.replace("../gameOver/gameOver.html");
      }
       else if (opcoes == 2){
         alert("Parabéns, Você preservou a floresta e passou de fase.");
         location.replace("../fase3/fase3Guarda.html");
       }
        else if(opcoes == 3) {
         alert("Você perdeu, foi preso e a floresta destruída");
         location.replace("../gameOver/gameOver.html");
        }
         else {
          alert("Dados incorreto. Digite 1, 2 ou 3.");
         }

}