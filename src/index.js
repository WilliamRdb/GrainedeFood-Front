// == Import : npm
import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
//import redux
import { Provider } from 'react-redux';
import { store, persistor } from 'src/store/index.js';
import { PersistGate } from 'redux-persist/integration/react'

import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
// == Import : local 
// Composants
import App from 'src/containers/App';
import ScrollToTop from 'src/components/ScrollToTop'
// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = 
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router> 
        <ScrollToTop />
        <App />
      </Router>
    </PersistGate>
  </Provider>
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
ReactDom.render(rootReactElement, target);
