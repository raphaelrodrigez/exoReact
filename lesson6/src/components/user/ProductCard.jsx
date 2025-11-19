import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Button, Card, Badge } from 'antd';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="m-2"
    >
      <Card
        hoverable
        cover={
          <img
            alt={product.name}
            src={product.images[0] || 'https://via.placeholder.com/300'}
            className="h-48 object-cover"
          />
        }
        actions={[
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => {}}
          >
            <Link to={`/product/${product._id}`}>Détails</Link>
          </Button>,
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={() => addToCart(product)}
          >
            Ajouter
          </Button>,
        ]}
      >
        <Meta
          title={product.name}
          description={
            <>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.stock > 0 ? (
                  <Badge status="success" text="En stock" />
                ) : (
                  <Badge status="error" text="Rupture" />
                )}
              </div>
            </>
          }
        />
      </Card>
    </motion.div>
  );
};

export default ProductCard;