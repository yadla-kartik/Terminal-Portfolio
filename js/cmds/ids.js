const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function type(output, text, speed = 30) {
    for (let c of text) {
        output.innerHTML += c;
        await sleep(speed);
    }
    output.innerHTML += "\n";
    window.scrollTo(0, document.body.scrollHeight);
}

export default async function ids(output) {
    const lines = [
        "🔐 Initiating IDS Bypass Sequence…",
        "",
        "[>] Probing firewall signatures…",
        "[✔] Weak rule-set detected.",
        "",
        "[>] Deploying spoof packets…",
        "[✔] Packet injection successful.",
        "",
        "[>] Overriding intrusion triggers…",
        "[✔] IDS signature table overloaded.",
        "",
        "[✓] Intrusion Detection System Bypassed!",
        "",
        "Relax 😂 It's all fake. I’m a developer, not a hacker.",
    ];

    for (let l of lines) await type(output, l, 35);
}
