export const dec = () => ({type: 'DEC'});
export const inc = () => ({type: 'INC'});
export const rnd = (value) => {
    return {type: 'RND', value: Math.floor(Math.random() * 10)}
};