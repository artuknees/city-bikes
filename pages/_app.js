import AppContext from '../src/context/AppContext';
import useInitialState from '../src/hooks/useInitialState';
import Header from '../src/components/Header';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
  
  
  
  
  
}

export default MyApp
