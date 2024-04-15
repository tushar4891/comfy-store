import React from "react";
import "./Hero.css";
import featureData from "../FeaturedData.jsx";

import hero1 from "../Images/hero1.webp";
import hero2 from "../Images/hero2.webp";
import hero3 from "../Images/hero3.webp";
import hero4 from "../Images/hero4.webp";
import { Link } from "react-router-dom";

const carouselImages = [hero2, hero3, hero4];

function Hero() {
  return (
    <section>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-start align-items-start text-left ms-5">
            <h1 className="display-4 mt-5 fw-bold">
              We are changing the way people shop
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              eligendi veritatis natus facere blanditiis doloremque obcaecati
              nostrum odio dignissimos provident?
            </p>
            <div className="mt-3">
              <Link to="/products" className="btn btn btn-primary">
                Our products
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 ">
          <div
            id="carouselExampleControls"
            class="carousel slide carousel-margin rounded rounded-bottom-5"
            data-bs-ride="carousel"
            style={{ maxWidth: "50%" }} // Set maximum width for the carousel
          >
            <div class="carousel-inner ">
              <div class="carousel-item active ">
                <img
                  src={hero1}
                  class=" w-100 rounded shadow-sm rounded-bottom-5"
                  style={{ objectFit: "cover", border: "4px solid" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={hero2}
                  class=" w-100 rounded shadow-sm rounded-bottom-5"
                  style={{ objectFit: "cover", border: "4px solid" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={hero3}
                  class=" w-100 rounded shadow-sm rounded-bottom-5"
                  style={{ objectFit: "cover", border: "4px solid" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={hero4}
                  class=" w-100 rounded shadow-sm rounded-bottom-5"
                  style={{ objectFit: "cover", border: "4px solid" }}
                  alt="..."
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators">
              <button
                class="active"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="0"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="3"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="row " style={{ marginTop: "60px" }}>
          <h1 className="display-6 text-left ms-5"> Featured Products</h1>
          <hr
            class="bg-danger border-bottom border-dark border-1"
            style={{ width: "90%", marginLeft: "50px", marginTop: "20px" }}
          />
        </div>
        <div>
          <div className="row ms-3">
            {featureData.map((data, index) => (
              <div className="col-md-4" key={index}>
                {
                  <>
                    <Link
                      to={`/products/${data.id}`}
                      state={{ data: data }}
                      style={{ textDecoration: "none" }}
                    >
                      <div key={index} className="card custom-card">
                        {
                          <img
                            src={data.attributes.image}
                            className="card-img-top img-fluid rounded-3 ms-3 mt-3"
                            alt=""
                            style={{
                              objectFit: "cover",
                              height: "200px",
                              width: "350px",
                              border: "2px solid",
                            }}
                          />
                        }
                        <div className="card-body d-flex flex-column justify-content-center shadow-sm">
                          <h5 className="card-title text-center">
                            {data.attributes.title}
                          </h5>
                          <p className="card-text text-center">
                            <span>$</span>
                            {data.attributes.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </>
                }
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Empty div for space */}
      <div style={{ height: "50px" }}></div>
    </section>
  );
}

export default Hero;
