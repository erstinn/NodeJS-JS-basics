function range (start, stop, step){
    try {
        var array = []

        if (stop < 0 && step > 0){
            throw error
        }
        else{
            if (step > 0){
                for (i = start; i < stop; i++) {
                    //last element + step
                    let last_elem = array.slice(-1)
                    if (i === start)
                        array.push(start)
                    
                    if (i%step === 0)
                      array.push(+last_elem + step)
                }
            }
            else{
                //last element - step
                for (i = start; i >= stop; i--) {
                    if (i === start){
                        array.push(start)
                        continue
                        }
                    array.push(array.slice(-1) - -step)
                    // TODO can also use: array.push(array.slice(-1) - Math.abs(step)) 
                    // for some reason some number minus - (-negativenum) 
                    // outputs a string or a positive whateverthefuck

                }
            }
        }
        return array
    } catch (error) {
        
    }
} 

console.log(range(5,2,-1))
console.log(range(1, 10, 2))