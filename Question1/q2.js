  

  const string=function(str){
  var words= str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    console.log(words.join(" "));
    return words;
    }
    
    string("hi hello welcome");