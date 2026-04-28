'use client'

import { useState, useEffect } from 'react'
import { shortenUrl } from '@/app/actions'

export default function ShortenerForm() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrigin(window.location.origin)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setShortenedUrl('')

    const formData = new FormData()
    formData.append('url', url)

    const result = await shortenUrl(formData)

    if (result.error) {
      setError(result.error)
    } else if (result.data) {
      setShortenedUrl(`${origin}/${result.data.short_code}`)
    }
    setLoading(false)
  }

  const copyToClipboard = () => {
    if (!shortenedUrl) return

    navigator.clipboard.writeText(shortenedUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4">
      <form onSubmit={handleSubmit} id="shortenForm">
        <div className="input-group input-group-lg">
          <input
            type="url"
            id="urlInput"
            className="form-control border-2"
            placeholder="Cole sua URL longa aqui..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button
            className="btn btn-primary fw-bold px-4"
            type="submit"
            id="btnShorten"
            disabled={loading}
          >
            {loading ? '...' : 'Reduzir'}
          </button>
        </div>
      </form>

      {error && (
        <div className="alert alert-danger mt-3 mb-0 py-2 small" role="alert">
          {error}
        </div>
      )}

      {shortenedUrl && (
        <div id="resultArea" className="mt-4">
          <div className="alert alert-secondary border-0 bg-light p-4 rounded-3 text-center">
            <p className="mb-2 text-muted small fw-bold text-uppercase">Seu link encurtado:</p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
              <span id="shortened-url" className="fs-4 fw-bold text-primary text-break">
                {shortenedUrl}
              </span>
              <button
                className={`btn ${copied ? 'btn-success' : 'btn-dark'} btn-sm px-4 rounded-pill`}
                onClick={copyToClipboard}
                id="copyBtn"
              >
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
