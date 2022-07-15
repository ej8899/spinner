//
// LHL - spinner2.js
// basic ASCII spinner in console
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/389?journey_step=32&workbook=7
//
// USAGE: spinner2.js spinTimes spinSpeed
// spinTimes is OPTIONAL and otherwise denotes number of times for a full spin
// spinSpeed is OPTIONAL and otherwise denotes MILLISECONDS between each flip


let spinIcon=['|','/','-','\\','|', '/','-','\\'];

let spinTimes = Number(process.argv[2]); // skip error checking for time saving
if (!spinTimes) {
  spinTimes = 1; // DEFAULT VALUE
}

let spinSpeed = Number(process.argv[3]); // skip error checking for time saving
if (!spinSpeed) {
  spinSpeed = 200; // DEFAULT VALUE
}

let spinTimer = 0; // starting timer
for (let y = 1; y < spinTimes+1; y++) { // start at 1 to avoid a ZERO in spinSpeed
  // create a SINGLE spin:
  for (let x = 0; x < spinIcon.length; x ++) {
    spinTimer += spinSpeed; // INC the timeout delay for each interation
  
    setTimeout(() => {
      process.stdout.write(`\r${spinIcon[x]}   `);
    }, spinTimer);
  
  }
}