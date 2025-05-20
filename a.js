// We can export js object {p:v, method()}

let Company = {
    Name:"Dior",
        owner:{
            rating:"95"
        }
    }


//I can export anything
// there are 2 ways to export anything
//1. default export
//2. named export export {exportelement1,exportelement2,exportelement3....}
// named export list
// named export list while renaming
export {Company as firm};// Alias, urf