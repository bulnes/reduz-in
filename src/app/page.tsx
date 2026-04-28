import ShortenerForm from "@/components/ShortenerForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg position-absolute w-100 mt-3">
        <div className="container">
          <a className={`navbar-brand ${styles["navbar__brand"]}`} href="#">
            Reduz<span className={styles["navbar__brand-dot"]}>.in</span>
          </a>
        </div>
      </nav>

      <header className={`${styles.hero} text-center`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-3">
                Links curtos, grandes resultados.
              </h1>
              <p className="lead opacity-75 mb-0">
                A alternativa mais completa e acessível para transformar seus URLs em ferramentas de marketing.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ShortenerForm />
          </div>
        </div>

        <section className="mt-5 pt-5">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className={styles["feature__icon"]}>🚀</div>
              <h5 className="fw-bold">Alta Performance</h5>
              <p className="text-muted">
                Redirecionamentos instantâneos para não perder nenhum clique.
              </p>
            </div>
            <div className="col-md-4">
              <div className={styles["feature__icon"]}>📊</div>
              <h5 className="fw-bold">Analytics Full</h5>
              <p className="text-muted">
                Dados detalhados de cliques, países e dispositivos sem custos extras.
              </p>
            </div>
            <div className="col-md-4">
              <div className={styles["feature__icon"]}>🛡️</div>
              <h5 className="fw-bold">Segurança Total</h5>
              <p className="text-muted">
                Monitoramento contra spam e phishing em tempo real.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className={`${styles.footer} text-center`}>
        <div className="container">
          <p className="text-muted mb-0 small">
            © 2026 <strong>Reduz.in</strong> - Simplificando a web, um link por vez.
          </p>
        </div>
      </footer>
    </main>
  );
}
