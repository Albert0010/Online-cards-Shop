const input = document.querySelector(".input");
const button = document.querySelector(".button");
const img = document.querySelector(".basket");
let images = ['https://www.sas.am/upload/Sh/imageCache/331/620/6206243600773836.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/283/173/173195487511235.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/410/036/0364142459964136.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/331/356/3562811977037861.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/332/514/514675667773792.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/391/610/610806694902751.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/174/989/98996782902693.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/270/405/4059701076254562.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/200/624/6243042045707988.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/419/471/4711974166723358.png', 'https://www.sas.am/upload/Sh/imageCache/394/304/304243114226936.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/796/711/7111532771628885.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/218/293/293879891256119.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/112/314/3149163685706795.png', 'https://www.sas.am/upload/Sh/imageCache/962/469/4691342679166612.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/170/515/5153131935340449.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/180/224/22437257616630.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/345/628/6288731964014624.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/156/572/5722201307999545.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/112/162/1622101869609567.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/539/340/3407182909538294.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/281/100/1003873065043214.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/405/006/00666168707575.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/406/912/9123092571335458.jpg.webp', 'https://www.sas.am/upload/Sh/imageCache/270/659/6597362452728621.png',  ]

let prices = ['1 530 ', '5 490 ', '6 440 ', '5 440 ', '8 530 ', '7 490 ', '1 950 ', '2 100 ', '1 990 ', '3 230 ', '19 900 ', '16 900 ', '3 800 ', '1 490 ', '4 890 ', '2 100 ', '3 690 ', '6 790 ', '10 800 ', '10 800 ', '5 750 ', '6 750 ', '5 730 ', '6 290 ', '5 750 ']

let note_prices = ['1հատ/1 530 դր.', '1հատ/5 490 դր.', '1հատ/6 440 դր.', '1հատ/5 440 դր.', '1հատ/7 490 դր.', '1հատ/1 950 դր.', '1հատ/1 990 դր.', '1հատ/3 230 դր.', '1հատ/16 900 դր.', '1հատ/3 800 դր.', '1հատ/1 490 դր.', '1հատ/4 890 դր.', '1հատ/2 100 դր.', '1հատ/3 690 դր.', '1հատ/6 790 դր.', '1հատ/10 800 դր.', '1հատ/10 800 դր.', '1հատ/5 750 դր.', '1հատ/6 750 դր.', '1հատ/5 730 դր.', '1հատ/6 290 դր.', '1հատ/5 750 դր.', '1հատ/1 990 դր.', '1հատ/8 200 դր.', '1հատ/1 250 դր.',]

const  data = images.map((value, index)=>{
    return  {
        src:value,
        price:prices[index],
        small_price:note_prices[index]
    }
})


class Card{
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
}






function getData(info) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(info);
        },1500)
    })
}



async function drawData() {

    //Loading part
    let section,div;
    await new Promise(function (resolve, reject) {
        section = document.createElement("section");
        section.setAttribute("class","sec");
        div = document.createElement("div");
        div.setAttribute("class","lds-grid");
        let d1 = document.createElement("div");
        let d2 = document.createElement("div");
        let d3 = document.createElement("div");
        let d4 = document.createElement("div");
        let d5 = document.createElement("div");
        let d6 = document.createElement("div");
        let d7 = document.createElement("div");
        let d8 = document.createElement("div");
        let d9 = document.createElement("div");
        div.append(d1,d2,d3,d4,d5,d6,d7,d8,d9);
        section.append(div);
        document.body.appendChild(section);
        resolve(section);
    }).then((response)=> response);

    let response  = await getData(data).then((res) => res );
    section.remove();

    const backgroundDiv = document.createElement("div");
    backgroundDiv.setAttribute("class","backDiv");
    backgroundDiv.style.display = "none";
    document.body.append(backgroundDiv);












    //Data drawing part
    let icon,card,bigPrice,littlePrice,heart,iconDiv;
    let bigDiv = document.createElement("main");
    bigDiv.setAttribute("class","container");
    for (let i = 0; i < response.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class","card");
        div.setAttribute("id",` card${i}`);



        icon = document.createElement("img");
        icon.setAttribute("class","add");
        icon.setAttribute("src","https://thumbs.dreamstime.com/b/online-shopping-cart-add-icon-white-background-graphic-web-design-modern-simple-vector-sign-internet-concept-trendy-136981663.jpg")

        card = document.createElement("img");
        card.setAttribute("src",`${response[i]["src"]}`)
        card.setAttribute("class","img")

        bigPrice = document.createElement("p");
        bigPrice.innerText = response[i]["price"];
        bigPrice.setAttribute("class","price");

        littlePrice = document.createElement("p");
        littlePrice.innerText = response[i]["small_price"];
        littlePrice.setAttribute("class","small_price");

        heart = document.createElement("img");
        heart.setAttribute("src","unfill.png");
        heart.setAttribute("id","heart");

        heart.setAttribute("class","no-clicked");

        let example = new Card("250px","350px");
        div.style.width = example.width;
        div.style.height = example.height;



        div.append(card,bigPrice,littlePrice,icon,heart);
        bigDiv.append(div);
    }
    document.body.append(bigDiv);

    heart = document.querySelectorAll("#heart");
    let heartsArr = [...heart];

    for (let i = 0; i < heartsArr.length; i++) {
        heartsArr[i].addEventListener("click",(evt)=>{
            if(evt.target.className === "no-clicked"){
                evt.target.setAttribute("src","fullfill.png");
                evt.target.setAttribute("class","clicked");
            }else {
                evt.target.setAttribute("src","unfill.png");
                evt.target.setAttribute("class","no-clicked");
            }

        })
    }


    let newPage = document.createElement("div");
    newPage.setAttribute("class","newPage");
    document.body.append(newPage);
    newPage.style.display = "none";

    let zambyux = document.createElement("h3");
    zambyux.innerText = "Պատվիրված ապրանքներ";
    // zambyux.innerText.style.height = "30px";
    zambyux.style.color = "black";
    newPage.append(zambyux);













    // debugger;

    img.addEventListener("click",(evt)=>{
        document.getElementsByTagName("header")[0].style.display = "none";
        bigDiv.style.display = "none";
        // img.style.display = "none";
        newPage.style.display = "flex";
        backgroundDiv.style.opacity = 0.1
        backgroundDiv.style.backgroundColor = "black";
        backgroundDiv.style.display = "block";
        document.body.style.overflow = "hidden";

    })
    backgroundDiv.addEventListener("click",(evt)=>{
        document.getElementsByTagName("header")[0].style.display = "block";
        bigDiv.style.display = "flex";
        img.style.display = "block";
        newPage.style.display = "none";
        backgroundDiv.style.display = "none";
        document.body.style.overflow = "auto";
    })

    const addedDiv1 = document.createElement("div");
    addedDiv1.style.display = "flex";
    const addedDiv2 = document.createElement("div");
    const addedDiv3 = document.createElement("div");
    addedDiv1.style.width = "100%";
    addedDiv1.style.height = "232.8px";
    addedDiv2.style.width = "100%";
    addedDiv2.style.height = "232.8px";
    addedDiv3.style.width = "100%";
    addedDiv3.style.height = "232.8px";
    newPage.style.flexDirection = "column";
    newPage.append(addedDiv1,addedDiv2,addedDiv3);



    let iconEvent = document.querySelectorAll((".add"));
    iconEvent = [...iconEvent];
    let cardsArr = [];

    let productId = 1;

    for (let i = 0; i < iconEvent.length; i++) {
            iconEvent[i].addEventListener("click",(evt)=>{

                let div = document.createElement("div");
                div.setAttribute("class","added_card");
                div.setAttribute("id",`${productId}`)



                icon = document.createElement("img");
                icon.setAttribute("class","add");
                icon.setAttribute("src","https://thumbs.dreamstime.com/b/online-shopping-cart-add-icon-white-background-graphic-web-design-modern-simple-vector-sign-internet-concept-trendy-136981663.jpg")

                let card_shop = document.createElement("img");
                card_shop.setAttribute("src",`${response[i]["src"]}`)
                card_shop.setAttribute("class","img")

                let bigPrice_shop = document.createElement("p");
                bigPrice_shop.innerText = response[i]["price"];
                bigPrice_shop.setAttribute("class","price");

                let littlePrice_shop = document.createElement("p");
                littlePrice_shop.innerText = response[i]["small_price"];
                littlePrice_shop.setAttribute("class","small_price");

                let count = document.createElement("div");
                count.setAttribute("class","count");
                let p = document.createElement("p");
                p.innerText = `5`;
                count.append(p);






                div.append(card_shop,bigPrice_shop,littlePrice_shop,count);
                if(cardsArr.length === 0){
                    cardsArr.push(div);
                    addedDiv1.append(div);
                    productId++;
                }

                for (let j = 0; j < cardsArr.length; j++) {
                    debugger
                    if(!(cardsArr[j].id === div.id)){
                        cardsArr.push(div);
                        addedDiv1.append(div);
                        productId++;
                    }
                }







                // for (let j = 0; j < cardsArr.length;j++) {
                //     if(cardsArr[j].id  === div.id){
                //         debugger;
                //         +(cardsArr[j].id)++;
                //         cardsArr[j].id = `${(cardsArr[j].id)}`;
                //         check1 = false;
                //         break;
                //     }
                //     check1 = true;
                // }
                //
                //
                //
                // if(check1){
                //     console.log(div);
                //     cardsArr.push(div);
                //     addedDiv1.append(div);
                // }


                })
            }

}

drawData()
