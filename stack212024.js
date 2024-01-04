class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
        this.size = 0;

    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }


    stackPush(data){
        let node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;

    }

    print(){
        let current = this.top;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }


    stackPop(){
        if(this.isEmpty()){
            console.log("This stack is empty");

        }else{
            let removeNode = this.top;
            this.top = this.top.next;

            removeNode.next = null;
            this.size --;

            //return removeNode.data;

        }
    }

    peek(){
        if(this.isEmpty()){
            console.log("this stack is empty");
        }else{
            console.log(this.top.data)
        }
    }
}

let stack = new Stack();
stack.stackPush(10);
stack.stackPush(20);
stack.stackPush(30);
stack.print();
stack.stackPop();
stack.print();

stack.peek();





