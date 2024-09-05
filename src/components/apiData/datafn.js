export async function getmeals() {
    const response = await fetch('/api/products');
    const data = await response.json();
    return data;
  }