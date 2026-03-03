const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1518441902110-67c1f7f98e9e?w=500&h=500&fit=crop",
    description:
      "Portable Bluetooth speaker with deep bass and 12-hour battery life. Perfect for indoor and outdoor use.",
  },
  {
    id: 10,
    name: "Gaming Chair",
    price: 199.99,
    image:
"https://www.ikea.com/in/en/images/products/matchspel-gaming-chair-bomstad-black__0985645_pe816716_s5.jpg?f=xl",
    description:
      "Ergonomic gaming chair with lumbar support and adjustable armrests for long gaming sessions.",
  },
  {
    id: 11,
    name: "External SSD 1TB",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=500&fit=crop",
    description:
      "High-speed 1TB external SSD with USB-C connectivity. Fast, reliable, and compact storage solution.",
  },
  {
    id: 12,
    name: "Desk Lamp LED",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description:
      "Modern LED desk lamp with adjustable brightness and touch controls. Energy-efficient design.",
  },
  {
    id: 13,
    name: "Noise Cancelling Earbuds",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&h=500&fit=crop",
    description:
      "Compact wireless earbuds with active noise cancellation and crystal-clear sound.",
  },
  {
    id: 14,
    name: "4K Monitor",
    price: 399.99,
    image:
    "https://tse1.mm.bing.net/th/id/OIP.envVjBAKWvcgzNnnhfkIGgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "27-inch 4K UHD monitor with ultra-thin bezels and vibrant color accuracy.",
  },
  {
    id: 15,
    name: "Portable Power Bank",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    description:
      "10000mAh portable power bank with fast charging support and dual USB output.",
  },
  {
    id: 16,
    name: "Wireless Charger",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
