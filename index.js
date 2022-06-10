// code your solution here
function superbowlWin(array){
    function test(w){
        return (w.result === 'W')
    }
    if (array.find(test)){
     return array.find(test).year
    }
}