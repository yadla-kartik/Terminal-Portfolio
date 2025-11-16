const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function typeLine(output, line, speed = 40) {
    for (let char of line) {
        output.innerHTML += char;
        window.scrollTo(0, document.body.scrollHeight);
        await sleep(speed);
    }
    output.innerHTML += "\n";
}

export default async function gui(output) {

    const lines = [
        "✨ GUI Portfolio Activated… ",
        "",
        "System Status: Processing…",
        "⌛ Please wait… something went wrong…",
        "🤔 thinking… thinking… thinking…",
        "",
        "⚠️ ALERT: GUI is still cooking!🔥",
        "",
        "But don’t worry...",
        "Your fully animated GUI portfolio is dropping in 50 days — get ready! 🚀🔥",
        "",
        "Until then, relax and enjoy the terminal experience. 😌",
        "This shell will keep you company until the GUI is ready. 💻",
        "",
        "(P.S. Type 'help' anytime you need me.)"
    ];

    for (let line of lines) {
        await typeLine(output, line, 20);
        await sleep(120);
    }
}
