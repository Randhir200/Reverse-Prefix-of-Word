var reversePrefix = function(word, ch) {
    let ind;
    for(i=0;i<word.length;i++){
        if(ch == word[i]){
            ind = i;
            break;
        }
    }
    let bag = "";
    for(i=ind;i>=0;i--){
       bag+=word[i] 
    }
    
     for(i=ind+1;i<word.length;i++){
       bag+=word[i] 
    }
    if(!ind){
        return word;
    }
    return bag;
};

console.log(reversePrefix("randhir", "d"))