import * as httpRequest from '~/utils/httpRequest'

export const getFollowingList = async (page, perPage) => {
    try {
        const result = await httpRequest.get('me/followings', {
            params: {
                page,
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
    }
}
