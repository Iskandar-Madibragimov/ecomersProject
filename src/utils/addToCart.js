export const addToCart = (id) => {
    console.log(id);
    let cart = localStorage.getItem("cart")
    if(cart){
        try{
            cart = JSON.parse(cart)
        }catch(err){
            console.log(err);
        }
    }
}