export function Features() {
  return (
    <div className="container px-4 py-5">
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 border-top">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            Shorten your links with ease
          </h2>
          <p className="text-body-secondary">
            Use our simple and intuitive interface to shorten your links quickly
            and efficiently. No complicated steps, just paste your URL and get a
            shortened version in seconds.
          </p>
        </div>
        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Devices and browsers
              </h4>
              <p className="text-body-secondary">
                Our service works seamlessly across all devices and browsers
              </p>
            </div>
            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Fast and reliable
              </h4>
              <p className="text-body-secondary">
                Your links are shortened quickly and reliably, with consistent
                performance.
              </p>
            </div>
            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Shorten any URL
              </h4>
              <p className="text-body-secondary">
                No limitations on the type of URLs you can shorten.
              </p>
            </div>
            <div className="col d-flex flex-column gap-2">
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Secure and private
              </h4>
              <p className="text-body-secondary">
                We prioritize your privacy and security. We do not collect any
                personal data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
