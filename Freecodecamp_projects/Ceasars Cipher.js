function rot13(str) {
    let rotString = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] = str[i].toUpperCase()){
            rotString += i.String.fromCharCode((i.charCodeAt(0)+13))
        }
        else{
            rotString += i
        }
    }

    return rotString;
}

console.log(rot13("SERR PBQR PNZC"));