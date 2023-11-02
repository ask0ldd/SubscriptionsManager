/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockMember } from "../mocks/mockDatas";
import { IMember } from "../types/types";

export class APIRequestsManager {

    static getMember(_memberId ?: number) : Promise<IMember>{
        return new Promise(resolve => {
            setTimeout(() => {resolve(mockMember)}, 100)
        })
    }

    static newMember(member : IMember | object){
        if(JSON.stringify(member) == '{}') return
        console.log(member)
    }

    static updateMember(memberid : number, member : IMember | object)
    {
        if(JSON.stringify(member) == '{}') return
        console.log(memberid, member)
    }
}