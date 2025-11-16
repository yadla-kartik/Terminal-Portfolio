export default function(output, _hist, ...args) {
    let social = args[0];
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
    switch (social) {
        case 'GitHub':
            window.open('https://github.com/yadla-kartik');
            break;
        case 'Email':
            window.open('mailto:ykarthik204@gmail.com');
            break;
        case 'LinkedIn':
            window.open('https://www.linkedin.com/in/yadla-kartik-8a9357272/');
            break;
        default:
            output.innerHTML += `\
<span data-color="white">Github: <a href="https://github.com/amanraox">yadla-kartik</a></span>
<span data-color="#00ff99">Email: <a href="mailto:ykarthik204@gmail.com">ykartik@gmail.com</a></span>;
<span data-color="#00ff99">Linkedin: <a href="https://www.linkedin.com/in/yadla-kartik-8a9357272/">Yadla Kartik</a></span>`;
        return;
    }
}
