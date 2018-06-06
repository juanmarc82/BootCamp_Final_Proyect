import React from 'react'
import { Tab } from 'semantic-ui-react'
import { FormUpdateUser } from "./FormUpdateUser";
import { PerfilUsuario } from './PerfilUsuario'
import { FormPublicarViaje } from './FormPublicarViaje'
import { TripList } from './TripList'
import { FormBuscarViaje } from './FormBuscarViaje';


const panes = [
  { menuItem: 'Mi perfil', render: () => <Tab.Pane><PerfilUsuario /></Tab.Pane> },
  { menuItem: 'Modificar perfil', render: () => <Tab.Pane><FormUpdateUser /></Tab.Pane> },
  { menuItem: 'Tus viajes', render: () => <Tab.Pane><TripList /></Tab.Pane> },
  { menuItem: 'Publicar viajes', render: () => <Tab.Pane><FormPublicarViaje /></Tab.Pane> },
  { menuItem: 'Buscar viajes', render: () => <Tab.Pane><FormBuscarViaje /></Tab.Pane> }
]

const UserPanelTab = () => <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />

export default UserPanelTab;