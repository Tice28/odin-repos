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

    const getTail = () => {
        let temp = head;
        let next = temp.hasNext();
        while(next){
            temp = temp.getNext();
            next = temp.hasNext();
        }
        return temp;
    }

    const at = (index) => {
        if(index > getSize() - 1){
            console.error("Bad index");
            return null;
        }
        else{
            let i = 0;
            let temp = head;
    
            while(i < index){
                temp = temp.getNext();
                i = i+1;
            }
    
            return temp;
        }
    }

    const pop = () => {
        let temp = head;
        let val;
        console.log(temp.getVal());
        while(temp.getNext().hasNext()){
            temp = temp.getNext();
            console.log(temp.getVal());
        }
        
        val = temp.getNext();
        temp.setNext();
        return val;
    }

    return {
        getHead,
        getSize,
        prepend,
        append,
        getTail,
        at,
        pop
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

    const setNext = (nodeNext="null") =>{
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
const node2 = createNode(8);
const node3 = createNode(3);
const node4 = createNode(5);
//5 0 3 8
const linkedList = createLinkedList(node);
linkedList.append(node3);
linkedList.append(node2);
linkedList.prepend(node4);
