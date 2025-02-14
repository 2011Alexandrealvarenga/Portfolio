import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css';
import './App.css';
import AppHeader from './components/pages/header';
import AppObjProfissional from './components/pages/obj-profissional';
import AppTecnologia from './components/pages/tecnologia';
import AppEscolaridade from './components/pages/escolaridade';
import AppEProfissional from './components/pages/exp-profissional';
import AppTrabalhos from './components/pages/trabalhos';
import AppCurso from './components/pages/curso';
import AppSobre from './components/pages/sobre';

function App() {
  return (
    <>
    <header id="header">
      <AppHeader/>
    </header>
    <main>
      <AppSobre/>
      <AppObjProfissional />
      <AppTecnologia />
      <AppEscolaridade />
      <AppEProfissional />
      <AppTrabalhos />
      <AppCurso />
    </main>
    </>
  );
}

export default App;
