function merge(arr,l,m,r)
{
	let n1 = m-l+1
	let n2 = r-m

	let LeftArray = new Array(n1)
	let RightArray = new Array(n2)

	for(let i=0;i<n1;i++)
	{
		LeftArray[i] = arr[l+i]
	}
	for(let i=0;i<n2;i++)
	{
		RightArray[i] = arr[m+1+i]
	}
	
	let i = 0
	let j = 0
	let k = l
	while(i<n1 && j<n2)
	{
		if(LeftArray[i]<=RightArray[j])
		{
			arr[k] = LeftArray[i]
			i++
		}
		else
		{
			arr[k] = RightArray[j]
			j++
		}
		k++
	}

	while(i<n1)
	{
		arr[k] = LeftArray[i]
		i++
		k++
	}

	while(j<n2)
	{
		arr[k] = RightArray[j]
		j++
		k++
	}
}

function mergesort(arr,first,last)
{
	if(first>=last)
	{
		return;
	}
	let mid = first + parseInt((last-first)/2)
	mergesort(arr,first,mid)
	mergesort(arr,mid+1,last)
	merge(arr,first,mid,last)
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
mergesort(arr,0,n)
console.log("After sorting: ")
print(arr,arr.length)