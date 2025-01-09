let currentDate = new Date(1, 0, 36160);
const dateElement = document.getElementById("dd-mm-aa");
const divSelect = document.getElementById("multiplicadores")

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).padStart(4, '0');
    return `${day}/${month}/${year}`;
}

function incrementDate() {
    setTimeout(function () {
        currentDate.setDate(currentDate.getDate() + 1);
        const day = String(currentDate.getDate()).padStart(2, '0');
        dateElement.textContent = `Data atual: ${formatDate(currentDate)}`;

        if (day == 1) {
            atualizarSaldoData()
        }

        incrementDate();
    }, 50);
}

dateElement.textContent = `Data atual: ${formatDate(currentDate)}`;
incrementDate();

const investimentos =
    [
        {
            nome: "Apartamento em Olinda",
            tipo: "imoveis",
            quantidade: 0,
            custo: 10000,
            rendimento: 1000,
            id: 0
        },
        {
            nome: "Apartamento em Balneário Camboriú",
            tipo: "imoveis",
            quantidade: 0,
            custo: 20000,
            rendimento: 2250,
            id: 1
        },
        {
            nome: "Apartamento em Caruaru",
            tipo: "imoveis",
            quantidade: 0,
            custo: 50000,
            rendimento: 3500,
            id: 2
        },
        {
            nome: "Ação do Santander",
            tipo: "acoes",
            quantidade: 1,
            custo: 25,
            rendimento: 3,
            id: 0
        },
        {
            nome: "Ação do Nubank",
            tipo: "acoes",
            quantidade: 0,
            custo: 39,
            rendimento: 6,
            id: 1
        },
        {
            nome: "Ação da NVIDIA",
            tipo: "acoes",
            quantidade: 0,
            custo: 90,
            rendimento: 15,
            id: 2
        },
    ];

const upgrades =
    [
        {
            nome: "Mobilias",
            efeitoEm: "imoveis",
            descricaoUpgrade: "As casas agora vêm mobiliadas, o que melhora a rentabilidade delas...",
            custo: 25000,
            descricaoEfeito: "Aumenta a rentabilidade em",
            valorEfeito: 10,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 0
        },
        {
            nome: "Painéis Solares",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Instale painéis solares para reduzir custos e aumentar a sustentabilidade.",
            custo: 50000,
            descricaoEfeito: "Reduz os custos operacionais em",
            valorEfeito: 15,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 1
        },
        {
            nome: "Paisagismo",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Adicione áreas verdes e jardins, atraindo mais inquilinos.",
            custo: 40000,
            descricaoEfeito: "Aumenta a atratividade em",
            valorEfeito: 12,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 2
        },
        {
            nome: "Segurança Avançada",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Instale sistemas de segurança avançados, melhorando o valor percebido.",
            custo: 60000,
            descricaoEfeito: "Aumenta o valor de mercado em",
            valorEfeito: 8,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 3
        },
        {
            nome: "Internet de Alta Velocidade",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Ofereça internet de alta velocidade como padrão para seus imóveis.",
            custo: 30000,
            descricaoEfeito: "Aumenta a satisfação dos inquilinos em",
            valorEfeito: 10,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 4
        },
        {
            nome: "Renovação de Fachada",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Renove a fachada dos imóveis, atraindo mais interessados.",
            custo: 45000,
            descricaoEfeito: "Aumenta a visibilidade em",
            valorEfeito: 14,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 5
        },
        {
            nome: "Automação Residencial",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Implemente tecnologias de automação para maior conveniência.",
            custo: 75000,
            descricaoEfeito: "Aumenta o preço do aluguel em",
            valorEfeito: 18,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 6
        },
        {
            nome: "Espaços de Coworking",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Crie espaços de coworking dentro dos edifícios para atrair profissionais.",
            custo: 50000,
            descricaoEfeito: "Aumenta a ocupação em",
            valorEfeito: 20,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 7
        },
        {
            nome: "Espaços de Coworking",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Crie espaços de coworking dentro dos edifícios para atrair profissionais.",
            custo: 50000,
            descricaoEfeito: "Aumenta a ocupação em",
            valorEfeito: 20,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 8
        },
        {
            nome: "Espaços de Coworking",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Crie espaços de coworking dentro dos edifícios para atrair profissionais.",
            custo: 50000,
            descricaoEfeito: "Aumenta a ocupação em",
            valorEfeito: 20,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 9
        },
        {
            nome: "Espaços de Coworking",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Crie espaços de coworking dentro dos edifícios para atrair profissionais.",
            custo: 50000,
            descricaoEfeito: "Aumenta a ocupação em",
            valorEfeito: 20,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 10
        },
        {
            nome: "Espaços de Coworking",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Crie espaços de coworking dentro dos edifícios para atrair profissionais.",
            custo: 50000,
            descricaoEfeito: "Aumenta a ocupação em",
            valorEfeito: 20,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 11
        },
        {
            nome: "Espaços de Coworking",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Crie espaços de coworking dentro dos edifícios para atrair profissionais.",
            custo: 50000,
            descricaoEfeito: "Aumenta a ocupação em",
            valorEfeito: 20,
            tipo: "percentual",
            statusDisponibilidade: 0,
            id: 12
        },
        {
            nome: "Espaços de Coworking",
            efeitoEm: "imoveis",
            descricaoUpgrade: "Crie espaços de coworking dentro dos edifícios para atrair profissionais.",
            custo: 50000,
            descricaoEfeito: "Aumenta a ocupação em",
            valorEfeito: 20,
            tipo: "percentual",
            statusDisponibilidade: 1,
            id: 13
        },
        {
            nome: "O dolár caiu, aproveita!",
            efeitoEm: "acoes",
            descricaoUpgrade: "Valorização do mercado.",
            custo: 150,
            descricaoEfeito: "Aumenta o rendimento de todos os investimentos em",
            valorEfeito: 25,
            tipo: "percentual",
            statusDisponibilidade: 1,
            id: 14
        },
    ]

function criarInvestimentos() {
    investimentos.forEach((investimento) => {
        const container = document.getElementById(`investimentos-${investimento.tipo}`);
        const div = document.createElement("div");
        div.className = `investimento-${investimento.id}`;
        div.id = `investimento-${investimento.id}`;
        div.innerHTML = `
            <hr>
            <h3>${investimento.nome}</h3>
            <p>Quantidade de Imóveis: <span id="quantidade-${investimento.tipo}-${investimento.id}">${investimento.quantidade}</span></p>
            <p>Rendimento Unidade: R$ <span id=rendimento-un-${investimento.tipo}-${investimento.id}>${investimento.rendimento}</span></p>
            <p>Rendendo: R$ <span id="rendimento-${investimento.tipo}-${investimento.id}">${(investimento.quantidade * investimento.rendimento)}</span></p>
            <p>Custo: R$ <span id="custo-${investimento.tipo}-${investimento.id}"> ${investimento.custo} </span></p>
            <button class="comprar-investimento" onclick="comprar('${investimento.tipo}', ${investimento.id})" id="botao-comprar-${investimento.tipo}-${investimento.id}">Comprar</button>
        `;
        container.appendChild(div);
        div.offsetHeight;
    });

}

function criarUpgrades() {
    const container = document.getElementById("upgrades");
    upgrades.forEach((upgrade) => {
        if (upgrade.statusDisponibilidade == 1) {
            const div = document.createElement("div");
            div.className = `upgrade-${upgrade.id}`;
            div.id = `upgrade-${upgrade.id}`;
            div.innerHTML = `
                    <hr>
                    <h3>${upgrade.nome}</h3>
                    <p>Custo: R$ ${upgrade.custo}</p>
                    <p>Upgrade para: ${upgrade.efeitoEm}</p>
                    <p>Efeito: ${upgrade.descricaoEfeito}: ${upgrade.valorEfeito}%<p>
                    <p>Descrição: ${upgrade.descricaoUpgrade}</p>
                    <button class="comprar-upgrade" onclick="comprar('upgrade' ,${upgrade.id})" id="botao-upgrade-${upgrade.id}">Comprar</button>
                `;
            container.appendChild(div);
            div.offsetHeight;
        }
    });
}

document.addEventListener("DOMContentLoaded", criarInvestimentos);
document.addEventListener("DOMContentLoaded", criarUpgrades);

function formatarMoeda(valor) {
    return valor
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function consultarSaldo() {
    const divsaldo = document.getElementById("valor-saldo");
    let saldo = divsaldo.innerText;
    saldo = saldo.replace(/\./g, '').replace(',', '.');
    saldo = parseFloat(saldo);
    return saldo;
}

function removerUpgrade(id) {
    const upgradeRemover = document.getElementById(`upgrade-${id}`)

    if (upgradeRemover) {
        upgradeRemover.remove();
    }
    else {
        alert("Elemento não encontrado")
    }
}


function comprar(tipo, id) {
    let quantidade = divSelect.value
    quantidade = parseInt(quantidade)


    if (tipo != "upgrade") {
        const saldo = consultarSaldo()
        const investimento = investimentos.find(invest => invest.id == id && invest.tipo == tipo)
        let valorNecessario = investimento.custo
        let custoFinal = investimento.custo

        if (quantidade > 1) {
            valor_custo = calcularValorFinal(quantidade, investimento.custo, investimento.tipo)
            valorNecessario = valor_custo.valor
            custoFinal = valor_custo.custo
        } else {
            custo = investimento.custo
            custoFinal = custo + ((custo * 5) / 100)
        }
        
        if (saldo >= valorNecessario) {
            investimento.quantidade = investimento.quantidade + quantidade
            if (investimento.tipo != "acoes"){
                investimento.custo = custoFinal
            }

            atualizarTextoInvestimento(investimento.tipo, investimento.id)
            atualizarValorNecessarioTotal()
            atualizarGanhoPassivoMensal()
            diminuirSaldo(valorNecessario)

        } else {
            const botao = document.getElementById(`botao-comprar-${investimento.tipo}-${investimento.id}`)
            botao.style.backgroundColor = "red"
            setTimeout(() => {
                botao.style.backgroundColor = "limegreen"
            }, 200);
        }
    } else {
        const saldo = consultarSaldo()
        const upgrade = upgrades.find(up => up.id == id)


        if (saldo >= upgrade.custo) {
            diminuirSaldo(upgrade.custo)
            removerUpgrade(upgrade.id)

            investimentos.forEach(investimento => {
                if (investimento.tipo == upgrade.efeitoEm) {
                    investimento.rendimento = investimento.rendimento + (investimento.rendimento * (upgrade.valorEfeito / 100))
                    atualizarTextoInvestimento(investimento.tipo, investimento.id)
                    atualizarGanhoPassivoMensal()
                }
            });
        } else {
            const botao = document.getElementById(`botao-upgrade-${upgrade.id}`)
            botao.style.backgroundColor = "red"
            setTimeout(() => {
                botao.style.backgroundColor = "limegreen"
            }, 200);
        }
    }
}

function atualizarGanhoPassivoMensal() {
    const divGanhoMensal = document.getElementById("ganho-por-mes-valor")
    let ganhoAtualMensal = 0

    investimentos.forEach(investimento => {
        ganhoAtualMensal = ganhoAtualMensal + investimento.rendimento * investimento.quantidade
    });
    
    divGanhoMensal.innerText = formatarMoeda(ganhoAtualMensal)
}

function calcularValorFinal(quantidade, custo, tipo) {
    let valor = custo

    if (tipo == "imoveis" && quantidade > 1) {
        for (i = 1; i <= quantidade; i++) {
            valor = custo + custo * 0.05 
            custo = custo + custo * 0.05
        }
    } else {
        valor = custo * quantidade
    }

    valor = valor.toFixed(2)
    valor = parseFloat(valor)

    return {valor, custo}
}

function atualizarTextoInvestimento(tipo, id) {
    const quantidade_imoveis = document.getElementById(`quantidade-${tipo}-${id}`)
    const custo = document.getElementById(`custo-${tipo}-${id}`)
    const rendimento_un = document.getElementById(`rendimento-un-${tipo}-${id}`)
    const rendimento = document.getElementById(`rendimento-${tipo}-${id}`)

    const investimento = investimentos.find(invest => invest.id == id && invest.tipo == tipo)

    quantidade_imoveis.innerText = investimento.quantidade
    custo.innerText = formatarMoeda(investimento.custo)
    rendimento_un.innerText = formatarMoeda(investimento.rendimento)
    rendimento.innerText = formatarMoeda(investimento.rendimento * investimento.quantidade)

}

function atualizarSaldoData () {
    const divSaldoAtual = document.getElementById("valor-saldo")
    let saldoAtual = consultarSaldo()

    investimentos.forEach(investimento => {
        saldoAtual = saldoAtual + (investimento.rendimento * investimento.quantidade)    
    });
    

    divSaldoAtual.innerText = formatarMoeda(saldoAtual)

}

function diminuirSaldo (saldoParaDiminuir) {
    let saldoAtual = consultarSaldo()
    saldoAtual = saldoAtual - saldoParaDiminuir

    const divSaldoAtual = document.getElementById("valor-saldo")
    divSaldoAtual.innerText = formatarMoeda(saldoAtual)
}


function atualizarValorNecessarioTotal() {
    const quantidade = divSelect.value;
    
    investimentos.forEach(investimento => {
        const divCusto = document.getElementById(`custo-${investimento.tipo}-${investimento.id}`)

        if (investimento.tipo == "acoes") {
            const custoFin = investimento.custo * quantidade
            divCusto.innerText = formatarMoeda(custoFin)
        } else {
            const custoFin = calcularValorFinal(quantidade, investimento.custo, investimento.tipo)
            divCusto.innerText = formatarMoeda(custoFin.valor)
        }   

    });

}

divSelect.addEventListener('change', atualizarValorNecessarioTotal)