import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Cardd from "./components/Card";
import PrimarySearchAppBar from "./components/Navbar";
import YouTube from "./components/Skeleton";

function App() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);

  let fetchApi = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Xato yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <PrimarySearchAppBar />
      <div className="container">
        {loading ? (
          <YouTube />
        ) : (
          <div className="wrapper">
            {products.map((item) => (
              <Cardd
                key={item.id}
                title={item.name}
                image={item.image}
                desc={item.description}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
