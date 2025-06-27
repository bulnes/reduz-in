"use client";

import DOMPurify from "isomorphic-dompurify";
import { useEffect, useRef, useState } from "react";
import { HeroeToast } from "./components/toast";
import { submitUrl } from "./utils/submitUrl";

export function Heroe() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isShortening, setIsShortening] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const isShortenedUrlAvailable = shortenedUrl && shortenedUrl.length > 0;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsShortening(true);

    const form = new FormData(event.currentTarget);
    const urlInput = DOMPurify.sanitize(
      form.get("originalUrl")?.toString() || ""
    );
    const originalUrl = urlInput.trim();

    if (!originalUrl) {
      return;
    }

    const shortened = await submitUrl(originalUrl);

    setShortenedUrl(shortened);
    setIsShortening(false);
    formRef.current?.reset();
  };

  const handleCopyShortenedUrl = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
      setIsToastVisible(true);
    }
  };

  useEffect(() => {
    if (isShortening) {
      submitButtonRef.current?.setAttribute("disabled", "true");
    } else {
      submitButtonRef.current?.removeAttribute("disabled");
      copyButtonRef.current?.focus();
    }
  }, [isShortening]);

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 5000); // Hide toast after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isToastVisible]);

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Shorten your links with Reduz.in easily!
          </h1>
          <p className="col-lg-10 fs-4">
            Use our simple and intuitive interface to shorten your links quickly
            and efficiently. No complicated steps, just paste your URL and get a
            shortened version in seconds.
          </p>
        </div>

        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="form-floating mb-3">
              <input
                type="url"
                className="form-control"
                id="originalUrl"
                name="originalUrl"
                placeholder="https://example.com/link-to-your-website"
                required
              />
              <label htmlFor="originalUrl">Website URL</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              ref={submitButtonRef}
            >
              {isShortening ? "Shortening the URL" : "Shorten URL"}
            </button>

            {isShortenedUrlAvailable && (
              <div className="mt-3 pt-3 border-top">
                <h2 className="fs-5">Shortened URL</h2>

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={shortenedUrl}
                    aria-describedby="shortened-url-result"
                    aria-label="Shortened URL"
                    value={shortenedUrl}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="shortened-url-result"
                    name="shortened-url-copy"
                    onClick={handleCopyShortenedUrl}
                    disabled={!isShortenedUrlAvailable}
                    ref={copyButtonRef}
                  >
                    Copy <span className="visually-hidden">Shortened URL</span>
                  </button>
                </div>
              </div>
            )}
          </form>

          <HeroeToast
            visible={isToastVisible}
            message="Shortened URL copied successfully"
          />
        </div>
      </div>
    </div>
  );
}
