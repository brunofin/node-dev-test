import { Controller, Get, Param } from '@nestjs/common';
import orders from '../../Order/Resources/Data/orders';
import products from '../../Order/Resources/Data/products';
import customers from '../../Order/Resources/Data/customers';

@Controller()
export class ReportController {
  @Get("/report/products/:date")
  bestSellers(@Param("date") date: string) {
    const acc = orders
      .filter(({ createdAt }) => createdAt === date)
      .reduce((acc, order) => {
        order.products.forEach(productId => {
          acc[productId] = (acc[productId] + 1) || 1;
        });

        return acc;
      }, {});

    return Object.keys(acc)
      .sort((a, b) => acc[a] - acc[b])
      .slice(0, 1)
      .map((key) => {
        const product = products.find(product => `${product.id}` == key);
        return {
          productName: product.name,
          quantity: acc[key],
          totalPrice: acc[key] * product.price
        };
      })[0] || {};
  }

  @Get("/report/customer/:date")
  bestBuyers(@Param("date") date: string) {
    const acc = orders
      .filter(({ createdAt }) => createdAt === date)
      .reduce((acc, order) => {
        acc[order.customer] = order.products.reduce((acc, productId) => {
          return acc + (products.find(product => product.id == productId).price) || 0;
        }, 0) + (acc[order.customer] || 0);

        return acc;
      }, {});

    return Object.keys(acc)
      .sort((a, b) => acc[a] - acc[b])
      .splice(0, 1)
      .map(key => {
        const customer = customers.find(customer => `${customer.id}` == key);
        return {
          customerName: `${customer.firstName} ${customer.lastName}`,
          totalPrice: acc[key]
        }
      })[0] || {};
  }
}
