import ShortenerForm from "@/components/ShortenerForm";

export default function Home() {
  return (
    <main>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            Reduz<span className="text-primary">.in</span>
          </a>
        </div>
      </nav>

      <header className="bg-dark text-white py-5 pb-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-black mb-3">Links curtos, grandes resultados.</h1>
              <p className="lead text-white-50 mb-5">
                A alternativa mais completa e acessível para transformar seus URLs em ferramentas de marketing.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 overlap-card">
            <ShortenerForm />
          </div>
        </div>

        <section className="py-5 my-5">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-3">
                <div className="display-6 mb-3">🚀</div>
                <h5 className="fw-bold">Alta Performance</h5>
                <p className="text-secondary">Redirecionamentos instantâneos para não perder nenhum clique.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <div className="display-6 mb-3">📊</div>
                <h5 className="fw-bold">Analytics Full</h5>
                <p className="text-secondary">Dados detalhados de cliques e origem sem custos extras.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <div className="display-6 mb-3">🛡️</div>
                <h5 className="fw-bold">Segurança Total</h5>
                <p className="text-secondary">Monitoramento contra spam e phishing ativo 24/7.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-white py-4 border-top">
        <div className="container text-center">
          <p className="text-muted mb-0 small">
            &copy; 2026 <span className="fw-bold">Reduz.in</span> - O encurtador inteligente.
          </p>
        </div>
      </footer>
    </main>
  );
}
