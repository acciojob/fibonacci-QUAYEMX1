function fibonacci(num) {
// your code here

 if(num<=1) return num;
 // if(num==2) return 1;

	return fibonacci(num-1)+fibonacci(num-2);
	
}

module.exports = fibonacci;
