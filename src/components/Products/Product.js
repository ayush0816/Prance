import React from "react";
import Heading from "./Heading";
import Description from "./Description";
import classNames from "classnames";

function Product() {
  let data = [
    {
      id: 1,
      heading: "Flexible Packaging Films",
      description:
        "Our Flexible Packaging films are used by the worlds best flexible packaging manufacturers, servicing leading global FMCG brands, because we are able to provide a solution for every need - ranging from optical properties, superior printability and low sealing temperature, to high hot tack, low COF and stable COF, which are required for any flexible packaging application.",
      buttons: [
        "Printing And Pouching Films",
        "Overwrap Packaging Films",
        "Barrier Films",
      ],
      isOpen: true,
    },
    {
      id: 2,
      heading: "Lamination Films",
      description:
        "Lamination is generally done on printed surface to protect it and provide it longevity. Therefore lamination films find their way into mostly print publishing and graphic art film segments. However today, lamination films are widely used for rendering beautiful textures and premium tactile feel to luxury packs as well. We supply films meant for both applications to both laminators/printers and packaging manufacturers through our network of distributors spread across the globe.",
      buttons: [
        "Lamination Films- Standard Range",
        "Laminating Films- Special Applications",
        "Premium Lamination Films",
      ],
      isOpen: true,
    },
    {
      id: 3,
      heading: "Label Films",
      description:
        "We understand the importance of the role, that Product Labels plays in creating brand value, besides distinguishing the company’s product from the competition and ensuring legibility of the information printed on it. Our range of Label Films and Coated Labels enable complete information legibility on a constricted surface area available for the brand presentation. The transparent label films offer a perfect ‘no label’ look, while the metallized labels add to the shelf appeal of the pack.",
      buttons: [
        "Pressure Sensitive LabelStock Films",
        "Wrap Around Label Films",
        "In Mould Label (IML) Films",
        "Label Over Lamination Films",
        "Direct Thermal Printable (DTP) Films",
      ],
      isOpen: true,
    },
    {
      id: 4,
      heading: "Industrial Films",
      description:
        "We offer a wide range of ready to use industrial film for useful applications, such as adhesive tapes, textile bags, long lasting printing applications etc. Our range of industrial films include:",
      buttons: [
        "Industrial Films",
      ],
      isOpen: true,
    },
  ];

  function onClickHandler(id) {
    data=data.map((dat) => {
      if(dat.id == id)
      {
        const d={...dat, isOpen:!dat.isOpen}

        return d;
      }
      return dat;
    })
  }

  return (
    <div className="p-4">
      <div className="flex flex-row p-8">
        <button className="w-12">
          <img src={require("../../images/icons8-go-back-96.png")} />
        </button>
        <div className="w-full flex justify-center">
          <h4 className="font-bold text-3xl underline">Products</h4>
        </div>
      </div>
      <div className="flex flex-row px-4 flex-wrap justify-center">
        {data.map((item, index) => {
          return (
            <>
              {index % 2 == 0 ? (
                <div key={item.id}
                  className={classNames(
                    "flex flex-row justify-evenly shadow-lg rounded-2xl mb-5",
                    { "w-full p-3": item.isOpen,
                  "w-1/3 h-20" : !item.isOpen }
                  )}
                >
                  <Heading id={item.id} heading={item.heading} onClick={onClickHandler} />
                  {item.isOpen && (
                    <Description
                      description={item.description}
                      buttons={item.buttons}
                    />
                  )}
                </div>
              ) : (
                <div key={item.id}
                className={classNames(
                  "flex flex-row justify-evenly shadow-lg rounded-2xl mb-5",
                  { "w-full p-3": item.isOpen,
                "w-1/3 h-20" : !item.isOpen }
                )}
                >
                  {item.isOpen && (
                    <Description
                      description={item.description}
                      buttons={item.buttons}
                    />
                  )}
                  <Heading id={item.id} heading={item.heading} onClick={onClickHandler}/>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
