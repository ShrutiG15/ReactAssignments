import { useState } from "react";

function ProcessProducts() {

    const [pname, setPname] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);

    const [total, setTotal] = useState(0);   //For total

    function findTotal() {
        let discount = 0.0;

        if (qty >= 30) {
            discount = 0.15;
        }
        else if (qty > 20 && qty < 30) {
            discount = 0.1;
        }
        else if (qty > 10 && qty <= 20) {
            discount = 0.05;
        }
        else {
            discount = 0.0;
        }

        let temp = (price * qty) - (price * qty * discount);
        setTotal(temp);
    }

    return (
        <>
            <fieldset>
                <legend>Process Products</legend>
                <input type="text" onChange={(e) => setPname(e.target.value)} placeholder="Enter Product Name"></input>
                <br></br>
                <input type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price"></input>
                <br></br>
                <input type="number" onChange={(e) => setQty(e.target.value)} placeholder="Enter Product Quantity"></input>
                <br></br>
                <input type="button" onClick={findTotal} value="Calculate Total" />
                <br></br>
                <br></br>
                <p>Total for Product {pname}: {total}</p>
            </fieldset>



        </>

    );
}

export default ProcessProducts;