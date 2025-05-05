import { NextResponse } from "next/server";
import Stripe from "stripe";

// Inițializează Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil", // folosește o versiune stabilă
});

// Definirea tipului pentru un articol din coș
type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export async function POST(req: Request) {
  try {
    // Extrage cartItems din corpul cererii, aplicând tipul CartItem[]
    const { cartItems }: { cartItems: CartItem[] } = await req.json();

    console.log("cartItems:", cartItems); // vezi ce primești

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "ron",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // asigură-te că e integer
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout/response/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout/response/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error(
      "Eroare la crearea sesiunii de checkout:",
      error.message,
      error
    );
    return NextResponse.json(
      { error: error.message || "Unknown server error" },
      { status: 500 }
    );
  }
}
