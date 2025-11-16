const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function type(output, text, speed = 40) {
    for (let char of text) {
        output.innerHTML += char;
        await sleep(speed);
    }
    output.innerHTML += "\n";
    window.scrollTo(0, document.body.scrollHeight);
}

export default async function trace(output) {
    const fakeIPs = [
        "192.168.0.1",
        "10.22.56.90",
        "172.16.88.4",
        "203.55.112.9",
        "45.90.22.17"
    ];

    await type(output, "🌐 Initiating IP Trace…");
    await sleep(300);

    for (let ip of fakeIPs) {
        await type(output, `Tracing → ${ip} …`);
        await sleep(300);
    }

    await type(output, "");
    await type(output, "Location Identified: 🌍 ");
    await type(output, "Source: The Internet 😎 (obviously fake)");
    await type(output, "");
    await type(output, "Relax bro, no real tracing happens here.");
}
