function insertion(arr,n)
{
	let j
	let temp
	for(let i=1;i<n;i++)
	{
		temp = arr[i]
		j = i-1
		while(j>=0 && arr[j] > temp)
		{
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = temp
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
insertion(arr,n)
console.log("Print array after sorting: ")
print(arr,n)