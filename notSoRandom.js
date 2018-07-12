function randomNumber(x){
    const decimal= Math.random();
    const timesNumber= decimal*x;
    const final= Math.floor(timesNumber);
    console.log(final);
}
randomNumber(10);
randomNumber(100);
randomNumber(2);
function randomLetter(x){
    const decimal= Math.random();
    const timesNumber= decimal* x.length;
    const final= Math.floor(timesNumber);
    console.log(x[final]);
}

randomLetter("blah");
randomLetter("abcdefg");
randomLetter("z");
function myGuy(x){
    console.log(`${x}, my guy`)
}
myGuy("Take it easy")
function stringNumber(x,y){
    for(i=0;i<y;i++){
        console.log(x);
    }
}
stringNumber("Don't tell me what to do", 12);
function hypotenuse(a,b){
    console.log(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
}
hypotenuse(3,4);