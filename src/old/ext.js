const pi=Math.PI;
const rad=10;
const area=+(pi*rad*rad).toFixed(2);

//module.exports=area;                // export single

//exports.a=area;
//exports.r=rad;

export { area as area };