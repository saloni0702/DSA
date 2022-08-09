let top = -1
let rear = -1
let max = 10
let a = []

function enQueue(val)
{
	if(top>max-1)
	{
		console.log("Queue is full")
	}
	else
	{
		top++
		a[top]=val
	}
}

function deQueue()
{
	if(rear>max-1)
	{
		console.log("Queue is empty")
	}
	else
	{
		rear++
		console.log(a[rear])
	}
}

function printQueue()
{
	for(let i=rear;i<a.length;i++)
	{
		console.log(a[i])
	}
}

enQueue(1)
enQueue(2)
enQueue(3)
enQueue(4)
enQueue(5)
console.log("Retriving a element")
deQueue()
console.log("Printing all data")
printQueue()