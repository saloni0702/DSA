class Node
{
	constructor(val)
	{
		this.val = val
		this.next = null
	}
}

let front = null
let rear = null
function enQueue(val) 
{
	let temp =new Node(val)

	if(rear === null)
	{
		rear = temp
		front = temp
		return
	}

	rear.next = temp
	rear = temp
}

function deQueue() 
{
	if(front === null)
	{
		console.log("Queue is empty")
		return
	}
	else
	{
		front = front.next
	}
}

function print() 
{
	if(front === null)
	{
		console.log("Queue is empty")
		return
	}
	else
	{
		let temp = front
		while(temp !== null)
		{
			console.log(temp.val)
			temp = temp.next
		}
	}
}

enQueue(1)
enQueue(2)
enQueue(3)
enQueue(4)
enQueue(5)
enQueue(6)
console.log("Print Queue without deQueue")
print()
deQueue()
deQueue()
console.log("Print Queue with deQueue")
print()
