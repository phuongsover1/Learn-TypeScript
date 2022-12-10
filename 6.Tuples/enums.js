"use strict";
console.log(0 /* OrderStatus.PENDING */); // 0
function isDelivered(status) {
    return status === 2 /* OrderStatus.DELIVERED */;
}
console.log(isDelivered(2 /* OrderStatus.DELIVERED */));
console.log(isDelivered(1 /* OrderStatus.SHIPPED */));
// A bit more about Enum
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
