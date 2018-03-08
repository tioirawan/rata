module.exports = (data, con = ' ') => {
    const length = data.reduce(
        (acc, curr) => (curr[0].length > acc[0].length ? curr : acc)
    )[0].length

    let res = ''

    for (let d of data) {
        const space = '\u0020'.repeat(length - d[0].length)
        const end = d[0] === data[0][0] ? '' : '\n'

        res += end + d[0] + space + con + d[1]
    }

    return res
}
