let top = -1
let rear = -1
let max = 5
let a = []

function enQueue(val)
{
	if(top===0 && rear===max-1)
	{
		console.log("Queue is full")
	}
	else if(top === rear+1)
	{
		console.log("Queue is full")
	}
	else
	{
		if(top===-1)
		{
			top++
		}
		rear = (rear+1)%max
		a[rear]=val
	}
}

function deQueue()
{
	if(top===-1)
	{
		console.log("Queue is empty")
	}
	else
	{
		console.log(a[top])
		if(top===rear)
		{
			top = -1
			rear = -1
		}
		else
		{
			top = (top+1)%10
		}
	}
}

function printQueue()
{
	for(let i=top;i!==rear;i=(i+1)%max)
	{
		console.log(a[i])
	}
	console.log(a[rear])
}

deQueue();
enQueue(1);
enQueue(2);
enQueue(3);  
enQueue(4);
enQueue(5);
enQueue(6);
console.log("hhhhhh")
printQueue();
console.log("hhhh")
deQueue();
enQueue(7);
deQueue();
enQueue(8);
console.log("hhhhh")
printQueue();
// enQueue(1)
// enQueue(2)
// enQueue(3)
// enQueue(4)
// enQueue(5)
// console.log("Retriving a element")
// deQueue()
// console.log("Printing all data")
// printQueue()