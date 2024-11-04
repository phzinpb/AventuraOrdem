const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        //Seleciona quando tem luta
        const passoLutaAtivo = document.querySelector('.passo.luta.ativo');
        const atual = document.querySelector('.ativo');


        //Define o 'data-proximo' em uma var
        var data = this.getAttribute('data-proximo');

        //Verifica se essa rodada é luta
        if (atual == passoLutaAtivo) {
            //Transforma data em numero
            const dataFormatado = parseInt(data);
            //Gera em numero e compara com dt, se passar muda o data
            const dado = Math.floor(Math.random() * 20) + 1;
            //problema
            var dt = this.getAttribute('dt-vitoria');
            //Transforma dt em numero
            const dtFormatado = parseInt(dt);
            console.log('dt', dt)
            console.log('dado', dado)

            if (dado >= dtFormatado) {
                data = dataFormatado + 1;
            }
        }
        const proximoPasso = 'passo-' + data;

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

