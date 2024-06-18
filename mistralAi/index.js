import dotenv from "dotenv";
dotenv.config();
import MistralClient from "@mistralai/mistralai";
const apiKey=process.env.SECRET_KEY||'Your_api_key';
console.log(apiKey);
const client=new MistralClient(apiKey);

const chatResponse=await client.chat({
    model:'mistral-tiny',
    messages:[{role:'user',content:'capital of India'}]
})

// console.log(process.env.SECRET_KEY);
console.log(chatResponse.choices[0].message.content);

// app.listen(3000,()=>{
//     console.log("Connetc to server");
// })
// const apikey=process.env.SECRET_KEY||'your_api_key';
// const client=new MistralClient(apikey);

// const chatResponse=await client.chat({
//     model:'mistral-tiny',
//     message:[{role:'user',content:'what is the best French Cheese'}]
// });
// console.log(chatResponse.choise[0].message.content);