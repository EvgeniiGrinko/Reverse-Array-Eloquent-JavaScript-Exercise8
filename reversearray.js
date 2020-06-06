let samplearray = [5, 4, 3, 2];
let newarray = [];
let reversearray = function(array){
for(let i = array.length-1; i>-1;i--){
    newarray.push(array[i]);
    
}
return newarray;
}
reversearray(samplearray);

