import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import EmbeddedMap from "../components/EmbeddedMap";
import { useNavigate } from "react-router-dom";


function HomeScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  let keyword = window.location.search // Issue with having to reload page to get the keyword to take effect
  console.log(keyword)

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? <Loader/>
      : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          <Row>
            <h3>About Us</h3>
            <p>Fusce dapibus ex augue, vel tempor mi congue vitae. Nullam molestie dignissim leo vel consectetur. Nulla id augue eu magna consectetur mattis at eu erat. Praesent ac mattis turpis, sed accumsan eros. Sed ac tellus nisi. Nunc tellus diam, bibendum eu mattis vel, porttitor eget mauris. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam quis dictum ligula. Morbi risus felis, tempus vitae magna in, ullamcorper fringilla tortor. Etiam in ipsum cursus, egestas ipsum vel, faucibus velit. Maecenas rutrum efficitur venenatis. Sed nibh enim, maximus ut ultricies quis, iaculis sit amet nisl. Donec lobortis malesuada eros et rutrum. Nullam mauris urna, rhoncus non aliquam ac, aliquet sit amet justo. Sed sagittis maximus dui, feugiat malesuada arcu varius quis.</p>
            <p>Reach out to us by calling (405)616-5233 or emailing ThisCompany@gmail.com</p>
          </Row>
          <Row>
          <EmbeddedMap/>
          </Row>
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
