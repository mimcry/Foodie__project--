import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { containerClasses } from "@mui/system";
import Ouroffers from "../components/UI/slider/Ouroffers.jsx";

import Serve from "./Serve.js";
import { Grid, Box, Typography } from "@mui/material";
import CategoryItem from "./CategoryItem.jsx";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TestmonialSlider from "../components/UI/slider/TestmonialSlider.jsx";
import Popular_categories from "./Popular_categories";

export default function Home() {
  return (
    <div className="container">
      <section>
        <Row>
          <Col lg="6" md="6">
            <div className="mt-5 hero__content">
              <h5 className="mb-3">Easy way to make an order</h5>
              <h1 className="mb-4 hero__title">
                <span>HUNGRY?</span> Just wait <br /> food at{" "}
                <span> your door</span>
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                maxime quasi aliquam qui et harum eos sequi dignissimos.
                Dolorum, officiis. Fugit est quia atque cumque! Praesentium et
                neque rerum saepe!
              </p>
              <div className="hero__btns">
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <ArrowForwardIosIcon className="p-1 mt-1" />
                  </button>
                  <button className="all__foods-btn">See all foods</button>
                </div>
              </div>

              <div className=" hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    {" "}
                    <DirectionsCarIcon />
                  </span>{" "}
                  No shipping charge
                </p>
              </div>

              <div>
                <p className=" hero__service d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <GppGoodIcon />
                  </span>{" "}
                  100% secure checkout
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src="hero.png" alt="hero-img" className="w-100" />
            </div>
          </Col>
        </Row>
      </section>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ mb: 5, textAlign: "center" }}>
          We{" "}
          <Typography variant="span" sx={{ color: "red", fontSize: "2.5rem" }}>
            Serve
          </Typography>
        </Typography>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "space-between",
          }}
        >
          <Serve
            sx={{ display: "flex" }}
            name="Asian Food"
            image="category1.png"
          />
          <Serve name="Asian Food" image="category2.png" />
          <Serve name="Asian Food" image="category3.png" />
          <Serve name="Asian Food" image="category4.png" />
        </Box>
      </Box>
      <div className="offers mt-5">
        <h3>
          {" "}
          Our <span className="offers_color">Offers</span>{" "}
        </h3>
        <p>Get various special offers when ordering from Foodi.</p>

        <Ouroffers />
      </div>
      <div className="mt-5">
        {" "}
        <Typography variant="h5" sx={{ mb: 5 }}>
          Food
          <Typography variant="span" sx={{ color: "red", fontSize: "2.5rem" }}>
            {" "}
            Category
          </Typography>
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&w=1000&q=80"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="khajaset.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="chickenchilli.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="chickenbiryani.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="sekwa.jpg"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="product1.1.jpg"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="product01.jpg"
              category="Visit the various types of food"
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Popular_categories />
      </div>
      <section className="mt-5 ">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h5 className="feature__subtitle mb-3">What we serve</h5>
              <h2>Just sit back at home</h2>
              <h2>
                we will <span className="feature__title">take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
                deleniti.
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                debitis?
              </p>
            </Col>
            <Col lg-="4" md="4" className="mt-5">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src="service1.png"
                  alt="feature-img"
                  className="w-25 mb-3"
                />
                <h5 className="fw-bold mb-3">Quick Delivery</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, impedit?
                </p>
              </div>
            </Col>
            <Col lg-="4" md="4" className="mt-5">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src="service2.png"
                  alt="feature-img"
                  className="w-25 mb-3"
                />
                <h5 className="fw-bold mb-3">Super Dine In</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, impedit?
                </p>
              </div>
            </Col>
            <Col lg-="4" md="4" className="mt-5">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src="service3.png"
                  alt="feature-img"
                  className="w-25 mb-3"
                />
                <h5 className="fw-bold mb-3">Easy Pick Up</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, impedit?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="">
              <img src="location.png" alt="why-foodie" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__foodie">
                <h2 className="foodie-title mb-4">
                  Why <span>Foodie?</span>
                </h2>
                <p className="foodie__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus voluptates et iusto suscipit odio facilis minima
                  fugit? Iusto temporibus nisi delectus, autem amet ex tempora,
                  dignissimos ipsa id nam eos!
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <span>
                        <CheckCircleIcon />
                      </span>{" "}
                      Fresh and tasty foods{" "}
                    </p>
                    <p className="check_list">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, eaque.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <span>
                        <CheckCircleIcon />
                      </span>{" "}
                      Quality Support
                    </p>
                    <p className="check_list">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime, nulla?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className="  choose__us-title d-flex align-items-center gap-2">
                      <span>
                        <CheckCircleIcon />
                      </span>
                      Order from and location
                    </p>
                    <p className="check_list mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam, hic!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br /> <br />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mt-5">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque aut, velit ipsam accusamus in odit dolore odio
                  expedita sequi impedit, placeat sint nulla distinctio eos
                  repellat maxime nesciunt quod necessitatibus.
                </p>
                <TestmonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img
                src="network.png"
                alt="testimonial-img"
                className="  w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
