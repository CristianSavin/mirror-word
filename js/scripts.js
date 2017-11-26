var word = prompt("Introduceti un cuvint");
var word_tmp = "";
for(var i = 1; i <= word.length; i++){
    if(i % 2){
        word_tmp += word.substring(i, i + 1 ) +  word.charAt(i - 1);
    }
}
document.write(word_tmp);