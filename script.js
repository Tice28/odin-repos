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
        if(node == undefined){
            console.error("Error: invalid node");
            return;
        }

        let temp = getHead();
        head = node;
        head.setNext(temp);
        incrementSize();
    }

    const append = (node) =>{
        if(node == undefined){
            console.error("Error: invalid node");
            return;
        }

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
        if(index > getSize() - 1 || index < 0 || index == undefined){
            console.error("Error: bad index");
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
        while(temp.getNext().hasNext()){
            temp = temp.getNext();
        }
        
        val = temp.getNext();
        temp.setNext();
        decrementSize();
        return val;
    }

    const contains = (value) => {
        if(value == undefined){
            console.error("Error: no argument listed");
            return null;
        }

        let temp = head;
        while(temp.hasNext()){
            if(temp.getVal() == value){
                return true;
            }
            temp = temp.getNext();
        }
        if(temp == getTail()){
            if(temp.getVal() == value){
                return true;
            }
        }

        return false;
    }

    const find = (value) => {
        if(value == undefined){
            console.error("Error: no argument listed");
            return null;
        }
        
        let i = 0;
        let temp = head;
    
        while(temp.getVal() != value && temp.hasNext()){
            temp = temp.getNext();
            i++;
        }
        if(temp.getVal() == value){
            return i;
        }
        else{
            return null;
        }
        
    }

    const toString = () => {
        let temp = head;
        let s = "";
        
        if(getHead() == "null"){
            return "";
        }

        while(temp.hasNext()){
            s = s + (`(${temp.getVal()}) => `);
            temp = temp.getNext();
            
        }
        s = s + (`(${temp.getVal()}) => null`);

        return s;
    }

    const insertAt = (node, index) => {
        if(index > getSize()+1 || index < 0 || index == undefined){
            console.error("Error: bad index");
            return null;
        }
        if(node == undefined){
            console.error("Error: invalid node");
            return null;
        }
        else{
            if(index == 0){
                prepend(node);
                incrementSize();
                return true;
            }
            if(index == getSize()){
                append(node);
                incrementSize();
                return true;
            }
            
            let i = 0;
            let temp = head;

            while(i < index-1){
                temp = temp.getNext();
                i++;
            }

            node.setNext(temp.getNext());
            temp.setNext(node);
            incrementSize();

            return true;
        }
    }

    const removeAt = (index) => {
        if(index > getSize() -1 || index < 0 || index == undefined){
            console.error("Error: bad index");
            return null;
        }
        else{
            if(index == 0){
                head = head.getNext();
                decrementSize();
                return true;
            }

            if(index == getSize() - 1){
                pop();
                return true;
            }

            let i = 0;
            let temp = head;
            while(i < index - 1){
                temp = head.getNext();
                i++;
            }
            temp.setNext(temp.getNext().getNext());
            decrementSize();
            return true;
        }
    }

    return {
        getHead,
        getSize,
        prepend,
        append,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
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