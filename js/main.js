var arr=[];
var size=parseInt(prompt("enter the size of array to find two digit numbers"));
for(let j=0;j<size;j++)
{
	arr[j]=parseInt(prompt("Enter value "+(j+1)));
}
document.write("Two digit numbers");
document.write("<br>");
for(i=0;i<arr.length;i++)
{
	b=arr[i];
	a=b.toString();
	c=a.length;
	if(c==2)
	{
		document.write(b);
		document.write("<br>");
	}
}