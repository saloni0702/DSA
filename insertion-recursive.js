function insertion(arr,n) 
{
	if(n<=1)
	{
		return
	}

	insertion(arr,n-1)
	let last = arr[n-1]
	let j = n-2

	while(j>=0 && arr[j] > last)
	{
		arr[j+1] = arr[j]
		j--
	}
	arr[j+1] = last
}

function print(arr,n) 
{
	for(let i=0;i<n;i++)
	{
		console.log(arr[i])
	}
}

let arr = [3,2,5,8,1]
insertion(arr,arr.length)
console.log("After sorting: ")
print(arr,arr.length)