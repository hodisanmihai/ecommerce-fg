import stripe from "./stripe";
import { NextApiRequest, NextApiResponse } from "next";

// Definirea tipului pentru cartItem
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export const createCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { cartItems }: { cartItems: CartItem[] } = req.body;

  // Validarea inputului
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ error: "Cartul nu poate fi gol" });
  }

  try {
    // Crearea sesiunii de checkout Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => {
        if (!item.name || !item.price || !item.quantity) {
          throw new Error("Datele produsului sunt incomplete");
        }

        // Validarea prețului
        const unitAmount = Math.round(item.price * 100); // Stripe cere prețul în cenți
        if (isNaN(unitAmount) || unitAmount <= 0) {
          throw new Error("Prețul produsului este invalid");
        }

        return {
          price_data: {
            currency: "ron",
            product_data: {
              name: item.name,
            },
            unit_amount: unitAmount,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout/response/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout/response/cancel`,
    });

    return res.json({ id: session.id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Accesăm mesajul erorii doar dacă `error` este o instanță de `Error`
      console.error("Eroare la crearea sesiunii de checkout:", error.message);
      res.status(500).json({ error: error.message || "A apărut o eroare" });
    } else {
      // Dacă `error` nu este de tipul `Error`, tratăm ca un tip necunoscut
      console.error("Eroare necunoscută:", error);
      res.status(500).json({ error: "A apărut o eroare necunoscută" });
    }
  }
};
