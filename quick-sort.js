function swap(arr,ind1,ind2)
{
	let temp = arr[ind1]
	arr[ind1] = arr[ind2]
	arr[ind2] = temp
}

function partition(arr,first,last)
{
	let i = first-1
	let pivot = arr[last] 
	for(let j=first;j<=last-1;j++)
	{
		if(arr[j]<pivot)
		{
			i++
			swap(arr,j,i)
		}
	}
	swap(arr,i+1,last)
	return (i+1)
}

function quick(arr,start,end)
{
	if(start < end)
	{
		let index = partition(arr,start,end)
		quick(arr,start,index-1)
		quick(arr,index+1,end)
	}
}

function print(arr,n) 
{
	for(let i=0;i<n;i++)
	{
		console.log(arr[i])
	}
}

let arr = [3,2,5,8,1]
let n = arr.length-1
quick(arr,0,n)
console.log("After sorting: ")
print(arr,arr.length)