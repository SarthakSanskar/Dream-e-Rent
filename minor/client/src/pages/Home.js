import React, { useEffect, useState } from 'react';
import { getProducts,getProduct,  getProductsByCount, removeProduct } from '../functions/product';
import ProductCard from '../components/cards/ProductCard';
import Jumbotron from '../components/cards/Jumbotron';
import LoadingCard from '../components/cards/LoadingCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts()
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    // sort,order,limit
    getProducts("createdAt" , "desc" , 3).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };



  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center">
      <Jumbotron text = {['New Arrivals' , 'Best Seller' , 'Latest Product']}/> 
      </div>

      <div className='container'>
        { loading ? (<LoadingCard count={6} />
        ) : (
        <div className='row'>
          {products.map((product) => (
            <div key={product._id} className='col-md-4'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>)}
      </div>
    </>
  );
};

export default Home;
