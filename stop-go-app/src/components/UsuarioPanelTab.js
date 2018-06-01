import React from 'react'
import { Tab } from 'semantic-ui-react'
import { PruebaFormUpdate } from './PruebaFormUpdate'
import { PerfilUsuario } from './PerfilUsuario'
import { FormPublicarViaje } from './FormPublicarViaje'
import { TripList } from './TripList'


const panes = [
  { menuItem: 'Mi perfil', render: () => <Tab.Pane><PerfilUsuario /></Tab.Pane> },
  { menuItem: 'Modificar perfil', render: () => <Tab.Pane><PruebaFormUpdate /></Tab.Pane> },
  { menuItem: 'Tus viajes', render: () => <Tab.Pane><TripList /></Tab.Pane> },
  { menuItem: 'Publicar viajes', render: () => <Tab.Pane><FormPublicarViaje /></Tab.Pane> },
  { menuItem: 'Buscar viajes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  // { menuItem: 'Monedero StopGo', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  // { menuItem: 'Puntúa a otros usuarios', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const UsuarioPanelTab = () => <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />

export default UsuarioPanelTab