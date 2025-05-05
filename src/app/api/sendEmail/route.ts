// src/app/api/sendEmail/sendEmail.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend"; // Asigură-te că ai importat corect Resend

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface SendEmailBody {
  name: string;
  email: string;
  phone: string;
  cart: CartItem[];
  totalAmount: number;
}

export async function POST(req: NextRequest) {
  try {
    // Extragem datele din corpul cererii (request body)
    const { name, email, phone, cart, totalAmount }: SendEmailBody =
      await req.json();

    // Creează instanța Resend
    const resend = new Resend(process.env.RESEND_API_KEY!); // Înlocuiește cu cheia ta de API de la Resend

    // Trimiterea emailului folosind metoda corectă `send`
    const emailResponse = await resend.emails.send({
      from: "mihaihodisan@gmail.com", // Schimbă cu un email valid
      to: email,
      subject: `Confirmare Comandă - ${name}`,
      html: `
        <h2>Detalii Comandă</h2>
        <p><strong>Înregistrat de:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <h3>Produse comandate:</h3>
        <ul>
          ${cart
            .map(
              (item) =>
                `<li>${item.name} - ${item.quantity} x ${item.price} RON</li>`
            )
            .join("")}
        </ul>
        <p><strong>Total:</strong> ${totalAmount} RON</p>
        <p>Mulțumim pentru achiziția făcută!</p>
      `,
    });

    // Răspuns de succes
    return NextResponse.json({
      message: "Email trimis cu succes!",
      emailResponse,
    });
  } catch (error) {
    console.error("Eroare la trimiterea emailului:", error);
    return NextResponse.json(
      { error: "A apărut o problemă la trimiterea emailului." },
      { status: 500 }
    );
  }
}
