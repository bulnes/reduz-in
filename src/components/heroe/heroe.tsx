export function Heroe() {
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
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="url"
                className="form-control"
                id="floatingInput"
                placeholder="https://example.com/link-to-your-website"
                required
              />
              <label htmlFor="floatingInput">Website URL</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Shorten URL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
