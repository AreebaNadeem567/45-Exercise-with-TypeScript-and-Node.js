//Store the locations in a array. Make sure the array is not in alphabetical order.
let places :string[] = ['Italy', 'Germany', 'Agra', 'Eifel Tower', 'Times Square'];

//Print your array in its original order.
console.log('Orginal ' + places);

//Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());

//Show that your array is still is still in its orginal order by printing it.
console.log('Orginal ' + places);

//Print your array in reverse alphabetical order without changing the order of the orginal list.
console.log('Copy ' + [...places].sort().reverse());

//Show that your array is still in its orginal order by printing it again.
console.log('Orginal ' + places);

//Reverse the order of your list .Print the array to show that its order has changed.
console.log('Orginal ' + places.reverse());

//Reverse the order of your list  again. Print the list to show its back to it's orginal order.
console.log('Orginal ' + places.reverse());

//Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orginal ' + places.sort());

//Sort to change  your array so it's stored in  reserve alphabetical order. Print the  list to show thatits order has  changed.
console.log('Orginal ' + places.sort().reverse());