import CartMenu from "./components/layout/cart_menu";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/header";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
      <CartMenu />
      <Footer />
    </div>
  );
}

export default App;
