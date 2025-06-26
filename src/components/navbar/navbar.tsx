import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/reduzin-crop.png"
            alt=""
            width={20}
            height={20}
            className="d-inline-block align-text-top me-1"
          />
          Reduz.in
        </Link>
      </div>
    </nav>
  );
}
