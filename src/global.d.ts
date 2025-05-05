declare global {
  interface Window {
    Stripe: unknown; // Adăugăm Stripe pe obiectul window
  }
}

export {};
