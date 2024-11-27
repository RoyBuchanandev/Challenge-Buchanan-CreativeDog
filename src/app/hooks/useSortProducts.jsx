import { useState } from "react";

export const useSorting = (initialOption = "default") => {
  const [sortOption, setSortOption] = useState(initialOption);

  const sortProducts = (products, option) => {
    switch (option) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  const sortedProducts = (products) => sortProducts(products, sortOption);

  return {
    sortOption,
    setSortOption,
    sortedProducts,
  };
};
