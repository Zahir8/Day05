function main(){

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";

    var wordBlanks = "My " + myNoun + " can " + myVerb + " " + myAdverb + " and has " + myAdjective + " teeth" + ".";
    
    return wordBlanks;

}
console.log(main());
module.exports = main;