const ourList = document.getElementById('ourList');
let a = "a";
let b = "b";
let c = "c";
let d = "d";

let list = [a,b,c,d];

const k = list.length - 1;

ourList.innerText = spin(3);

function spin(x) {
let spunList = list;
    for(let i = 0; i < x; i++) {
        spunList = advanceList(spunList);
    }
return spunList;
};


function advanceList(list) {
    let revisedList = [];
    for (let i = 0; i <= k; i++) {
        if (i === 0){
            revisedList[k] = list[0];
        } else {
            revisedList[i - 1] = list[i];
        };
    }; return revisedList;
};







// [1,2,3,4]
// [4,1,2,3]
// [3,4,1,2]
// [2,3,4,1]
// [1,2,3,4]

// let k = list.length;

// for (let i = 0; i <= k; i ++) {
//     list[i + 1] = list[i]
//     if (i === k) {
//         list[i] = list[0];
//     }


// }