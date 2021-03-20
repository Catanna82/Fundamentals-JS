function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  console.log(isPrime(81));

isPrime(7);
isPrime(8);
isPrime(81);
