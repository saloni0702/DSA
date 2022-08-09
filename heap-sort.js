function heapsort(arr,n)
{
	for(let i=Math.floor(n/2);i>=0;i--)
	{
		hepify(arr,n,i)
	}

	for(let i=n-1;i>0;i--)
	{
		let temp = arr[0]
		arr[0] = arr[i]
		arr[i] = temp

		hepify(arr,i,0)
	}
}

function hepify(arr,n,i)
{
	let largest = i
	let left = 2*i+1
	let right = 2*i+2

	if(arr[left] > arr[largest] && left<n)
	{
		largest = left
	}

	if(arr[right] > arr[largest] && right<n)
	{
		largest = right
	}

	if(largest!=i)
	{
		let temp = arr[i]
		arr[i] = arr[largest]
		arr[largest] = temp

		hepify(arr,n,largest)
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
heapsort(arr,arr.length)
console.log("After sorting: ")
print(arr,arr.length)