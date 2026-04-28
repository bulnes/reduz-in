import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            REDUZ-IN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary ms-lg-3 rounded-pill px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 text-center container-fluid bg-light border-bottom">
        <div className="row py-lg-5 justify-content-center">
          <div className="col-lg-6 col-md-8">
            <h1 className="display-3 fw-bold text-dark mb-4">
              Modern Performance <br />
              <span className="text-primary">Redefined.</span>
            </h1>
            <p className="lead text-muted mb-5">
              Experience the power of Next.js 16 and Bootstrap 5 combined. 
              Lightning fast, fully responsive, and server-side rendered for optimal SEO.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm"
              >
                Explore More
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-5 py-3 rounded-pill"
              >
                View Source
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="row g-4 py-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body p-4">
                  <div className="mb-3 text-primary">
                    <i className="bi bi-lightning-fill fs-1"></i>
                  </div>
                  <h3 className="h4 fw-bold">Fast Rendering</h3>
                  <p className="text-muted">
                    Server-side rendering ensures your content is visible instantly to users and search engines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body p-4">
                  <div className="mb-3 text-success">
                    <i className="bi bi-shield-check fs-1"></i>
                  </div>
                  <h3 className="h4 fw-bold">Secure by Default</h3>
                  <p className="text-muted">
                    Built with the latest security standards in mind, keeping your data and users safe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body p-4">
                  <div className="mb-3 text-info">
                    <i className="bi bi-palette-fill fs-1"></i>
                  </div>
                  <h3 className="h4 fw-bold">Rich Aesthetics</h3>
                  <p className="text-muted">
                    A beautiful, modern design language that provides an exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                Bootstrap JS Verification
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              If you see this modal, Bootstrap JavaScript is correctly configured and working on the client side!
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary rounded-pill px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary rounded-pill px-4">
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">&copy; 2026 Reduz-in. Built with Next.js & Bootstrap.</p>
        </div>
      </footer>
    </main>
  );
}
