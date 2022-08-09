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

function insertFirst()
{
  let n = new Node(1)
  n.next = head
  head = n
  printList()
}

function insertBetween(prev_node) 
{
  let n = new Node(8)
  n.next = prev_node.next
  prev_node.next = n
  printList()
}

function insertLast() {
  let n = new Node(32)
  if(head === null)
  {
    head = new Node(32)
  }
  else
  {
    let last = head
    while(last.next !== null)
    {
      last = last.next
    }
    last.next = n
  }
  printList()
}

head = new Node(2)
let first = new Node(4)
let third = new Node(16)

head.next = first
first.next = third
console.log("Create a link list: ")
printList()
console.log("Insert a node at first position: ")
insertFirst()
console.log("Insert a node in between: ")
insertBetween(first)
console.log("Insert a node at last position: ")
insertLast()