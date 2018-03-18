//Method to find whether number is prime or not
function isPrime(num) {
	if(isNaN(num) || num < 1 ){
		console.log("Enter valid input");
	}
	else {
		for(var i = 2; i < num; i++)
   		if(num % i === 0) return console.log("Number is not a prime");
  		return num = console.log("Number is a prime");
	}
}