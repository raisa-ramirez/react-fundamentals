export function getFinalState(baseState, queue) {
    let finalState = baseState;
    queue.forEach(element => {
        if(typeof element === 'function'){
            finalState = element(finalState)
        } else {
            finalState = element
        }
    });  
  
    return finalState;
}  