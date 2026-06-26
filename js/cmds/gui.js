const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function typeLine(output, line, speed = 35) {
    if (line.includes("<")) {
        output.innerHTML += line + "<br>";
        window.scrollTo(0, document.body.scrollHeight);
        return;
    }

    for (const char of line) {
        output.innerHTML += char;
        window.scrollTo(0, document.body.scrollHeight);
        await sleep(speed);
    }

    output.innerHTML += "<br>";
}

export default async function gui(output) {

    setTimeout(() => {
        window.open(
            "https://why-kartik.vercel.app/",
            "_blank",
            "noopener,noreferrer"
        );
    }, 9000);

    const lines = [
        "> Launch request received...",
        "> Opening GUI Portfolio...",
        "",
        "Experience my modern portfolio with",
        "immersive animations, interactive UI,",
        "and premium design.",
        "",
        "🌐 Opening GUI Portfolio in a new tab...",
        "",
        "If the GUI doesn't open automatically,",
        "click the link below:",
        "<a href='https://why-kartik.vercel.app/' target='_blank' style='color:#00ff88;text-decoration:underline;'>https://why-kartik.vercel.app/</a>",
        "",
        "> Redirect complete.",
        "> Enjoy the experience.",
        "",
        "Meanwhile, you're still inside the Terminal Portfolio.",
        "Type <span style='color:#00ff88'>help</span> to explore this terminal",
        "or continue browsing the GUI Portfolio. 💻✨"
    ];

    for (const line of lines) {
        await typeLine(output, line);
        await sleep(120);
    }
}