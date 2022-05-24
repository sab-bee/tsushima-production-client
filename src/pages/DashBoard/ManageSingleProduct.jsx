import React from 'react';

const ManageSingleProduct = ({ part }) => {
  const { name, image, price, description, minimumQuantity, availableQuantity } = part
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default ManageSingleProduct;