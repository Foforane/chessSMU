export interface Chess {
    surname : string;
    name : string;
    phoneNumber : string;
    blitz : rating;
    bullet : number;
    rapid : number;
    userName : string;
    rank : number;
    gender: string;
    }

    export interface rating {
      games : number;
      rating : number;
      prog : number;
    }