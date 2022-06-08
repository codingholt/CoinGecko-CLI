function checkErr(response){
    if(response.hasOwnProperty('error')) {
        console.error(`Coingecko returns error: \n\n ${response['error']}`)
        process.exit();
}}

export {checkErr}