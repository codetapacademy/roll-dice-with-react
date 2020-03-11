export const getDice = (length = 3) => Array.from({length}, () => ~~(Math.random() * 6) + 1)
