
//Iterative Approach to fib
function fib(n){
    let arr = [1,1];
    if(n == 0){
        return [1];
    }
    if(n == 1){
        return [1,1];
    }
    while(n >= 2){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
        n--;
    }
    
    return arr;
}

//Recursive Approach to fib
function fibRecurse(target, current = 0 , arr = []){
    if(current == target){
        return arr;
    }
    if(current == 0 || current == 1){
        arr.push(1)
        return fibRecurse(target, current + 1, arr);
    }
    else{
        arr.push(arr[current-1] + arr[current - 2])
        return fibRecurse(target, current + 1, arr);
    }
}

//Recursive Mergesort
function mergeSort(arr){
    if(arr.length == 1){
        return arr
    }

    let arr1 = arr.slice(0, arr.length/2);
    let arr2 = arr.slice(arr.length/2, arr.length);

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    return merge(arr1, arr2);
}

//Inner merge function
function merge(arr1, arr2){
    let tempArr = [];

    while(arr1.length !== 0 && arr2.length !== 0){
        if(arr1[0] < arr2[0]){
            tempArr.push(arr1[0]);
            arr1 = arr1.slice(1, arr1.length);
        }
        else {
            tempArr.push(arr2[0]);
            arr2 = arr2.slice(1, arr2.length);
        }
    }

    while(arr1.length !== 0){
        tempArr.push(arr1[0]);
        arr1 = arr1.slice(1, arr1.length);
    }

    while(arr2.length !== 0){
        tempArr.push(arr2[0]);
        arr2 = arr2.slice(1, arr2.length);
    }

    return tempArr;
}
