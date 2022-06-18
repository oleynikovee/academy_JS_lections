const queueSelector=document.querySelector('.queue');
const inputToQueueField=document.querySelector('.queue_add_field');
const deleteFromQueue=document.querySelector('.queue_controls_delete');
const addToQueue=document.querySelector('.queue_controls_add');
const clearQueue=document.querySelector('.queue_controls_clear');

class Queue {
    constructor() {
        this.queue_el = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.queue_el[this.tail] = element;
        let partOfQueue=document.createElement('li');
        partOfQueue.textContent=this.queue_el[this.tail];
        queueSelector.appendChild(partOfQueue);
        this.tail++;
    }
    dequeue(element) {
        const item = this.queue_el[this.head];
        delete this.queue_el[this.head];
        this.head++;
        const removableElementFromQueue = document.querySelectorAll('ul.queue li')[0];
        queueSelector.removeChild(removableElementFromQueue);
        queue.save_Queue(element);
    }
    peek() {
        return this.queue_el[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    save_Queue(element) {
        localStorage.setItem('queue',JSON.stringify(element));
    }
    loadQueue(){
        return  localStorage.getItem('queue')!==null?JSON.parse(localStorage.getItem('queue')):new Queue();
    }
    deleteQueue() {
        this.queue_el = {};
        this.head = 0;
        this.tail = 0;
    }
}

let queue=new Queue();

const maxElementsInQueue=20;
const validator=()=>queue.length>=maxElementsInQueue?true:false;
const clearInputField=()=>inputToQueueField.value="";
const printQueueFromStorage=()=>{
    let elements_of_queue=Object.values(queue.queue_el);
    elements_of_queue.forEach(elelement=>{
        let partOfQueue=document.createElement('li');
        partOfQueue.textContent=elelement;
        queueSelector.appendChild(partOfQueue);
    });
}

window.addEventListener('load',()=>{
    let buffer_for_queue=queue.loadQueue();
    queue.queue_el=buffer_for_queue.queue_el;
    queue.head=buffer_for_queue.head;
    queue.tail=buffer_for_queue.tail;
    printQueueFromStorage();
});

//Event listener for click on delete-button
deleteFromQueue.addEventListener('click',()=>{
    queue.length===0?alert("Queue is empty"):queue.dequeue(queue);
});
//Event listener for click on add-button
addToQueue.addEventListener('click',()=>{
    validator()?alert("Queue is full"):
        inputToQueueField.value===""?alert("Write some text in input field"):
            queue.enqueue(inputToQueueField.value);
            queue.save_Queue(queue);
            clearInputField();
});
//Event listener for click on clear-button
clearQueue.addEventListener('click',()=>{
    queueSelector.innerHTML="";
    queue.deleteQueue();
    queue.save_Queue(queue);
});