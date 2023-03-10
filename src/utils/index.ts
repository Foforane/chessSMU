import { Chess, rating } from '../interface';
import details from '../details/details.json';

const getRating = async (userName : string) => {
return await fetch('https://lichess.org/api/user/'+userName).then(async data =>
 {
 const ratings = await data.json();
 if(ratings['error']) return;
 return await ratings; 
})
}


export  const getData = async () => {
   
    const items : Chess[] = Array();
    for await (const item of details) {
    let detail : Chess ; 
    let blitz : rating = {rating : 0,prog : 0, games : 0}
    let  bullet = 0 ,rapid = 0;
    const data = await getRating(item.userName);
    if(data !== undefined){
     blitz  =  data['perfs']['blitz'];
     bullet = data['perfs']['bullet']['rating'];
     rapid  =  data['perfs']['rapid']['rating'] ;
    }

    detail = {
      rank : 1,
      userName: item.userName,
      surname : item.surname,
      name: item.name,
      gender:item.gender,
      phoneNumber : item.phoneNumber,
      blitz : blitz,
      rapid :rapid,
      bullet:bullet
    }  
    items.push(detail);
}
items.sort((a,b)=> b.blitz.rating - a.blitz.rating);
let rank = 0;
const newItems = items.map(item => {
  ++rank;
  return {...item , rank : rank}
})
   return newItems;
} 