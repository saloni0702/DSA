function swap(arr,ind1,ind2)
{
	let temp = arr[ind1]
	arr[ind1] = arr[ind2]
	arr[ind2] = temp
}

function bubble(arr,n)
{
	for(let i=0;i<n-1;i++)
	{
		for(let j=0;j<n-i-1;j++)
		{
			if(arr[j]>arr[j+1])
			{
				swap(arr,j,j+1)
			}
		}
		//console.log(arr)
	}
}

function print(arr,n)
{
	for(let i=0;i<n;i++)
	{
		console.log(arr[i])
	}
}

let arr = [5,1,4,2,8]
let n = arr.length
bubble(arr,n)
console.log("Print array after sorting: ")
print(arr,n)
