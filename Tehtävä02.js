
const syt = (p, q) => q === 0 ? p : syt(q, p%q)

console.log(syt(102, 68))
console.log(syt(35, 18))
console.log(syt(2154, 458))

//Tehtävä 4
const pw = (n, p) => p > 1 ? n * pw(n, p-1) : n

//Tehtävä 5
const reverse (o)(
function r(n, o){
if (o.length < 1) return n
	n.push(o.pop())
return r
})([])