export function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © {new Date().getFullYear()} - All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
