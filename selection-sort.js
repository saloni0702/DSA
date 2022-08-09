function swap(arr,ind1,ind2)
{
	let temp = arr[ind1]
	arr[ind1] = arr[ind2]
	arr[ind2] = temp
}

function selection(arr,n)
{
	let index
	for(let i=0;i<n-1;i++)
	{
		index = i
		for(let j=i+1;j<n;j++)
		{
			if(arr[j] < arr[index])
			{
				index = j
			}
		}
		swap(arr,index,i)
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
selection(arr,n)
console.log("Print array after sorting: ")
print(arr,n)
