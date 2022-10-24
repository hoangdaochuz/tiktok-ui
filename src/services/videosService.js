import * as httpRequest from "~/utils/httpRequest";
export const getListVideo = async (type, page)=>{
    try{
        const result = await httpRequest.get('videos',{
            params: {
                type:type,
                page: page
            }
        });
        return result.data
    }catch(e){
        console.log(e);
    }
}