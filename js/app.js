const numeroWhatsApp = "5553981368604";

document.querySelectorAll('.btn-selecionar').forEach(botao => {
   
    botao.addEventListener("click", () =>{
        const nomeProduto = botao.getAttribute('data-nome');

        const descricaoProduto = botao.getAttribute("data-descricao");

        const mensagem = `Olá, gostaria de saber mais sobre este produto: *${nomeProduto}, ${descricaoProduto}!*`

        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`

        window.open(urlWhatsApp, '_blank')
    });
});