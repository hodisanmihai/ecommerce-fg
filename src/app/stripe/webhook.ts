// webhooks.ts
import stripe from "./stripe"; // importă configurația Stripe
import { Request, Response } from "express";

// Secretul pentru webhook-ul tău (obținut din dashboard-ul Stripe)
const endpointSecret = "whsec_yourWebhookSecretHere";

// Endpoint pentru a asculta evenimentele Stripe
export const handleStripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];
  if (!sig) {
    return res.status(400).send("Semnătura Stripe lipsă");
  } // semnătura webhook
  let event;

  try {
    // Verificăm semnătura pentru a ne asigura că este un webhook valid
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        // Procesăm comanda și actualizăm baza de date
        console.log(`Sesiunea de checkout a fost finalizată: ${session.id}`);
        break;
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        // Poți actualiza starea comenzii la succes
        console.log(
          `Plata a fost finalizată pentru PaymentIntent: ${paymentIntent.id}`
        );
        break;
      case "payment_intent.payment_failed":
        const failedPaymentIntent = event.data.object;
        // Poți actualiza starea comenzii la eșec
        console.log(
          `Plata a eșuat pentru PaymentIntent: ${failedPaymentIntent.id}`
        );
        break;
      // Poți adăuga mai multe evenimente după necesități
      default:
        console.log(`Eveniment Stripe necunoscut: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err: any) {
    console.log("Eroare la procesarea webhook-ului Stripe:", err);
    res.status(400).send(`Webhook error: ${(err as Error).message}`);
  }
};
