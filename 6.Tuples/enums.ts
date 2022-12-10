// Introducing to Enums
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
console.log(OrderStatus.PENDING); // 0

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(OrderStatus.DELIVERED));
console.log(isDelivered(OrderStatus.SHIPPED));
