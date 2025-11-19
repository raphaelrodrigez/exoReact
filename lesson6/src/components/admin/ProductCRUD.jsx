import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { Button, Table, Modal, Form, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

const { Option } = Select;

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchTags();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('/api/products');
    setProducts(res.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get('/api/categories');
    setCategories(res.data);
  };

  const fetchTags = async () => {
    const res = await axios.get('/api/tags');
    setTags(res.data);
  };

  const handleCreate = () => {
    setSelectedProduct(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    form.setFieldsValue({
      ...product,
      category: product.category._id,
      tags: product.tags.map(tag => tag._id),
    });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchProducts();
  };

  const handleDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailModalVisible(true);
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();
    if (selectedProduct) {
      await axios.put(`/api/products/${selectedProduct._id}`, values, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
    } else {
      await axios.post('/api/products', values, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
    }
    setIsModalVisible(false);
    fetchProducts();
  };

  const columns = [
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Prix',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => handleDetail(record)}
          />
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          />
        </div>
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Produits</h1>
        <Button type="primary" onClick={handleCreate}>
          Ajouter un Produit
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={products}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={selectedProduct ? 'Modifier Produit' : 'Ajouter Produit'}
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={() => setIsModalVisible(false)}
        width={700}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Nom" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="price" label="Prix" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="category" label="Catégorie" rules={[{ required: true }]}>
            <Select>
              {categories.map((cat) => (
                <Option key={cat._id} value={cat._id}>
                  {cat.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <Select mode="multiple">
              {tags.map((tag) => (
                <Option key={tag._id} value={tag._id}>
                  {tag.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Détails du Produit"
        visible={isDetailModalVisible}
        onCancel={() => setIsDetailModalVisible(false)}
        footer={null}
      >
        {selectedProduct && (
          <div>
            <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
            <p className="text-gray-600">{selectedProduct.description}</p>
            <p className="text-lg font-semibold">${selectedProduct.price.toFixed(2)}</p>
            <p>Stock: {selectedProduct.stock}</p>
            <div className="mt-4">
              <h3 className="font-bold">Catégorie:</h3>
              <p>{selectedProduct.category?.name}</p>
            </div>
            <div className="mt-2">
              <h3 className="font-bold">Tags:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedProduct.tags?.map((tag) => (
                  <span key={tag._id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default ProductCRUD;