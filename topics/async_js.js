// fetch api ========================
//  returns a promise automatically uses get method
const url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).then((res)=>{
//     return res.json() // this also returns a promise
//     // res has a body with all of our data where we cannot directly accessesable directly so we need to convert it into json using .json()
// }).then((data)=>{ // actual data
//     console.log(data) // now you can do whatever you want with this data
// }).catch((err)=>{
//     console.log("catch block")
//     console.log(err)
// })

// The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

// fetch rejects only when there is any network issue
// ok attribute in fetch -> if there is no issue with the url
// if something goes wrong with the url which dosent exist we will get a 404 response


fetch(url)
.then((res)=>{
    if(res.ok){
        console.log("nothing wrong with the url")
        return res.json()
    }else{
        console.error("inproper URL")
    }
})
.then((data)=>{
    console.log(data)
})

// http methods with fetch  - 2nd arg of fetch
// creating a new user - Post ,mention the method , pass the info to body as json (JSON.stringify()) , set header to metion that we are sending a json
fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "abcd"
    })
}).then(res=>res.json()).then(data=>console.log(data))


//  async -  instad to chaining promise
// we can make any function async , inside that we can await the promises
// an async function always returns a promise 

async function abc(){
    return 5
}
abc().then((x)=>{
    console.log(x)
})