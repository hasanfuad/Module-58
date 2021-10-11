const numberList = [20, 9, 1, -5, -2, 10, 99, 9, 10, 300, 12];

function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        let min = i;
    for (let j = i+1; j < array.length; j++) {
        if(array[min] > array[j]){
            min = j;
        }
        
    }
    const temp = array[min];
          array[min] = array[i];
          array[i] = temp;
        
    }
    return array;
}

const sorted = bubbleSort(numberList);
console.log(sorted);