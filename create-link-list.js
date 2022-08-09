let head
class Node
{
  constructor(d)
  {
    this.data = d
    this.next = null
  }
}

function printList()
{
    let n = head
    while(n !== null)
    {
      console.log(n.data)
      n = n.next
    }
}

head = new Node(2)
let first = new Node(4)
let second = new Node(8)
let third = new Node(16)

head.next = first
first.next = second
second.next = third

printList()