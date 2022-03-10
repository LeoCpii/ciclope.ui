function setTheme(theme) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `../dist/themes/${theme}.css`;

    var body = document.getElementsByTagName('BODY')[0];
    body.classList.add(theme);    

    head.appendChild(link);
}

setTheme('vanzosaura');