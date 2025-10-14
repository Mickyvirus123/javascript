const accountId  = 12345
let accountEmail = "ali1234@gmail.com"
var accountPassword = "ali786@#"
accountCity = "delhi"
let accountState;

// accountId = 2 // not allowed to change constant
accountEmail = "khan@gmail.com"
accountPassword = "09876"
accountCity = "mumbai"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


