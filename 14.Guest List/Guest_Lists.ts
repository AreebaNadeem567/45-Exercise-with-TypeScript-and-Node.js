let Guest_List: string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

let message: string = "You are invited in Dinner"

for (let index = 0; index < Guest_List.length; index++) {

     console.log('Mr.' + Guest_List[index] + ' ' + message);

}