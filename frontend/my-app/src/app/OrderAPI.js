import axios from 'axios'
// connection to server URL , we want to post  a new order to the server through this URL
const URL = "http://127.0.0.1:8000/api/addOrder/"
// async(2)
export function sendOrders(myCart,token) {
    // console.log(myOrders,token)
    return new Promise((resolve) =>
        axios.post(URL,myCart,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => resolve({ data: res.data }))
    );
}
