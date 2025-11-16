const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function type(output, text, speed = 35) {
    for (let char of text) {
        output.innerHTML += char;
        await sleep(speed);
    }
    output.innerHTML += "\n";
    window.scrollTo(0, document.body.scrollHeight);
}

export default async function hackmode(output) {

    const lines = [
        "Initializing Hackmode Protocol… ⚡",
        "",
        "[✔] Establishing secure connection…",
        "[✔] Injecting encrypted payload…",
        "[✔] Bypassing firewall…",
        "[✔] Spoofing identity…",
        "",
        "Running exploit sequence…",
        "→ payload.exe executing…",
        "→ encrypting target system logs…",
        "→ gaining elevated admin privileges…",
        "",
        "ACCESS GRANTED 🟢",
        "",
        "Okay okay, relax 😅",
        "This isn’t real hacking.",
        "",
        "I'm a Web Developer, not a hacker. 💻⚡",
        "Just added this mode for fun and terminal vibes. 😎",
        "",
        "(P.S. Type 'help' to continue exploring.)"
    ];

    for (let line of lines) {
        await type(output, line);
        await sleep(150);
    }
}
