declare global {
  interface Window {
    Stripe: any; // Adăugăm Stripe pe obiectul window
  }
}

export {};
