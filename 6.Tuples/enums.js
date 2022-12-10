"use strict";
// Introducing to Enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.PENDING); // 0
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.DELIVERED));
console.log(isDelivered(OrderStatus.SHIPPED));
