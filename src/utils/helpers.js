// export const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: "USD"
//     }).format(price / 100);
// }
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price*150);
}
