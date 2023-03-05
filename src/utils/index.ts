import { Chess } from '../interface';
import details from '../details/details.json';

const getRating = async (userName : string) => {
return await fetch('https://lichess.org/api/user/'+userName).then(async data =>
 {
 const ratings = await data.json()
 return await ratings['perfs'];
})
}


export  const getData = async () => {
    const items : Chess[] = Array();
    for await (const item of details) {
    let detail : Chess ; 
    //const data = await getRating('cyberT')
    const data = await getRating(item.userName);
    const blitz : number = data['blitz']['rating'];
    const bullet : number = data['bullet']['rating'];
    const rapid : number = data['rapid']['rating']
    detail = {
      rank : 1,
      userName: item.userName,
      surname : item.surname,
      name: item.name,
      gender:item.Gender,
      phoneNumber : item.phoneNumber,
      blitz : blitz,
      rapid :rapid,
      bullet:bullet
    }  
    items.push(detail);
}
items.sort((a,b)=> b.blitz - a.blitz);
let rank = 0;
const newItems = items.map(item => {
  ++rank;
  return {...item , rank : rank}
})
   return newItems;
} 