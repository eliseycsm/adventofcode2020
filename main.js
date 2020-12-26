//readfile
const fs = require('fs')
/* async readFile
const input = ''
fs.readFile('input.txt', (err, data) => console.log(data.toString())) 
*/
const input = fs.readFileSync('./input.txt', 'utf8')   
//console.log(input)
const arr = input.split('\n').map(e => parseInt(e)).sort().reverse()
//sort by number value need to add function(a, b){return a-b} into sort()
//advent day01: find the two entries that sum to 2020 and then multiply those two numbers together.
//brute force method of O(n^2): get first entry and search for corresponding value in rest of entry: (n-1) + (n-2) + ...

const numSet = new Set(arr)
//console.log(numSet)
for (elem of arr){
    let corrValue = 2020 - elem
    if (numSet.has(corrValue)){
        console.log("elem: ", elem)
        console.log(corrValue * elem)   
    }
}

// the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
// In your expense report, what is the product of the three entries that sum to 2020?