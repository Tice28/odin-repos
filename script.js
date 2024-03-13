// Linked List Factory

function createLinkedList(node = null){
    let head = node;
    let size = node != null ? 1 : 0;

    const getHead = () =>{
        return head;
    }

    const getSize = () =>{
        return size;
    }

    const incrementSize = () =>{
        size++;
    }

    const decrementSize = () =>{
        size--;
    }

    const prepend = (node) =>{
        let temp = getHead();
        head = node;
        head.setNext(temp);
        incrementSize();
    }

    const append = (node) =>{
        let temp = head;
        let next = temp.hasNext();
        while(next){
            temp = temp.getNext();
            next = temp.hasNext();
        }
        temp.setNext(node);
        incrementSize();
    }

    return {
        getHead,
        getSize,
        prepend,
        append
    }
}

//Node Factory

function createNode(nodeVal="null", nodeNext="null"){
    let val = nodeVal;
    let next = nodeNext;

    const getVal = () => {
        return val;
    }

    const getNext = () => {
        return next;
    }

    const setVal = (nodeVal) =>{
        val = nodeVal;
    }

    const setNext = (nodeNext) =>{
        next = nodeNext;
    }

    const hasNext = () =>{
        if(next !== "null"){
            return true;
        } 
        else{
            return false;
        }
    }

    return {
        getVal,
        getNext,
        setVal,
        setNext,
        hasNext
    }
}

const node = createNode(0);
console.log(node.hasNext())
const node2 = createNode(8);
const linkedList = createLinkedList(node);
