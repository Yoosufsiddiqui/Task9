//1
function reverseThisString(string) {
    let splits = string.split("");
    let reverses = splits.reverse();
    return reverses.join("");
}
//2
function swapCase(string) {
    let final = "";
    for (let i = 0; i < string.length; i++) {
        const n = string[i];
        if (n === n.toLowerCase()) {
           final += n.toUpperCase(); 
        } else if(n === n.toUpperCase()) {
            final += n.toLowerCase();
        }
    }
    return final;
}
//3
function toCelcius(array) {
    return array.map((s) => ((s - 32) * 5) / 9);
  }
//4
function passOrFail(array) {
    return array.map((numbers) => numbers > 70);
  }
//5
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    var FinalArray = [];
    for(var i=0; i<cardinalNumbers.length; i++){
        FinalArray[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
    }
    return FinalArray;
}
//6
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const primeNumbers = numbers.filter((number)=>{
        if (number <= 1)
            return false;
        for (let i = 2; i < number; i++)
            if (number % i == 0)
                return false;
        return true;
    });
    return primeNumbers;
}
//7
function loopThroughArray(){
    for(let number=1; number<=100; number++){
      if(number % 3 == 0 && number % 5 == 0)
        console.log("CSC225 RULES I LOVE JAVASCRIPT");
      else if(number % 3 == 0)
        console.log("CSC225 RULES");
      else if(number % 5 == 0)
        console.log("I LOVE JAVASCRIPT");
      else
        console.log(number);
    }
}
loopThroughArray();