let top = -1
let max = 10
let a = Array(max).fill(0)

function push(val)
{
     if(top>max-1)
     {
          console.log("Stack overflow")
     }
     else
     {
          top++
          a[top] = val
     }
}

function pop() 
{
     if(top<0)
     {
          console.log("Stack underflow")
     }
     else
     {
          console.log(a[top])
          top--
     }
}

function peek()
{
     if(top<0)
     {
          console.log("Stack underflow")
     }
     else
     {
          console.log(a[top])
     }
}

function printStack()
{
     for(let i=top;i>=0;i--)
     {
          console.log(a[i])
     }
}

push(1)
push(2)
push(3)
push(4)
push(5)
console.log("Removing a element")
pop()
console.log("Peek value of stack")
peek()
console.log("Printing all data")
printStack()
