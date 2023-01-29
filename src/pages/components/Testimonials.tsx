import { useState } from "react";

export default function Testimonials() {
  const [testimonials, settestimonials] = useState([
    {
      name: "Lindo Manana",
      img: "",
      comment: {
        title: "Lindo Title",
        description: "lindo Body",
      },
    },
    {
      name: "Simo Ngquseka",
      img: "",
      comment: {
        title: "Simo Title",
        description: "Simo description",
      },
    },
    {
      name: "Cebo Mzize",
      img: "",
      comment: {
        title: "Cebo Title",
        description: "cebo description",
      },
    },
  ]);

  const [current, setCurrent] = useState(testimonials[1]);

  return (
    <div>
      <section className="testimonials">
        <div className="sect-test">
          <h3>Testiompnials</h3>
          <h1> {current.comment.title}</h1>
          <div className="decor-circle"></div>
          <p>{current.comment.description}</p>
          <div className="right-circle"></div>
        </div>
      </section>

      <section className="clients">
        {testimonials.map((item) => (
          <div
            className="client"
            onMouseOver={() => {
              setCurrent(item);
            }}
          >
            <img src={item.img} alt="" />
            <h3 className="client-name">{item.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}
