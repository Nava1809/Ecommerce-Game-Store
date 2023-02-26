import {Card,Button,Form,Row,Col} from "react-bootstrap";
import {CartContext} from '../CartContext';
import { useContext } from "react";


function ProductCard(props){
    const product=props.product;
    const cart=useContext(CartContext);
    const productQuantity=cart.getProductQuantity(product.id);
    console.log(cart.items)

    return(
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <img style={{width:"200px",height:"300px",objectFit:"fill"}}src={product.image} alt={product.title}/>
                
                <Card.Text style={{fontWeight:"bold"}}>Rs{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                {productQuantity>0 ?
                <>
                <Form as={Row}>
                    <Form.Label column="true" sm="6">In Cart:{productQuantity}</Form.Label>
                    <Col sm="6">
                        <Button sm="6" onClick={()=>cart.addOneToCart(product.id)} className="mx-2">+</Button>
                        <Button sm="6" onClick={()=>cart.removeOneFromCart(product.id)} className="mx-2">-</Button>

                    </Col>
                </Form>
                <Button variants="danger" onClick={()=>cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                </>
                    :
                
                <Button variant="primary" onClick={()=> cart.addOneToCart(product.id)}>Buy now</Button>
}
            </Card.Body>
        </Card>
    )
}
export default ProductCard;