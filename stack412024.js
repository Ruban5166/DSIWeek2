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

push(data){
    let node = new Node(data);

    node.next = this.top;
    this.top =  node;
    this.size++

}




pop(){
    if(this.isEmpty()){
        console.log("this stack is empty")
    }

    let deltenode = this.top;
    this.top = this.top.next

    deltenode.next = null;
    this.size--;
}

peek(){
    console.log(this.top.data);
}

print(){
    let current  = this.top;
    while(current){
        console.log(current.data)

        current = current.next;
    }
}

}


let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.print();
stack.pop();

stack.peek();


