import stripe from "./stripe";
import { NextApiRequest, NextApiResponse } from "next";

export const createCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { cartItems } = req.body; // Cartul primit de la front-end

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item: any) => ({
        price_data: {
          currency: "ron",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Stripe cere prețul în cenți
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout/response/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout/response/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Eroare la crearea sesiunii de checkout:", error);
    res.status(500).send("A apărut o eroare");
  }
};
