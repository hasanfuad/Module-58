const numberList = [23, 98, 2, 83, 29, 28, 1];

function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if(array[j] > array[j+1]) {
                const temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
            
        }
        
    }
    return array;
}

const sorted = bubbleSort(numberList);
console.log(sorted);