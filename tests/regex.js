if ('𠮷'.match(/^.$/u)[0].length !== 2) {
    process.exit(1);
}

if ('𝌆'.match(/\u{1d306}/u)[0].length !== 2) {
    process.exit(1);
}
