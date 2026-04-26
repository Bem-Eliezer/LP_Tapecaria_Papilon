import { useRef, useState, useEffect } from 'react'
import './Gallery.css'

import foto1 from '../assets/gallery/maisCurtFot1.jpeg'
import foto2 from '../assets/gallery/maisCurtFot2.jpeg'
import foto3 from '../assets/gallery/maisCurtFot3.jpeg'
import foto4 from '../assets/gallery/maisCurt4.jpeg'
import foto5 from '../assets/gallery/maisCurt5.jpeg'
import foto6 from '../assets/gallery/maisCurt6.jpeg'
import video1 from '../assets/gallery/maisCurt1.mp4'
import video2 from '../assets/gallery/maisCurt2.mp4'
import video3 from '../assets/gallery/maisCurt3.mp4'

const INSTAGRAM_URL = 'https://instagram.com/tapecariapapilon'

const posts = [
  { type: 'video', src: video1, caption: 'Reforma completa de banco' },
  { type: 'image', src: foto1,  caption: 'Acabamento em couro legítimo' },
  { type: 'video', src: video2, caption: 'Teto reformado com perfeição' },
  { type: 'image', src: foto2,  caption: 'Interior renovado' },
  { type: 'video', src: video3, caption: 'Painel e portas revestidos' },
  { type: 'image', src: foto3,  caption: 'Resultado impecável' },
  { type: 'image', src: foto4,  caption: 'Detalhes em couro' },
  { type: 'image', src: foto5,  caption: 'Acabamento premium' },
  { type: 'image', src: foto6,  caption: 'Transformação completa' },
]

function VideoModal({ src, caption, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current?.play()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="img-modal" onClick={onClose}>
      <div className="img-modal__box" onClick={e => e.stopPropagation()}>
        <button className="img-modal__close" onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <video
          ref={videoRef}
          src={src}
          className="img-modal__img"
          controls
          playsInline
          autoPlay
          loop
        />

        <div className="img-modal__footer">
          <a className="img-modal__instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Ver no Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

function VideoCard({ src, caption }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleMouseEnter = () => { videoRef.current?.play(); setPlaying(true) }
  const handleMouseLeave = () => {
    videoRef.current?.pause()
    if (videoRef.current) videoRef.current.currentTime = 0
    setPlaying(false)
  }

  return (
    <>
      <div
        className="gallery__item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setModalOpen(true)}
      >
        <video ref={videoRef} src={src} className="gallery__img" loop playsInline preload="metadata" />
        <div className={`gallery__play-icon ${playing ? 'hidden' : ''}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      {modalOpen && <VideoModal src={src} caption={caption} onClose={() => setModalOpen(false)} />}
    </>
  )
}

function ImageModal({ src, caption, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="img-modal" onClick={onClose}>
      <div className="img-modal__box" onClick={e => e.stopPropagation()}>
        <button className="img-modal__close" onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <img src={src} alt={caption} className="img-modal__img" />

        <div className="img-modal__footer">
          <a
            className="img-modal__instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Ver no Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

function ImageCard({ src, caption }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="gallery__item" onClick={() => setModalOpen(true)}>
        <img src={src} alt={caption} className="gallery__img" />
        <div className="gallery__overlay">
          <div className="gallery__caption">{caption}</div>
        </div>
      </div>
      {modalOpen && <ImageModal src={src} caption={caption} onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <div className="gallery__inner">
        <div className="gallery__header">
          <span className="section-tag">Nosso trabalho</span>
          <h2 className="gallery__title">
            Mais curtidos no <span className="gold-text">Instagram</span>
          </h2>
          <p className="gallery__subtitle">
            Veja os trabalhos que nossos clientes mais amaram
          </p>
        </div>

        <div className="gallery__grid">
          {posts.map((post, i) =>
            post.type === 'video'
              ? <VideoCard key={i} src={post.src} caption={post.caption} />
              : <ImageCard key={i} src={post.src} caption={post.caption} />
          )}
        </div>

        <a className="gallery__cta" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Ver todos no Instagram
        </a>
      </div>
    </section>
  )
}
