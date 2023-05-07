function delay() {
    return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 1000)));
}

module.exports = delay;
