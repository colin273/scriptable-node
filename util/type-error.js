module.exports = (expected, got) => {
    return new Error(`Expected value of type ${expected} but got value of type ${got}.`)
}