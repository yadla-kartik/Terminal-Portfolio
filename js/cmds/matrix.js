export let matrixInterval = null;

export default async function matrix(output, history) {
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    if (matrixInterval !== null) {
        output.innerHTML += "\n<span data-color='yellow'>Matrix is already running. Press Ctrl+C to stop.</span>\n";
        return;
    }

    output.innerHTML += "<span data-color='#00ff99'>Initializing Matrix Rain Mode… (Press Ctrl+C)</span>\n";
    await sleep(2000);

    let chars = "01+░=-▓*<▮>";
    let frame = 0;

    matrixInterval = setInterval(() => {
        let line = "";
        let width = 120; 

        for (let i = 0; i < width; i++) {
            line += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        output.innerHTML += `<span data-color="#00ff99">${line}</span>\n`;
        frame++;

        window.scrollTo(0, document.body.scrollHeight);

        if (frame % 200 === 0) {
            output.innerHTML = output.innerHTML.split("\n").slice(100).join("\n");
        }

    }, 50);
}
