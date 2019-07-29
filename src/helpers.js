export const formatPrice = (amount) => {
  return (amount / 100).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });
}