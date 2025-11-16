export default function themes(output, history, name) {
    const themes = {
        hacker:  { bg: "#000000", fg: "#00ff00" },
        neon:    { bg: "#00031F", fg: "#3EBEFF" },
        pink:    { bg: "#1A001F", fg: "#FF38D1" },
        matrix:  { bg: "#000000cc", fg: "#00ffa6" },
        dracula: { bg: "#282a36", fg: "#bd93f9" },
        solar:   { bg: "#002b36", fg: "#b58900" }
    };

    // If no argument → show list
    if (!name) {
        output.innerHTML += 
           "\nAvailable themes:\n" +
    "<span data-color='#00ff99'>hacker, neon, pink, matrix, dracula, solar</span>\n" +
    "Usage → <span data-color='cyan'>themes &lt;theme-name&gt;</span>\n" +
    "Example → <span data-color='#00ff99'>themes hacker</span>\n";
        return;
    }

    if (!themes[name]) {
        output.innerHTML += `<span data-color='red'>Unknown theme: ${name}</span>\n`;
        return;
    }

    // Apply theme
    document.body.style.background = themes[name].bg;
    document.body.style.color = themes[name].fg;

    output.innerHTML += 
        `<span data-color='${themes[name].fg}'>Theme switched to "${name}".</span>\n`;
}
