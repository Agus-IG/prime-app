import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './components/DataTable';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import Form from './components/Form';
import './app.css'
// import { useFetch } from './useFetch';



export default function MyApp() {

    return (
        <PrimeReactProvider>
            <section className='layout col-12 md:col-6 lg:col-3'>
                <div className='header'>
                    <h1>Header</h1>
                </div>
                <div className='leftSide'>
                    <h2>Menu</h2>
                    <a href="/get"> Table </a>
                    <a href="/post"> Subir usuario </a>
                </div>
                <div className='body'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/get' Component={Table}>
                            </Route>
                            <Route path='/post' Component={Form}>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
                <div className='rightSide'>
                    <h1>ad</h1>
                </div>
                <div className='footer'>
                    <h1>footer</h1>
                </div>
            </section>
        </PrimeReactProvider>
    );
}