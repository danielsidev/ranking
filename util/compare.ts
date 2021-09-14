import { IPeople } from "../model/entity/IPeople";
export const compare = ( a: IPeople, b: IPeople  ) => {
    if ( a.point < b.point ){
      return 1;
    }
    if ( a.point > b.point ){
      return -1;
    }
    return 0;
  };