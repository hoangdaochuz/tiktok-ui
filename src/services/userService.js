import * as httpRequest from '~/utils/httpRequest'

export const getSuggestUser = async (page, perPage) => {
    try {
        const result = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
    }
}