import Stripe from "stripe";

const stripe = new Stripe("process.env.STRIPE_SECRET_KEY", {
  apiVersion: "2025-04-30.basil", // Asigură-te că folosești versiunea corectă
});

export default stripe;
