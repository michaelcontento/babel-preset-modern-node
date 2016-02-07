const job = new Promise((resolve) => {
    resolve(42);
});

job.then((result) => {
    if (result !== 42) {
        process.exit(1);
    }
});
