// Form frontend-only per ora; predisposto per essere collegato in seguito
// a Formspree / Resend / Cloudflare Workers (vedi punto 18 del brief).

export default function Contatti() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: collegare a un servizio di invio form
  }

  return (
    <section className="container py-32 max-w-2xl">
      <h1 className="font-display text-display-lg mb-4">Raccontami il tuo progetto.</h1>
      <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
        <label className="flex flex-col gap-2 text-sm">
          Nome
          <input name="nome" required className="border-b border-muted bg-transparent py-2" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input type="email" name="email" required className="border-b border-muted bg-transparent py-2" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Azienda / Brand
          <input name="azienda" className="border-b border-muted bg-transparent py-2" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Messaggio
          <textarea name="messaggio" rows={4} className="border-b border-muted bg-transparent py-2" />
        </label>
        <button type="submit" className="mt-4 self-start bg-primary text-bg px-6 py-3">
          Invia richiesta →
        </button>
      </form>
    </section>
  );
}
