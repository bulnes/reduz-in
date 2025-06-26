import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Reduz.in
        </Link>
      </div>
    </nav>
  );
}
