export function hash(){
    let timed = new Date().getTime().toString(16);
    let random = Math.random().toString(16);
    return timed+random;
}