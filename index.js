const Url_to_Api = "https://gen-dev-api-nkg3.onrender.com/Users";
 
fetch(Url_to_Api)
.then((response)=>{
if(response.ok){
    response.json()
     .then(datas => console.log(datas));
}
})
.catch(error => console.log(error))

