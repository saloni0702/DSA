let count=0
function tower(n,A,B,C)
{
	if(n===0)
	{
		return; 
	}
	tower(n-1,A,C,B)
	count++
	tower(n-1,B,A,C)
}
tower(4,'A','B','C')
console.log(count)

// Tower of Hanoi:
// total transaction for transfer disk to first(A) to end(C) with the use of auxilary(B)- ((2^n)-1)