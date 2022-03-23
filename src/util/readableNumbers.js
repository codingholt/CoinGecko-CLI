let readableNumber = (num,intSep = ',',floatSep = '.') => {

    return new Intl
       .NumberFormat('en-US')
       .format(num)
       .replaceAll('.',floatSep)
       .replaceAll(',',intSep);
   
   }

export {readableNumber}