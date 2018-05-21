import puppeteer from 'puppeteer'

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000');

    const attendees = [
        // "Alaor",
        // "Aline DAngelo",
        // "Andressa Finzi",
        // "Artur Aquino",
        // "Bruno Benicio",
        // "Caio Rodrigues",
        // "Claudio Santos",
        // "Cleber Evangelista Azevedo",
        // "Cristiano Oliveira",
        // "Daniel Viana",
        // "Danilo Mello",
        // "Danniel Sousa",
        // "Dayves Oliveira",
        // "Deivid Ribeiro",
        // "Eduardo Costa de Paiva",
        // "Eliezer Ferreira",
        // "Erik Reis",
        // "Evandro Junior",
        // "Fabiano Fernandes",
        // "Felipe De Aquino Nascimento",
        // "Felipe Freitas",
        // "Flavio Vallovera Marques",
        // "Fábio Vasconcelos",
        // "Gabi Fagundes",
        // "Gabriel Beirigo",
        // "George Silva",
        // "Gislene dos Santos Carvalho",
        // "Guto Rocha",
        // "Heldson Luiz",
        // "Igor Tannús Corrêa",
        // "Isac",
        // "Ismael Nascimento",
        // "Jean Souza",
        // "Jhony Dias",
        // "Jhyeferson Dias",
        // "Joel Rodrigues",
        // "Jose Joaquim Brandão Neto",
        // "João Stinglin Neto",
        // "Kayke Mendes",
        // "Laercio Lima",
        // "Leonardo Santiago",
        // "Lorrayne Paraiso",
        // "Luan Vieira",
        // "Lucas Machado Sales",
        // "Lucas Nunes Arantes",
        // "Lucas Vilaboim",
        // "Luiz Fernando Signorelli",
        // "Luís Henrique Faria",
        // "Maiky Alves",
        // "Marcos Tadeu",
        // "Marcos Vinício",
        // "Marcus Reis",
        // "Mateus Emanuel Araújo",
        // "Matheus Eduardo",
        // "Matheus Meira",
        // "Maycon Leandro Euzebio",
        // "Mayke Alisson",
        // "Michele Ribeiro",
        // "Miguel Lucas Peres Souza",
        // "Pedro Neto",
        // "Pedro Paulo",
        // "Rafael Alves",
        // "Rafael Ribeiro",
        // "Renato Guarato",
        // "Rodrigo Siqueira Coelho",
        // "Rodrigo Videschi",
        // "Rômulo Nascimento",
        // "Stanley Gomes",
        // "Thais Ribeiro",
        // "Tiago M.Souza",
        "Tácio Medeiros",
        "Uilian Silva",
        "Victor Martins Guerra",
        "Vinhal",
        "Washington Soares",
        "Willie Oliveira",
        "Zelcia Bebiano",
    ]

    function delay (timeout) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeout)
        })
    }

    // (async () => {
    //     console.log('start');
    //     console.time('delay');
    //     await delay(3000);
    //     console.timeEnd('delay');
    // })();

    for (let i = 0; i < attendees.length; i += 1) {
        await page.pdf({
            path: `${attendees[i]}.pdf`,
            format: 'A4',
            landscape: true,
            printBackground: true
        });
        await delay(1400);
        console.log(attendees[i])
    }

    await browser.close()
    
})()