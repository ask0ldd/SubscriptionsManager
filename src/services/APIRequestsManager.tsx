/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockMember } from "../mocks/mockDatas";
import { IMember } from "../types/types";

export class APIRequestsManager {

    static getMember(_memberId ?: number) : Promise<IMember>{
        return new Promise(resolve => {
            setTimeout(() => {resolve(mockMember)}, 300)
        })
    }

    static newMember(member : IMember){
        console.log(member)
    }
}