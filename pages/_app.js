import '../styles/globals.css'; // <--- This line is essential for global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
