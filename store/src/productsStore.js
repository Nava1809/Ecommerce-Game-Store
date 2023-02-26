//asphalt8: price_1MfMFYSDGRT6as2oN3q6nQwB
//god of war:price_1MfMQGSDGRT6as2oGwPUa5GP
//Gta vicecity: price_1MfMTJSDGRT6as2oGas4q06i



const productsArray=[
    {
        id:"price_1MfMFYSDGRT6as2oN3q6nQwB",
        image:"https://wallpapercave.com/dwp1x/wp1865412.jpg",
        title:"asphalt8",
        price:100,
        description:"With over 300 licensed vehicles, more than 75 tracks, and action-packed races both online and off, Asphalt 8 is leading the pack for mobile racing sims! Whether you prefer to race solo or in multiplayer, there’s a world of experiences waiting for you. Discover gorgeous locations, perform gravity-defying stunts, and join in limited-time events to compete for prizes! Collect all your dream cars and motorbikes from the world’s most elite manufacturers, including Lamborghini, Bugatti, Porsche, and many more"

    },
    {
        id:"price_1MfMQGSDGRT6as2oGwPUa5GP",
        image:"https://www.giantbomb.com/a/uploads/original/8/87790/2331114-box_gow2.png",
        title:"God of war",
        price:200,
        description:"From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters. The threat of Ragnarök grows ever closer. Kratos and Atreus must choose between their own safety and the safety of the realms."

    },

    {
        id:"price_1MfMTJSDGRT6as2oGas4q06i",
        image:"https://wallpapercave.com/wp/wp1899006.jpg",
        title: "GTA vicecity",
        price:300,
        description:"Welcome to the 1980s. From the decade of big hair, excess, and pastel suits comes a story of one man's rise to the top of the criminal pile as Grand Theft Auto returns.Vice City is a huge urban sprawl ranging from the beach to the swamps and the glitz to the ghetto, and is the most varied, complete, and alive digital city ever created. Combining non-linear gameplay with a character-driven narrative, you arrive in a town brimming with delights and degradation and are given the opportunity to take it over as you choose."

    }
];

function getProductData(id){
    let productData=productsArray.find(product=>product.id === id);

    if(productData === undefined){
        console.log("product data does not exist for Id:" +id);
        return undefined;
    }
    return productData;
}

export {productsArray,getProductData};