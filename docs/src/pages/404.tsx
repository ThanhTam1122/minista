import type { Metadata } from "minista"

export const metadata: Metadata & { noindex?: boolean } = {
  title: "404",
  noindex: true,
}

export default function () {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageNotfoundStyle }} />
      <div className="section-notfound">
        <div className="section-notfound-box">
          <div className="section-notfound-message">
            <h1 className="section-notfound-title">404</h1>
            <p className="section-notfound-description">
              This page could not be found.
            </p>
          </div>
          <a href="/" className="section-notfound-link-button">
            Back to Home
          </a>
        </div>
      </div>
    </>
  )
}

const pageNotfoundStyle = /* css */ `
  .section-notfound {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
  }

  .section-notfound-box {
    display: grid;
    gap: 24px;
  }

  .section-notfound-message {
    display: flex;
    align-items: center;
  }

  .section-notfound-title {
    flex: none;
    margin: 0 20px 0 0;
    border-right: 1px solid var(--theme-tx-4);
    padding: 10px 23px 10px 0;
    font-size: 24px;
    font-weight: 500;
  }

  .section-notfound-description {
    font-size: 14px;
  }

  .section-notfound-link-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    padding: 8px 16px;
    background-color: transparent;
    border: 1px solid var(--theme-tx-4);
    border-radius: 4px;
    font-size: 14px;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    .section-notfound-link-button:hover {
      background-color: var(--theme-ac-2-alpha);
    }
  }
`.toString()
