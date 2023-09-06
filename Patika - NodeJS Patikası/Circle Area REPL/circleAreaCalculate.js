const args = process.argv.slice(2);
const yaricap = parseFloat(args[0]);
const alan = Math.PI * Math.pow(yaricap, 2);

console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
