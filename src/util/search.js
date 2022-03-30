import coins from '../../coins.js'
import defiant from 'defiant.js';


 
var snapshot = defiant.getSnapshot(coins);
found = defiant.search(snapshot, '//item');

console.log(search)
