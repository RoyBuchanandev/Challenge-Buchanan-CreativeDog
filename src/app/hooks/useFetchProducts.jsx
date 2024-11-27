import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://jellyfish-app-mpahs.ondigitalocean.app/api/products?pageSize=12&page=1'
        );
        setProductos(response.data.data);
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { productos, loading, error };
};

export default useFetchProducts;
