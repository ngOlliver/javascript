'use strict'
function start() {
    //GABARITO??
    //MAIS PERGUNTAS

    //Função para embaralhar as opções
    const mixOpts = array => {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let mixedOpts = []
    let resetBtn
    let feedbackBtn
    let qNum = 1
    let qDid = []
    let randomQIndex
    let randomQ
    let optsBtns = [...document.querySelectorAll('button.options')]
    const currentQNum = document.querySelector('h2#questionNumber')
    const question = document.querySelector('p.question')
    const mainSect = document.querySelector('section#respond')
    const qAnswers = [ //Contém todas as perguntas e opções.
        {
            question: 'Qual o resultado da expressão -14+5x(-3²)<span>?</span>',
            options: ['Aproximadamente 32.15', '0', '-59', '-63', 'Inválido']
        },
        {
            question: 'O Brasil é mais adepto a qual religião<span>?</span>',
            options: ['Catolicismo', 'Cristianismo', 'Criacionismo', 'Jesus', 'O Brasil é ateu']
        },
        {
            question: 'Em que década o primeiro humano pisou na lua<span>?</span>',
            options: ['90', '80', '70', '60', '50']
        },
        {
            question: 'Como é chamado quem nasce nos Estados Unidos da América<span>?</span>',
            options: ['Estadunidense', 'Américo', 'Europeu', 'Gringo', 'Americano']
        },
        {
            question: 'O quinto número primo depois de 5 é<span>:</span>',
            options: ['19', '5', '7', '11', '17']
        },
        {
            question: 'Qual o idioma oficial do Peru<span>?</span>',
            options: ['Espanhol', 'Inglês', 'Francês', 'Peruano', 'Português']
        },
        {
            question: 'Como se escreve por extenso a 1276ª posição<span>?</span>',
            options: ['Mil duzentos e setenta e seis', 'Milhonésima ducentésima setegésima sexta', '1276', 'Mil duzentos e setenta e sexto', 'Milésima ducentésima septuagésima sexta']
        },
        {
            question: 'Quais são todos nomes de letras gregas<span>?</span>',
            options: ['Prime, Celta, A', 'Alfa, Beta, Ômega', 'Celta, Delta, Gama', 'A, O', 'Sygma, Lambida, Zetta']
        },
        {
            question: 'Qual destes foi o filme com a maior bilheteria da história<span>?</span>',
            options: ['Avatar', 'Vingadores: Ultimato', 'Vingadores', 'King Kong', 'Matrix']
        },
        {
            question: 'Qual é sinônimo de distante<span>?</span>',
            options: ['Distância', 'Lá', 'Longe', 'Avante', 'Perto']
        },
        {
            question: 'Qual é um líquido vital, incolor e inodoro<span>?</span>',
            options: ['Sangue', 'H2O2', 'Oxigênio', 'Vitamina', 'Água']
        },
        {
            question: 'Qual o número oposto a -15<span>?</span>',
            options: ['0', '--15', '15', '-30', '150']
        },
        {
            question: 'Qual não é energia<span>?</span>',
            options: ['Calor', 'Eletricidade', 'Luz', 'Som', 'Matéria']
        },
        {
            question: 'O que é o que é... Cai em pé, e corre deitado<span>?</span>',
            options: ['Minhoca', 'Chuva', 'Gato', 'Sombra', 'Avião']
        },
        {
            question: 'Qual o feminino de tigre<span>?</span>',
            options: ['Tigresa', 'Tigre', 'Tigrona', 'Tigra', 'Tigrasa']
        },
        {
            question: 'Qual não faz parte do corpo humano<span>?</span>',
            options: ['Bile', 'Cloaca', 'Hemoglobina', 'Pele', 'Saliva']
        },
        {
            question: 'Qual a escrita correta<span>?</span>',
            options: ['Obsessão', 'Obzessão', 'Obcessão', 'Obseção', 'Todas as alternativas estão incorretas']
        },
        {
            question: 'O que significa "translate" em inglês<span>?</span>',
            options: ['Translação', 'Translatar', 'Transformar', 'Tradução', 'Traduzir']
        },
        {
            question: 'Qual URL está correta<span>?</span>',
            options: ['Https://.com.youtube%0&23', 'htps://www.youtube', 'https://www.youtube.com', 'www.com.br', 'www.https://youtube.com//']
        },
        {
            question: 'Qual o próximo número da sequência [12, 25, 40, 57, 78, 101]<span>?</span>',
            options: ['111', '123', '128', '130', 'Impossível saber']
        },
        {
            question: 'Quem é o ser mitológico egípcio que faz perguntas às pessoas<span>?</span>',
            options: ['Esfinge', 'Faraó', 'Cleópatra', 'Pirâmide de Gizé', 'Hórus']
        },
        {
            question: 'Quem é Loki<span>?</span>',
            options: ['Um gigante de gelo', 'Um deus asgardiano', 'Um trapaceiro', 'Um herói', 'Filho de Thor']
        },
        {
            question: 'Durante quanto tempo durou a Guerra dos Cem Anos<span>?</span>',
            options: ['116 anos', '100 anos', '108 anos', '112 anos', '99 anos']
        },
        {
            question: 'Normalmente, quantos litros de sangue uma pessoa tem<span>?</span>',
            options: ['1 a 2 litros', '3 litros', '4 a 6 litros', '5000ml', '6 a 7,5 litros']
        },
        {
            question: 'De quem é a famosa frase “Penso, logo existo”<span>?</span>',
            options: ['René Descartes', 'Sócrates', 'Aristóteles', 'Plutão', 'Émile Durkheim']
        },
        {
            question: 'Quais o menor e o maior país do mundo<span>?</span>',
            options: ['Vaticano e Rússia', 'Portugal e China', 'Mônaco e China', 'China e Mônaco', 'Noruega e Brasil']
        },
        {
            question: 'Quais o segundo livro mais vendido do mundo<span>?</span>',
            options: ['Bíblia', 'Dom Quixote', 'A Arte da Guerra', 'Torá', 'Barsa']
        },
        {
            question: 'Quantas casas decimais tem o número pi<span>?</span>',
            options: ['Infinitas', 'Nenhuma', '2', '4', '138235']
        },
        {
            question: 'Atualmente, quantos elementos químicos a tabela periódica possui<span>?</span>',
            options: ['118', '100', '96', '50', '500']
        },
        {
            question: 'Qual país tem a maior expectativa de vida do mundo<span>?</span>',
            options: ['Coreia', 'Canadá', 'Serra Leoa', 'Europa', 'Japão']
        },
        
    ]
    const correctAnswers = [ //Contém todas as respotas corretas.
        '-59',
        'Cristianismo',
        '60',
        'Americano',
        '19',
        'Espanhol',
        'Milésima ducentésima septuagésima sexta',
        'Alfa, Beta, Ômega',
        'Avatar',
        'Longe',
        'Água',
        '15',
        'Matéria',
        'Chuva',
        'Tigresa',
        'Cloaca',
        'Obsessão',
        'Traduzir',
        'https://www.youtube.com',
        '128',
        'Esfinge',
        'Um gigante de gelo',
        '116 anos',
        '4 a 6 litros',
        'René Descartes',
        'Vaticano e Rússia',
        'Dom Quixote',
        'Infinitas',
        '118',
        'Japão'
    ]
    //Principal função. Faz uma pergunta aleatória e a coloca na tela com suas opções embaralhadas, também analisa se o quiz já foi finalizado, e mostra a tela final de conclusão do quiz.
    const doQuestion = () => {
        if(qNum > 10) { //Verifica se o quiz já foi finalizado.
            currentQNum.innerHTML = 'Parabéns<span>!</span> Você completou o Qui<span>z!</span> <span></span>'
            switch(score.length) { //Mensagens de conclusão do quiz
                case 0:
                    question.innerHTML = 'Você acertou <span>0</span> de <span>10</span> perguntas. Tente de novo, você vai conseguir<span>!</span>'
                    break
                case 1:
                    question.innerHTML = 'Você acertou apenas <span>1</span> de <span>10</span> perguntas. Tente de novo, você vai conseguir<span>!</span>'
                    break
                case 2:
                    question.innerHTML = 'Você acertou <span>2</span> de <span>10</span> perguntas. Não quer tentar mais uma vez<span>?</span>'
                    break
                case 3:
                    question.innerHTML = 'Você acertou <span>3</span> de <span>10</span> perguntas. Pode fazer melhor<span>!</span>'
                    break
                case 4:
                    question.innerHTML = 'Você acertou <span>4</span> de <span>10</span> perguntas. Você foi bem<span>!</span>'
                    break
                case 5:
                    question.innerHTML = 'Você acertou <span>5</span> de <span>10</span> perguntas. Você foi bem<span>!</span>'
                    break
                case 6:
                    question.innerHTML = 'Você acertou <span>6</span> de <span>10</span> perguntas. Isso foi ótimo<span>!</span>'
                    break
                case 7:
                    question.innerHTML = 'Você acertou <span>7</span> de <span>10</span> perguntas. É uma boa pontuação<span>!</span>'
                    break
                case 8:
                    question.innerHTML = 'Você acertou <span>8</span> de <span>10</span> perguntas. Isso foi ótimo<span>!</span>'
                    break
                case 9:
                    question.innerHTML = 'Você acertou <span>9</span> de <span>10</span> perguntas. Que incrível<span>!</span>'
                    break
                case 10:
                    question.innerHTML = 'Você acertou <span>10</span> de <span>10</span> perguntas. Você é um gênio<span>!</span>'
                    break
                default: 
                    question.innerHTML = 'ERRO. REINICIE O SITE'/* 'Você acertou <span>11</span> de <span>10</span> perguntas. Insano! Então você encontrou a Pergunta <span>11</span>... Bem esperto<span>!</span>' */
            }

            resetBtn = document.createElement('button')
            resetBtn.setAttribute('id', 'resetButton')
            resetBtn.innerHTML = 'Reiniciar'
            resetBtn.addEventListener('mouseup', reset)
            mainSect.appendChild(resetBtn)

            feedbackBtn = document.createElement('button')
            feedbackBtn.setAttribute('id', 'feedback')
            feedbackBtn.innerHTML = 'Gabarito'
            feedbackBtn.addEventListener('mouseup', feedback)
            mainSect.appendChild(feedbackBtn)

            optsBtns.forEach(button => {
                button.remove()
            })
            return
        }

        do { //Seleciona uma pergunta aleatória.
            randomQIndex = Math.floor(Math.random() * qAnswers.length);
            randomQ = qAnswers[randomQIndex].question;
        } while (qDid.includes(randomQ));

        //Opções embaralhadas.
        mixedOpts = mixOpts([...qAnswers[randomQIndex].options])
        question.innerHTML = randomQ;
        for(let i in mixedOpts) {
            optsBtns[i].innerHTML = mixedOpts[i]
        }

        currentQNum.innerHTML = `Pergunta <span>${qNum++}</span>`
    }

    window.addEventListener('load', doQuestion)

    const totalQ = 10
    //Função para avançar a barra de progresso a cada pergunta respondida.
    const progress = () => {
        const newWidth = (qDid.length / totalQ) * 100;
        document.querySelector('div#inProgressBar').style.width = `${newWidth}%`
        
    }

    let score = []
    //Função com event listener para guardar os dados de pergunta e resposta, avançar para a próxima pergunta e também a barra de progresso.
    const handleOptsClick = button => {
        if(correctAnswers.includes(button.innerHTML)) {
            score.push(button.innerHTML)
        }
        qDid.push(randomQ)
        doQuestion()
        progress()
    }

    optsBtns.forEach(button => {
        button.addEventListener('click', () => handleOptsClick(button))
    })

    //Função para resetar o quiz, limpando dados armazenados.
    const reset = () => {
        qNum = 1
        qDid = []
        score = []
        
        optsBtns.forEach(button => button.remove())
        optsBtns = []

        for(let i = 0; i < 5; i++) {
            let btn = document.createElement('button')
            btn.className = 'options'
            btn.addEventListener('click', () => handleOptsClick(btn))
            optsBtns.push(btn)
            mainSect.appendChild(btn)
        }

        resetBtn.remove()
        feedbackBtn.remove()
        while (resQuestions.firstChild) {
            resQuestions.firstChild.remove();
        }
        doQuestion()
        progress()
    }

    let resQuestions = document.querySelector('section#results')
    //Função para gerar o gabarito
    const feedback = () => {
        currentQNum.innerHTML = 'Gabarito'
        question.innerHTML = 'Estes foram seus acertos e erros<span>:</span>'
        feedbackBtn.remove()
        for(let i = 0; i < 10; i++) {
            let rQuestion = document.createElement('p')
            rQuestion.className = 'question'
            rQuestion.innerHTML = correctAns[i].question
            resQuestions.appendChild(rQuestion)

            let rAns = document.createElement('p')
            rAns.className = 'rightAns'
            rAns.innerHTML = correctAns[i].chosenAns
            

            let wrong = document.createElement('p')
        }
    }

    // document.querySelector('button#feedback').addEventListener('mouseup', feedback)

    // const teclas = [];
    // const sequencia = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

    // let qDidSecret = []

    // window.addEventListener('keydown', (e) => {
    //     if(qDidSecret.includes(secretQuestion.question)){
    //         return
    //     } else {
    //         teclas.push(e.key);

    //         if (teclas.length > sequencia.length) {
    //             teclas.shift();
    //         }

    //         if (JSON.stringify(teclas) === JSON.stringify(sequencia)) {
    //             currentQNum.innerHTML = 'Pergunta <span>11</span>'
    //             question.innerHTML = secretQuestion.question
    //             let shuffledSecretOptions =  mixOpts([...secretQuestion.options])
                
    //             qDidSecret.push(secretQuestion.question)
    //             for (let i in shuffledSecretOptions) {
    //                 answers[i].innerHTML = shuffledSecretOptions[i]
    //             }
    //             QNum--
    //         }
    //     }
    // })
}
document.addEventListener('DOMContentLoaded', start())