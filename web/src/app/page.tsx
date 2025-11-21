import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Hurghada 5? pick for beach + live reef</h1>
          <p>
            Based on house-reef quality, swimmable coral, and overall beach
            experience, here is the clear recommendation plus the newest viable
            alternative.
          </p>
        </div>

        <section style={{ width: "100%", maxWidth: 640, marginTop: 24 }}>
          <article
            style={{
              border: "1px solid var(--button-secondary-border)",
              borderRadius: 16,
              padding: 20,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ fontSize: 22, margin: 0 }}>
                Top pick: The Oberoi Beach Resort, Sahl Hasheesh ? 5?
              </h2>
              <span
                style={{
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: "1px solid var(--button-secondary-border)",
                }}
              >
                Best live house reef + tranquil sandy beach
              </span>
            </div>
            <ul style={{ marginTop: 12, color: "var(--text-secondary)" }}>
              <li>Exceptional house reef directly offshore; easy snorkel access</li>
              <li>Calm, uncrowded beachfront with premium service</li>
              <li>Consistent 5? standards; ideal for reef-first travelers</li>
            </ul>
          </article>

          <article
            style={{
              border: "1px solid var(--button-secondary-border)",
              borderRadius: 16,
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ fontSize: 22, margin: 0 }}>
                Newest viable with reef access: Baron Palace Sahl Hasheesh ? 5?
              </h2>
              <span
                style={{
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: "1px solid var(--button-secondary-border)",
                }}
              >
                Opened mid-2010s; broad sandy bay + nearby reef
              </span>
            </div>
            <ul style={{ marginTop: 12, color: "var(--text-secondary)" }}>
              <li>Wide, swimmable sandy beach in Sahl Hasheesh bay</li>
              <li>
                Pier-accessible coral areas close by; good snorkeling when the
                sea is calm
              </li>
              <li>Modern 5? resort feel; suitable when you want ?newer? + reef</li>
            </ul>
          </article>
        </section>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://maps.app.goo.gl/6QfJr6y6Yt6nXk2E7"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Oberoi on Maps
          </a>
          <a
            className={styles.secondary}
            href="https://maps.app.goo.gl/8jQ5Zp8iFq7ZsJAm7"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Baron Palace
          </a>
        </div>
      </main>
    </div>
  );
}
