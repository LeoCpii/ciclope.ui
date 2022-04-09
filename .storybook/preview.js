function setTheme(theme, mode) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `../dist/themes/${theme}.css`;

    var root = document.createElement('link');
    root.rel = 'stylesheet';
    root.type = 'text/css';
    root.href = `./.storybook/default.css`;

    var body = document.getElementsByTagName('BODY')[0];
    body.classList.add(theme);
    body.classList.add(mode);
    head.appendChild(link);
    head.appendChild(root);
}

setTheme('default', 'light');
