import dotenv from "dotenv";
dotenv.config();
import MistralClient from "@mistralai/mistralai";
const apiKey=process.env.SECRET_KEY||'Your_api_key';
console.log(apiKey);
const client=new MistralClient(apiKey);

const chatResponse=await client.chat({
    model:'mistral-tiny',
    messages:[{role:'user',content:'capital of India'}
        // ,{role:'user',content:"Write a sum of two variable program in c laguage"}
    ]
})
//how to show response to giving us one token at a time

//change chat functio to chatStream

const chatResponse2=await client.chatStream({
    model:'mistral-tiny',
    messages:[{role:'user',content:'capital of Srilanka'}
        ]
})

for await(let chunk of chatResponse2){
    console.log(chunk.choices[0].delta.content);
}

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