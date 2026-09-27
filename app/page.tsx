'use client';

import { useState } from 'react';

export default function PosPage() {
  // Estado básico para simular un carrito de compras inicial
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);

  const sampleProducts = [
    { id: 1, name: 'Producto de prueba 1', price: 1500 },
    { id: 2, name: 'Producto de prueba 2', price: 2500 },
    { id: 3, name: 'Producto de prueba 3', price: 3500 },
  ];

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
