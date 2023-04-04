const product = [
    {
        id: 0,
        image: './image/Banana_Trunk_Chopper/agri1.jpg',
        title: 'Banana Trunk Chopper',
        price: '35,000'
    },
    {
        id: 1,
        image: './image/Bio_Shredder_Heavy_Duty/agri1.jpg',
        title: 'Bio Shredder Heavy Duty',
        price: '38,000'
    },
    {
        id: 2,
        image: './image/Grass_Chopper_Machine/image1.jpg',
        title: 'Grass Chopper Machine',
        price: '75,000'
    },
    {
        id: 3,
        image: './image/Multi-fiber_Stripper/agri1.jpg',
        title: 'Multi-fiber Stripper',
        price: '29,999'
    },
    {
        id: 4,
        image: './image/Multi-Purpose_Shredder_with_wood_Chipper/image1.jpg',
        title: 'Multi-Purpose Shredder with wood Chipper',
        price: '32,000'
    },
    {
        id: 5,
        image: './image/Multi-Purpose_Shredder/image1.jpg',
        title: 'Multi-Purpose Shredder',
        price: '32,800'
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;
    document.getElementById("root").innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        
        return(
           
                `<div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div>

                    <div class='bottom'>

                        <p>${title}</p>

                        <h2>₱ ${price}.00</h2>` +
                        
                        "<button onclick='addtocart("+(i++)+")'>Add to cart" +

                    `</div>
                </div>`           
        )
    }).join('')

    var cart = [];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a) {
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a) {
        let j = 0, total = 0;
        document.getElementById("count").innerHTML = cart.length;

        if(cart.length == 0) {
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById('total').innerHTML = "₱ " + 0 + ".00";

        } else 
        {
            document.getElementById('cartItem').innerHTML = cart.map((items) =>
            {
                var {image, title, price} = items;

                total=parseInt(total)+parseInt(price);
                document.getElementById("total").innerHTML = "₱ " + (1000*(total)) + ".00";
                
                return (
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size: 12px;'>${title}</p>
                        <h2 style='font-size: 15px;'>₱ ${price}.00</h2>` +
                        "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                );
            }).join('');
            
        }
    }