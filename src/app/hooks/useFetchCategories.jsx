import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCategories = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://jellyfish-app-mpahs.ondigitalocean.app/api/categories?pageSize=10&page=1'
        );
        setCategorias(response.data.data);
      } catch (err) {
        setError('Error fetching categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categorias, loading, error };
};

export default useFetchCategories;
