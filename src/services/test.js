import { itemApi } from '../api'

const testGet = async () => {
    try {
        const listItem = await itemApi.fetchList()
        console.log("item: ", listItem);
        return listItem
    } catch (error) {
        console.log("error: ", error.message);
    }
}
export { testGet }