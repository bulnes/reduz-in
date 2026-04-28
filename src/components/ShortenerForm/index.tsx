"use client";

import { useState, useRef } from "react";
import styles from "./ShortenerForm.module.css";

export default function ShortenerForm() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de lógica de backend
    setTimeout(() => {
      const randomSlug = Math.random().toString(36).substring(2, 8);
      setShortenedUrl(`reduz.in/${randomSlug}`);
      setLoading(false);

      // Scroll para o resultado
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }, 800);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={`card ${styles.shortener} p-4 p-md-5 bg-white`}>
      <form onSubmit={handleSubmit} className="shortener__form">
        <div className="row g-3">
          <div className="col-md-9">
            <input
              type="url"
              className={`form-control ${styles["shortener__input"]}`}
              placeholder="Cole sua URL longa aqui..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3 d-grid">
            <button
              className={`btn ${styles["shortener__button"]} btn-lg`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Encurtando..." : "Reduzir"}
            </button>
          </div>
        </div>
      </form>

      {shortenedUrl && (
        <div ref={resultRef} className={`${styles["shortener__result"]} p-4 mt-4 text-center`}>
          <p className="mb-2 text-muted small fw-bold text-uppercase">
            Link pronto para usar:
          </p>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
            <span className={styles["shortener__url"]}>{shortenedUrl}</span>
            <button
              className={`btn ${copied ? "btn-success" : "btn-outline-dark"} btn-sm px-4`}
              onClick={copyToClipboard}
            >
              {copied ? "Copiado!" : "Copiar Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
