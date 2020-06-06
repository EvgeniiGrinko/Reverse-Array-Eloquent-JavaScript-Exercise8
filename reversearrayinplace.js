let samplearray = [2,5,6,1,7,4,56,12,34,32,30,0,1];
let reversearaayinplace = function(array){
    n = array.length;
    let middle = Math.floor(array.length/2);
    temp = null;
    for(let i = 0;i<middle;i++){
        temp = array[i];
        array[i] = array[n-1-i];
        array[n-1-i]=temp
    }
    return array
}
reversearaayinplace(samplearray);