function checkErr(response){
    if(response.hasOwnProperty('error')) {

        //CALL THE SEARCHFUNC FOR OTHER COINS


        // IF SEARCH IS NO RESULT
        console.error('COIN COULD NOT BE FOUND IN THE DATABASE, PLEASE USE THE API-ID AS PROVIDED ON COINGECKO.COM FOR THE BEST RESULTS')
        process.exit();
}}

export {checkErr}