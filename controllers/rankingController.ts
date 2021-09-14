
import { compare } from "../util/compare"
import { peopleRepository } from "../repositories/peopleRespository"
import { IPeople } from "../model/entity/IPeople";
const peoples: IPeople[] = peopleRepository;
peoples.sort( compare );
export default peoples;