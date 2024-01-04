class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size === 0;
    }

    enQueue(data){
        let node = new Node(data);


        if(this.isEmpty()){
            this.front = node;
            this.rear = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }

        this.size++;
    }

    deQueue(){
        if(this.isEmpty()){
            console.log("this queue empty")
        }else{
            let deleteNode = this.front;
            this.front = this.front.next;
            if(!this.front){
                this.rear = null;
            }
            deleteNode.next = null;
            this.size--;
        }
    }
    peek(){
        console.log(this.front.data);
    }

    print(){
        let current = this.front;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}


let queue = new Queue;
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.enQueue(40);
queue.enQueue(50);
queue.enQueue(60);
queue.enQueue(70);
queue.enQueue(80);


queue.print();

queue.deQueue();

queue.print();

queue.peek();
