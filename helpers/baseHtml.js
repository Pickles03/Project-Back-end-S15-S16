function baseHtml(title = 'Clothing Store', bodyContent = '') {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="/styles.css">
        <script src="/script.js" defer></script>
    </head>
    <body>
        <header>
            <h1>${title}</h1>
        </header>
        <main>
            ${bodyContent}
        </main>
    </body>
    </html>
    `;
};

module.exports = baseHtml;