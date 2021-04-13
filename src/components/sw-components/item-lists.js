import React from 'react';
import ItemList from '../item-list';
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose } from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapGalacticashipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllGalacticaships
  };
};

const PersonList = compose(
                     withSwapiService(mapPersonMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

const PlanetList = compose(
                     withSwapiService(mapPlanetMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

const GalacticashipList = compose(
                       withSwapiService(mapGalacticashipMethodsToProps),
                       withData,
                       withChildFunction(renderModelAndName)
                     )(ItemList);

export {
  PersonList,
  PlanetList,
  GalacticashipList
};
