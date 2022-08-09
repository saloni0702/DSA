let arr = [2,4,6,8,10,12,14,16,18,20]
let len = arr.length-1
let k = 11
let index = binarySearch(arr,0,len,k)
if(index !== -1)
{
	console.log("Element Found", index)
}
else
{
	console.log("Element not Found")
}

function binarySearch(arr,left,right,k)
{
	while(right>=left)
	{
		let mid = left + Math.floor((right-left)/2)
		if(arr[mid]===k)
		{
			return mid
		}
		else if(k < arr[mid])
		{
			right = mid - 1
		}
		else if(k > arr[mid])
		{
			left = mid + 1 
		}
	}
	return -1
}