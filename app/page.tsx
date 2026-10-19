
"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
    {
        id: "kopi-pancong",
        name: "Kopi Pancong",
        image: "Kopi Pancong.jpg",
    },
    {
        id: "kopi-joss",
        name: "Kopi Joss",
        image: "Kopi Joss.jpg",
    },
    {
        id: "kopi-khop",
        name: "Kopi Khop",
        image: "Kopi Khop.jpg",
    },
    {
        id: "kopi-tubruk",
        name: "Kopi Tubruk",
        image: "Kopi Tubruk.jpg",
    },
    {
        id: "kopi-rarobang",
        name: "Kopi Rarobang",
        image: "Kopi Rarobang.jpg",
    },
];

const faqs = [
    {
        question: "Apa itu kopi pancong?",
        answer:
            "Kopi pancong adalah kopi yang dikenal dengan penyajian setengah gelas dan memiliki cita rasa yang pekat.",
    },
    {
        question: "Apa yang membuat kopi joss unik?",
        answer:
            "Kopi joss terkenal karena arang membara yang dicelupkan ke dalam kopi saat proses penyajiannya.",
    },
    {
        question: "Apa itu kopi khop?",
        answer:
            "Kopi khop adalah kopi khas Aceh yang disajikan dengan gelas terbalik di atas piring dan diminum melalui sedotan.",
    },
    {
        question: "Apa itu kopi tubruk?",
        answer:
            "Kopi tubruk adalah kopi yang dibuat dengan mencampurkan bubuk kopi dan air panas secara langsung.",
    },
    {
        question: "Apa yang membuat kopi rarobang unik?",
        answer:
            "Kopi rarobang merupakan kopi rempah khas Ambon yang menggunakan jahe, cengkeh, kayu manis, dan kacang kenari.",
    },
];

export default function Home() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main>
            {/* Hero Section */}
            <div id="herobanner" className="hero-section">
                <div className="hero-content">
                    <header className="hero-title">
                        <span className="text-orange">
                            NICHOLAS TANNAYDI
                        </span>

                        <br />

                        <span className="text-beige indent-text">
                            NIM: 535250043
                        </span>

                        <hr className="divider" />
                    </header>

                    <div className="hero-graphics">
                        <Image
                            src="/Photos/karung%20kopi.png"
                            alt="Karung biji kopi"
                            width={500}
                            height={500}
                            className="coffee-bag"
                        />

                        <Image
                            src="/Photos/coffee-hero.png"
                            alt="Cangkir kopi"
                            width={650}
                            height={500}
                            className="img-responsive hero-cup"
                            priority
                        />
                    </div>
                </div>

                {/* Navigation Bar */}
                <nav
                    className="navbar"
                    aria-label="Navigasi utama"
                >
                    <div className="nav-links">
                        <a href="#herobanner">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <a
                        href="#products"
                        aria-label="Lihat produk kopi"
                        className="cart-link"
                    >
                        <Image
                            src="/Photos/cart.png"
                            alt="Keranjang"
                            width={50}
                            height={50}
                            className="cart-btn"
                        />
                    </a>
                </nav>
            </div>

            {/* About Section */}
            <section
                id="about"
                className="about-section bg-dark"
            >
                <h3 className="text-beige">
                    There&apos;s a lot of coffee out there,
                </h3>

                <h1 className="text-orange">
                    but why choose us?
                </h1>

                <button
                    type="button"
                    className="btn-primary"
                >
                    Learn more
                </button>
            </section>

            {/* Products Section */}
            <section
                id="products"
                className="products-section bg-texture"
            >
                <h1 className="section-title text-orange">
                    Explore Our Products!
                </h1>

                {/* Search Bar - Tampilan saja */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Cari kopi mu..."
                        aria-label="Cari produk kopi"
                        readOnly
                    />
                </div>

                {/* Product Cards */}
                <div className="product-grid">
                    {products.map((product) => (
                        <div
                            className="product-card"
                            key={product.id}
                        >
                            <Image
                                src={`/Photos/${encodeURIComponent(
                                    product.image
                                )}`}
                                alt={product.name}
                                width={400}
                                height={250}
                                sizes="(max-width: 575px) 100vw, (max-width: 991px) 48vw, 31vw"
                                className="img-responsive"
                            />

                            <p>{product.name}</p>

                            <button
                                type="button"
                                className="btn-secondary btn-detail"
                            >
                                Learn more
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <h1>FAQ</h1>

                {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;

                    return (
                        <div
                            className="faq-item"
                            key={faq.question}
                        >
                            <button
                                type="button"
                                className={`accordion ${
                                    isOpen ? "active" : ""
                                }`}
                                onClick={() =>
                                    setOpenFaq(
                                        isOpen ? null : index
                                    )
                                }
                                aria-expanded={isOpen}
                                aria-controls={`faq-panel-${index}`}
                            >
                                {faq.question}

                                <span className="faq-icon">
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                id={`faq-panel-${index}`}
                                className={`panel ${
                                    isOpen ? "panel-open" : ""
                                }`}
                            >
                                <div className="panel-inner">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Footer */}
            <footer
                id="contact"
                className="footer-section"
            >
                <div className="footer-grid">
                    <div className="footer-box">
                        <p className="text-orange">
                            Our social media
                        </p>

                        <div className="social-links">
                            <span>Instagram</span>
                            <span>TikTok</span>
                        </div>
                    </div>

                    <div className="footer-box">
                        <p className="text-beige">
                            Any question? Don&apos;t hesitate to ask us!
                        </p>

                        <button
                            type="button"
                            className="btn-primary"
                        >
                            Send us email!
                        </button>
                    </div>
                </div>

                <p className="copyright">
                    &copy; 2026 Kopi Nusantara. All rights reserved
                </p>
            </footer>
        </main>
    );
}
