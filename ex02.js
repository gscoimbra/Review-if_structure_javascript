const ano = 2005; // Coloque o ano aqui

if ((ano % 4 == 0 && ano % 100 !== 0)|| (ano % 400 == 0)) {
    console.log(`${ano} é um ano bissexto`)
} else {
    console.log(`${ano} não é um ano bissexto`)
}

