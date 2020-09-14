import React from 'react';

export const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron bg-light">
            <h1 className="display-4">About Memegram</h1>
            <p className="lead">Trabajo Final - Diplomatura.js</p>
            <hr />
            <p>Profesores:</p>

            <p className="lead text-right">Juan Gabriel</p>
            <p className="lead text-right">Rodrigo Ignacio Falco</p>
            <hr />
            <p>Alumnos:</p>

            <p className="lead text-right">Maria Jose Rotter</p>
            <p className="lead text-right">Jose Luis Saavedra</p>
            <p className="lead text-right">Eduardo Cuomo</p>
            <p className="lead text-right">Cristian Gavilan</p>
            <hr />

            <p className="text-muted text-center">Septiembre 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};
