import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to NextApp</h1>
          <p className={styles.subtitle}>
            Build modern web applications with speed, style, and simplicity.
          </p>
          <a href="#features" className={styles.ctaButton}>
            Get Started
          </a>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={220}
            height={60}
            className={styles.heroImage}
            priority
          />
        </div>
      </main>
      <section id="features" className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Why NextApp?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.card}>
            <Image src="/globe.svg" alt="Fast" width={40} height={40} />
            <h3>Blazing Fast</h3>
            <p>Experience instant page loads and seamless navigation.</p>
          </div>
          <div className={styles.card}>
            <Image src="/window.svg" alt="Modern UI" width={40} height={40} />
            <h3>Modern UI</h3>
            <p>Enjoy a beautiful, responsive, and accessible design out of the box.</p>
          </div>
          <div className={styles.card}>
            <Image src="/file.svg" alt="Easy to Use" width={40} height={40} />
            <h3>Easy to Use</h3>
            <p>Developer-friendly tools and documentation to get you started quickly.</p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} NextApp. All rights reserved.</span>
      </footer>
    </div>
  );
}
