// let obj = {
//     a: {
//         a: {
//             a: {
//                 a: {
//                     num: 4
//                 },
//                 num: 3
//             }
//         },
//         num: 1
//     }
// }
// let f = (a, sum) =>
//     (a.a && typeof a.num === 'number') ? f(a.a, sum + a.num) : (typeof a.num !== 'number' && 'a' in a) ? f(a.a, sum) : (typeof a.num === 'number' && !('a' in a)) ? sum + a.num : sum;
// console.log(f(obj.a, 0))

let map = new Map();
map.set(1, [1,2,3])
map.set(2, [4,5,6])
map.get(1).push(4);
console.log(map);