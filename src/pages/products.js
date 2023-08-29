import React, {useState} from "react";
import {Row, Col, Card, Button, Select} from 'antd'
import './style.css'
const {Option} = Select
const ProductsView = ({productList, colorArray, setProductList}) => {
    const [qty, setQty] = useState(Array(productList.length).fill(0));
    const qtyCalculate = (index, newQty) => {
        const updatedQty = [...qty];
        updatedQty[index] = newQty;
        setQty(updatedQty);
    }
    const colorChange = (val) => {
        console.log('val ', val);
        if(val){
            let filArr = productList.filter((item) => item.colour === val)
            setProductList(filArr)
        }
        else {
            // getCall()
        }
    }
    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };
    return(
        <Row>
            <Col span={24}>
                <Select onChange={colorChange} placeholder="Colour Filter" allowClear={true}>
                    {colorArray?.length>0 && colorArray.map((val, index) => (
                        <Option key={index} value={val} > {val} </Option>
                    ))}
                </Select>
                <br />
                {productList?.length>0 && productList.map((val, index) => (
                    <Card key={index}>
                        <Row gutter={[8,8]}>
                            <Col span={6}>
                                <img alt="product_img" src={val.img} className="width-100" />
                            </Col>
                            <Col span={12}>
                                <div>
                                    <p className="name-txt"> {val.name} </p>
                                    <h4 className="txt-center"> {val.price} </h4>
                                </div>
                            </Col>
                            <Col span={6}>
                                <Row gutter={[8,8]}>
                                    <Col span={8}> <Button className="btn" onClick={() => qtyCalculate(index, Math.max(0, qty[index] - 1))}> <span> - </span>  </Button> </Col>
                                    <Col span={8} > <span className="qty-txt"> {qty[index]} </span> </Col>
                                    <Col span={8}> <Button className="btn" onClick={() => qtyCalculate(index, qty[index] + 1)}> <span> + </span>  </Button> </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div>
                            <p>Subtotal: {calculateSubtotal(val.price, qty[index])}</p>
                        </div>
                    </Card>
                ))}
                
            </Col>
        </Row>
    )
}
export default ProductsView