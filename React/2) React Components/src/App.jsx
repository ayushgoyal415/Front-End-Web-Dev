//. By convention, use PascalCasing for react custom components
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    //. By convention, don't use function call operator
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
