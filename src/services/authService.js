import * as httpRequest from '~/utils/httpRequest'
export const login = async (body={})=>{
    const result = await httpRequest.post('auth/login',body);
    return result.data
}