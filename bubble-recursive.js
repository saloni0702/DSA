function swap(arr,ind1,ind2)
{
	let temp = arr[ind1]
	arr[ind1] = arr[ind2]
	arr[ind2] = temp
}

function bubble(arr,n)
{
	if(n===1)
	{
		return;
	}

	for(let i=0;i<n-1;i++)
	{
		if(arr[i] > arr[i+1])
		{
			swap(arr,i,i+1)
		}
	}

	bubble(arr,n-1)
}

function print(arr,n)
{
	for(let i=0;i<n;i++)
	{
		console.log(arr[i])
	}
}

let arr = [3,2,5,8,1]
bubble(arr,arr.length)
console.log("After sorting: ")
print(arr,arr.length)