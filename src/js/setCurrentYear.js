const copyrightDOM = document.querySelector('#copyright');

const currentYear = new Date().getFullYear();
copyrightDOM.textContent = `©${currentYear} ${copyrightDOM.textContent}`;