import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../context/CartContext';
import { Table, Button, InputNumber, Space, Divider, Typography, Empty } from 'antd';
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const columns = [
    {
      title: 'Produit',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="flex items-center">
          <img
            src={record.image || 'https://via.placeholder.com/50'}
            alt={text}
            className="w-12 h-12 object-cover mr-4"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Prix',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Quantité',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          max={record.stock}
          defaultValue={record.quantity}
          onChange={(value) => updateQuantity(record._id, value)}
        />
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => `$${(record.price * record.quantity).toFixed(2)}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={() => removeFromCart(record._id)}
        />
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <Title level={3} className="mb-6">
        Votre Panier
      </Title>

      {cartItems.length === 0 ? (
        <Empty
          description={<Text>Votre panier est vide</Text>}
          image={<ShoppingCartOutlined style={{ fontSize: '64px', color: '#999' }} />}
        >
          <Button type="primary">
            <Link to="/shop">Continuer vos achats</Link>
          </Button>
        </Empty>
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={cartItems}
            rowKey="_id"
            pagination={false}
          />

          <Divider />

          <div className="flex justify-end">
            <Space direction="vertical" size="middle" style={{ width: '300px' }}>
              <div className="flex justify-between">
                <Text strong>Total:</Text>
                <Text strong>${total.toFixed(2)}</Text>
              </div>

              <div className="flex justify-between space-x-4">
                <Button onClick={clearCart}>Vider le panier</Button>
                <Button type="primary">
                  <Link to="/checkout">Passer la commande</Link>
                </Button>
              </div>
            </Space>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;