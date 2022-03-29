function checkErr(response){
    if(response.hasOwnProperty('error')) {
        console.error(response['error'])
        return;
}}

export {checkErr}