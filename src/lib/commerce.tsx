// Import the Commerce module
import Commerce from '@chec/commerce.js';

// Create a Commerce instance
export const commerce = new Commerce(
  process.env.NEXT_PUBLIC_COMMERCE_KEY,
  true
);
