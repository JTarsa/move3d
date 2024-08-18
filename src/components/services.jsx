import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nasze usługi</h2>
          <p>
            Realizujemy zarówno druk gotowych projektów, jak i tworzenie modeli
            od podstaw. Nasze usługi są idealne dla osób i firm poszukujących
            precyzyjnych i Wykorzystujemy różnorodne tworzywa, takie jak PLA,
            PET-G, ABS, czy TPU (filamenty typu FLEX), co pozwala nam na
            dostosowanie wydruków do specyficznych potrzeb naszych klientów.
            Nasza technologia druku 3D umożliwia realizację produkcji
            małoseryjnej, co jest idealnym rozwiązaniem dla firm, które
            potrzebują prototypów lub krótkich serii produkcyjnych.
          </p>
        </div>
        <div className="row custom-font">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 font-mono">
                  {" "}
                  <a href={d.name}>
                    <img
                      src={d.image}
                      className="service-img"
                      alt={`serviseImage-${d.name}`}
                    />
                  </a>
                  {/* <i className={d.icon}></i> */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
