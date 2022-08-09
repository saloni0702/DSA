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

function deleteNode(key)
{
  let temp = head
  let prev = null
  if(temp !== null && temp.data === key)
  {
    head = temp.next
  }
  while(temp !== null && temp.data !== key)
  {
    prev = temp
    temp = temp.next
  }
  if(temp === null)
  {
    return
  }
  prev.next = temp.next
  printList()
}


head = new Node(1)
let first = new Node(2)
let second = new Node(4)
let third = new Node(8)
let fourth = new Node(16)
let fifth = new Node(32)

head.next = first
first.next = second
second.next = third
third.next = fourth
fourth.next = fifth

console.log("Create a link list: ")
printList()
console.log("Delete a node from anywhere ")
deleteNode(8)