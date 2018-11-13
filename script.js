let valorMinimo= Number(prompt('Insira um valor mínimo.'));
let valorMaximo= Number(prompt('Insira um valor máximo.'));

function jogoAdivinha(minimo, maximo){
    
 let resultado= false;
 let valorGerado= gerarAleatorio (minimo, maximo);
    
    for(let i= 5; i>0; i--){
        let valorInserido = Number(prompt('Digite o valor que você acha ser o correto.'))
        if(valorInserido === valorGerado){
            alert('Parabéns, você acertou!');
            i = 0;
            resultado= true;
        }
        else{
            alert(`Infelizmente você não acertou o número. Agora você tem ${i-1} chances.`);
            if(valorInserido > valorGerado){
                alert('O número inserido é maior do que o número gerado.');
            }
            else{
                alert('O número inserido é menor do que o número gerado');
            }
        }
    }

    if(resultado === false){
        alert(`Infelizmente suas chances acabaram. O valor gerado era ${valorGerado}`);
    }
    
    
}

jogoAdivinha(valorMinimo,valorMaximo);