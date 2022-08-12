import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/home.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
