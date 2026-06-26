export default function (output) {
    output.innerHTML += `
Opening Resume...

If it doesn't open automatically, use the link below:

<a href="https://kartik-resume-gamma.vercel.app/Kartik_Resume.pdf" target="_blank" style="color:#00ff88;text-decoration:underline;">
https://kartik-resume-gamma.vercel.app/Kartik_Resume.pdf
</a><br>
`;

    setTimeout(() => {
        window.open(
            "https://kartik-resume-gamma.vercel.app/Kartik_Resume.pdf",
            "_blank",
            "noopener,noreferrer"
        );
    }, 500);
}
