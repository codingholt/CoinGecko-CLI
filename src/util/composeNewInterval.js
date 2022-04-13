function composeNewInterval(arr, nth){
    const result = [];

    for(let i = 0; i < arr.length; i+=nth){
        result.push(arr[i])
    }

    if(arr[arr.length-1] !== result[result.length-1]){
        result.push(arr[arr.length-1])
    }

    
    return result;
}

export{composeNewInterval}