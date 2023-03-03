const BotaoDeDeleta = () =>{ //componentes começam com letra maiscula
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento)=>{
    const botaoDeleta = evento.target;

    const tarefaCompleta = botaoDeleta.parentElement; //elemento pai do botão é a li

    tarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoDeDeleta;