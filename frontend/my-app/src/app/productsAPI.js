import axios from 'axios'

//Server URL for requests related to products.
//for accessing to this view , authorization required , all requests are with token 


const URL = "http://127.0.0.1:8000/api/"



export function getProducts(token) {
  return new Promise((resolve) =>
    // very important ! we have aditional headers for the authorization !!!

    axios(URL + "products/", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => resolve({ data: res.data }))
  );
}


export function addProduct(data) {
  console.log(data.token);
  console.log(data)
  return new Promise((resolve) =>
    axios.post(URL + 'addproduct/', data, {

      headers: {
        'Authorization': `Bearer ${data.token}`,
      }
    }).then((res) => resolve({ data: res.data }))
  );
}

export function updProduct(updprod) {
  console.log(updprod.token)
  return new Promise((resolve) =>
    axios.put(`http://127.0.0.1:8000/api/updproduct/${updprod.id}`, updprod, {
      headers: {
        'Authorization': `Bearer ${updprod.token}`,
      }
    }).then((res) => resolve({ data: res.data }))
  );
}

export function delProduct(remprod) {
  return new Promise((resolve) =>
    axios.delete(`http://127.0.0.1:8000/api/delproduct/${remprod.id}`, {
      headers: {
        'Authorization': `Bearer ${remprod.token}`,
      }

    }).then((res) => resolve({ data: res.data }))
  )

}




