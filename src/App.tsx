import {
  IonApp,
  IonContent,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

/* Components */
import Login from './components/login/Login';
import Visitor from './components/visitor/Visitor';
import Connected from './components/connected/Connected';


/**
 * @returns routeur externe dirige vers l'app du promeneur ou bien vers la connection begreen
 */
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonContent>
        <IonRouterOutlet>
          <Route exact path="/connected">
            <Connected />
          </Route>

          <Route exact path="/visitor">
            <Visitor />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      </IonContent>
    </IonReactRouter>
  </IonApp>
);

export default App;
