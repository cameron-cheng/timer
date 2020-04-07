const delay = process.argv.slice(2)

for (time of delay) { 
  if (Number(time) && Number(time) >= 0 ) {
    setTimeout(() => {
      process.stdout.write('.');
    }, Number(time));
  }
 

}


