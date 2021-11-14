function maxMinAvg(array){
    let sum=0;
    let min=array[0];
    let max=min;

    for(let i=0; i<array.length;i++){
        sum+=array[i];
        if(array[i]>max){
            max=array[i];
        }
        if(min>array[i]){
            min = array[i];
        }

    }
    let avg= sum/array.length;

    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg}.`

}


console.log(maxMinAvg([1,-2,9,4]));