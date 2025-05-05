import stripe from "./stripe"; // importă configurația Stripe
import { Request, Response } from "express";

// Secretul pentru webhook-ul tău (obținut din dashboard-ul Stripe)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Endpoint pentru a asculta evenimentele Stripe
export const handleStripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];
  if (!sig) {
    return res.status(400).send("Semnătura Stripe lipsă");
  }

  let event;

  try {
    // Asigură-te că body-ul cererii este brut, pentru a putea valida semnătura
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    // Procesăm evenimentul pe baza tipului
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        // Poți actualiza comanda în baza de date sau să trimiți un email
        console.log(`Sesiunea de checkout a fost finalizată: ${session.id}`);
        // Actualizează starea comenzii în baza de date
        // Example: await updateOrderStatus(session.id, 'completed');
        break;

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        // Actualizează starea comenzii pentru plata reușită
        console.log(
          `Plata a fost finalizată pentru PaymentIntent: ${paymentIntent.id}`
        );
        // Example: await updateOrderStatus(paymentIntent.id, 'paid');
        break;

      case "payment_intent.payment_failed":
        const failedPaymentIntent = event.data.object;
        // Actualizează starea comenzii pentru plata eșuată
        console.log(
          `Plata a eșuat pentru PaymentIntent: ${failedPaymentIntent.id}`
        );
        // Example: await updateOrderStatus(failedPaymentIntent.id, 'failed');
        break;

      default:
        console.log(`Eveniment Stripe necunoscut: ${event.type}`);
        break;
    }

    // Răspuns de succes
    res.json({ received: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      // Accesăm mesajul erorii doar dacă `err` este o instanță de `Error`
      console.error("Eroare la procesarea webhook-ului Stripe:", err);
      // Răspuns de eroare cu mesaj detaliat
      res.status(400).send(`Webhook error: ${err.message}`);
    } else {
      // Dacă `err` nu este de tipul `Error`, tratăm ca un tip necunoscut
      console.error("Eroare necunoscută:", err);
      res.status(400).send("Webhook error: Eroare necunoscută");
    }
  }
};
