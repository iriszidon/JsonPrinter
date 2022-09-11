let jsonLevel = 0;

module.exports = {

    getStructure: async function (simpleObject) {
        console.log('\nObject:\n--------------------');
        printSimpleObject(simpleObject);
        console.log('\nDone :) \n');
        return simpleObject;
    },
}

//Nir's code
// var tabs = '';
// function printSimpleObject(simpleObject) {
//     if (typeof simpleObject === 'object') {
//         console.log(`${tabs}Object:\n${tabs}--------------------`);
//         for (const property in simpleObject) {
//             if (typeof simpleObject[property] === 'object') {
//                 tabs += '   ';
//                 console.log(`${tabs}${property}=`);
//                 printSimpleObject(simpleObject[property]);
//             } else {
//                 console.log(`${tabs}${property}=${simpleObject[property]}`);
//             }
//         }
//     }
// }


// My code
function printSimpleObject(simpleObject) {
    const entries = Object.entries(simpleObject);
    const keys = Object.keys(simpleObject);
    if (entries) {
        keys.forEach(element => {
            if (typeof simpleObject[element] === 'object') {
                jsonLevel += 1;
                console.log(`${element} = `);
                console.log('Object:\n--------------------'); 
                // process.stdout.write(getTabs(jsonLevel));          
                printSimpleObject(simpleObject[element]); 
                jsonLevel -= 1; 
            }
            else { 
                console.log(`${getTabs(jsonLevel)}${element} = ${simpleObject[element]}`);
            }
        });
    }
}

function getTabs(level){
    let tabs = '';
    for (let index = 0; index < level; index++) {
        tabs += '   '; 
    }
    return tabs;
}


/*
Object:
----------------------------------------
age = 55
name = 
Object:
----------------------------------
    firstName = "Luke"
    lastName = "Skywalker"

*/