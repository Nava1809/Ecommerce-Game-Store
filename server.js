// sk_test_51MfM8QSDGRT6as2oQ2VebFAfURy6vMkJbl9KxqtwWplYYTdkPqGbzQQ3tyE4XeTkhT6RP5LGheeegSKcuIOJPpvA003oZxwWEh

//asphalt8: price_1MfMFYSDGRT6as2oN3q6nQwB
//god of war:price_1MfMQGSDGRT6as2oGwPUa5GP
//Gta vicecity: price_1MfMTJSDGRT6as2oGas4q06i

const express=require("express");
var cors=require("cors");
const stripe=require('stripe')('sk_test_51MfM8QSDGRT6as2oQ2VebFAfURy6vMkJbl9KxqtwWplYYTdkPqGbzQQ3tyE4XeTkhT6RP5LGheeegSKcuIOJPpvA003oZxwWEh');

const app=express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async(req,res)=>{
    console.log(req.body)
    const items=req.body.items;
    let lineItems=[];
    items.forEach((item)=>{
        lineItems.push(
            {
           price:item.id,
           quantity:item.quantity
        }
        )
    });
    const session=await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url:"http://localhost:3000/success",
         cancel_url:"http://localhost:3000/cancel"
    })
    res.send(JSON.stringify({
        url: session.url
    }))
});
app.listen(4000,()=>{console.log("Listening on port 4000")})