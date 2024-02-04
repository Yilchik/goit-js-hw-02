function checkForSpam(message) {
  let messageLast = message.toLowerCase();
  let messageSpam = messageLast.includes('spam');
  let messageSale = messageLast.includes('sale');
  if (messageSpam === true || messageSale === true) {
    return true;
  } else {
    return false;
  }
}
checkForSpam();

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
