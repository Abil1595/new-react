import Z3 from './Services';  
function Cart()
{

	return(
     <div>
         <h2> Cart</h2>
    <ul id="cart-items"></ul> 
     <p>Total: $<span id="cart-total">0.00</span></p>
     
     </div>
		);
}
export default Cart;