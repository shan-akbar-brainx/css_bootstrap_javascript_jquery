function addToCart(caller){
    var cartItem = document.createElement("DIV");
    cartItem.classList.add("cart-div");

    var itemImg = document.createElement("IMG");
    var imgDiv = document.createElement("DIV");
    imgDiv.appendChild(itemImg);
    itemImg.src = caller.parentElement.firstChild.src;
    cartItem.appendChild(itemImg);

    var itemTitle = document.createElement("DIV");
    itemTitle.classList.add("meal-title");
    itemTitle.innerHTML = caller.parentElement.firstChild.nextSibling.innerHTML;
    cartItem.appendChild(itemTitle);

    var btnDiv = document.createElement("DIV");
    btnDiv.classList.add("cart-buttons");
    var addBtnDiv = document.createElement("DIV");
    addBtnDiv.innerHTML = "+";
    addBtnDiv.addEventListener("click", function(){
        
    });

    btnDiv.appendChild(addBtnDiv);

    var removeBtnDiv = document.createElement("DIV");
    removeBtnDiv.innerHTML = "-";
    removeBtnDiv.addEventListener("click", function(){
        
        caller.parentElement.parentElement.remove();
    });

    btnDiv.appendChild(removeBtnDiv);
    
    cartItem.appendChild(btnDiv);
    
    var cart = document.getElementById("cart");
    cart.appendChild(cartItem);
}