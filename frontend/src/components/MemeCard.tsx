import React from 'react';

export const MemeCard = () => {
  return (
    <div className="card border-pink">
      <div className="card-header text-capitalize">
        <img className="rounded" src="https://image.flaticon.com/icons/png/512/64/64572.png" alt="user" width="30" />{' '}
        <strong>la pelota no se mancha</strong>
        {/* <div className="row">
          <div className="col-9">
          </div>
          <div className="col-3 text-center">
          </div>
        </div> */}
      </div>
      <div className="card-body">
        <img
          src="https://image.freepik.com/foto-gratis/jugadores-futbol-soccer-competencia-equipo-rojo-azul-estadio-deportivo_43569-10.jpg"
          alt="Futbol"
          width="100%"
        />
        <div className="row mt-2">
          <div className="col text-left">150 comentarios</div>
          <div className="col text-right">
            <button className="btn btn-sm btn-outline-pink">
              <i className="fas fa-eye"></i> Ver más...
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-6 text-pink">
            <i className="fas fa-thumbs-up"></i> 150 <i className="fas fa-thumbs-down"></i> 120
          </div>
          <div className="col-6 text-right">
            <p className="text-muted">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
