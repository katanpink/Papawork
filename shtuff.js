//question 1
function celciusToFarenheit(t){
    let f = (t*1.8)+32
    return f
}

//question 2
function isLeapYear(y){
    if (!y%100 && y%4 || y%400){
        return true
    } else {
        return false
    }
}

//question 3
    function factorial(n){
        if (n == 0) {
            return 1
        } else {
            let v = 1
            for (i=1;i <= n; i++) {
                v *= i
            }
            return v
        }
    }

//question 4
function codespace(){
    for (i=1; i <= 100; i++){
        if (i%3 && i%5){
            console.log('FizzBuzz')
        }
        else if (i%3){
            console.log('Fizz')
        }
        else if (i%5){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

//question 5
function getNaturalSum(n) {
    let v = 0
    for (i=1; i<=n; i++){
        v += i
    }
    return v
}

//question 6
function codespace1(){
    var status = "processing"
    switch(status) {
        case "processing":
            //first
        case "paid":
           //second
        case "new":
            //third
        default:
            //fourth
    }
}

//question 7 
function groceryPrice(exp){
    switch(exp) {
        case 'Cookies':
            console.log('Cookies cost 100 rupees')
            break;
        case 'Milk':
            console.log('Cookies cost 100 rupees')
            break;
        case 'Fruits':
            console.log('Cookies cost 100 rupees')
            break;
        case 'Corn Flakes':
            console.log('Cookies cost 100 rupees')
            break;
        default:
            console.log(exp + ' is not available right now')
    }
}

groceryPrice('Cookies')

groceryPrice('Fruits')

groceryPrice('Peanut')