import puppeteer from 'puppeteer'

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000');

    const attendees = [
        "Aline Marinho",
        "Aline DAngelo",
        "Carlos Langoni",
        "Cesar William",
        "Claudio Santos",
        "Clenio Oliveira",
        "Danniel Sousa",
        "Eduardo Costa de Paiva",
        // "Eduardo Gonçalves Costa",
        "Felipe Freitas",
        "Fernando Garcia",
        "Filipe Forattini",
        // "Isabela Sousa Guimarães",
        "Isac",
        // "Joao Paulo Avila",
        "Jorcelino Júnior",
        "Leonardo Pimentel",
        // "Lucas Vilaboim",
        // "Lucas Menezes",
        "Mateus Henrique",
        "Matheus Eduardo",
        // "Pablo Henrique Penha Silva",
        "Rafael Ericson",
        "Renato Rodrigues",
        "Rodrigo Reis",
        "Tarcísio Abadio de Magalhães Júnior"
        // "Thalys Guimarães"
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
        await delay(2000);
        console.log(attendees[i])
    }

    await browser.close()
    
})()