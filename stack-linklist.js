class Node
{
	constructor()
	{
		this.val = 0;
		this.next = null;
	}
}


class Stack
{
	constructor()
	{
		this.top = null
	}

	push(val)
	{
		let temp = new Node()

		if(temp === null)
		{
			console.log("Stack Overflow")
			return
		}

		temp.val = val
		temp.next = this.top

		this.top = temp
	}

	peek()
	{
		if(this.top === null)
		{
			console.log("Stack Underflow")
			return
		}
		else
		{
			console.log(this.top.val)
		}
	}

	pop()
	{
		if(this.top === null)
		{
			console.log("Stack Underflow")
			return
		}
		else
		{
			this.top = this.top.next
		}
	}

	print()
	{
		if(this.top === null)
		{
			console.log("Stack Underflow")
			return
		}
		else
		{
			let temp = this.top
			while(temp !== null)
			{
				console.log(temp.val)
				temp = temp.next
			}
		}	
	}

}


let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
console.log("Print stack without pop")
stack.print()
console.log("Print peek value")
stack.peek()
stack.pop()
stack.pop()
console.log("Print stack with pop")
stack.print()
console.log("Print peek with pop")
stack.peek()