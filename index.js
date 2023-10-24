// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() { 
        return this.data.length
      //return the count of numbers in data
    }
    printNumbers() {
       this.data.forEach(function(print) {
        console.log(print)
       });
      //print the numbers in data
    }
    odds() {
        let arr=[];
        for(let i=0;i<Numbers.length;i++)
        if (Numbers[i] %2!==0)
        arr.push(Numbers[i])
    return arr


      //return the odd numbers in data
    }
    evens() {
    let arr=[];
    for (let i=0;i<Numbers.length;i++)
    if (Numbers[i]%2===0)
    arr.push(Numbers[i]);
return arr
      //return the even numbers in data
    }
    sum() {
        let sum=0;
        for (let i=0;i<Numbers.length;i++)
        sum+=Numbers[i]
    return sum
      //return the sum of the numbers
    }
    product() {
        let product= 1;
        let i;
        for (i = 0; i < Numbers.length; i += 1) 
           {
            product *= Numbers[i];
            }
        //console.log(` Product :  ${product}`); 
        return product}
        
      //return the product of the numbers
    
    greaterThan(target) {
      let targetLarger=(numbers,target)=>{
        return numbers.map(i=>i>target ? i:'').filter(Boolean)
          }
        
        }
}
      
  

  

      //return the numbers greater than the target
    
    //howMany(target) {
      //return the count of a given number
   //}
 // }
  
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number