import { useRef, useState, useEffect } from 'react'
import './Testimonials.css'

import depo1 from '../assets/testimonials/depo1.mp4'
import depo2 from '../assets/testimonials/depo2.mp4'
import depo3 from '../assets/testimonials/depo3.mp4'


const videos = [
  { src: depo1, name: 'Cliente 1' },
  { src: depo2, name: 'Cliente 2' },
  { src: depo3, name: 'Cliente 3' },
]

const reviews = [
  {
    name: 'Edinaura Millaré',
    rating: 5,
    date: '1 avaliação · 2 fotos',
    text: 'Serviço excelente. Qualidade ímpar! Super indico. Cumpriu prazo de entrega. Estou muito satisfeita. Indico sem reservas.',
  },
  {
    name: 'Fabio Bandoni',
    rating: 5,
    date: 'Local Guide · 29 avaliações',
    text: 'Fiz os bancos do meu Citroën C3, falei com Jackson que prontamente me mandou o catálogo. Recebi meus bancos e ficou lindo, perfeito, acabamentos nota 1000! Agradeço ao Jackson pela atenção e a todos os funcionários. Super indico! O leva e traz é muita comodidade para nós clientes. Amei meus bancos.',
  },
  {
    name: 'Victor Nunes',
    rating: 5,
    date: '3 avaliações · 2 fotos',
    text: 'Serviço ficou nota 10! Desde o orçamento até a finalização, excelente atendimento e produto de qualidade. Me surpreendi com o ótimo resultado e prazo na risca. Não sou de comentar empresas, mas tive que vir mostrar minha satisfação. Já estava pensando em trocar de carro, mas agora fico com ele — está zero!',
  },
  {
    name: 'Ewerron Mendes',
    rating: 5,
    date: '7 avaliações · 7 fotos',
    text: 'Profissionais excelentes, estão de parabéns do atendimento até a finalização dos trabalhos. Fiquei surpreso com os resultados 💯% recomendado. Sem contar que ainda me entregaram o carro lavado! Isso você só encontra na Papilon Couros. Obrigado!',
  },
  {
    name: 'Alessandro Tomaz',
    rating: 5,
    date: '6 avaliações',
    text: 'Atendimento 100%, serviço de qualidade. Gostaria de agradecer toda a equipe. Obrigado pelo excelente trabalho!',
  },
  {
    name: 'Washington Luiz Dos Santos',
    rating: 5,
    date: '3 avaliações',
    text: 'Melhor investimento que eu fiz! Produto de excelente qualidade, fui super bem tratado. São bem atenciosos e educados, e ainda emprestaram bancos reservas até os meus ficarem prontos — não precisei ficar com o carro parado. O produto ficou acima das minhas expectativas, show de bola! Minha esposa adorou os bancos. 🥰',
  },
  {
    name: 'Herbert Carnauba',
    rating: 5,
    date: 'Local Guide · 31 avaliações · 7 meses atrás',
    text: 'Adorei o trabalho realizado, bom acabamento e muito bem feito nos mínimos detalhes! Muito rápido a entrega, ótimo atendimento e o preço muito acessível! Meus bancos ficaram nota 10! Ótimo investimento.',
  },
  {
    name: 'Juliane Lima',
    rating: 5,
    date: '2 avaliações · 7 meses atrás',
    text: 'Troquei o revestimento dos bancos do meu Palio, ficaram lindos, mudou toda estética interna, fora o conforto com a troca de espuma. Ficou muito confortável pra dirigir e o atendimento maravilhoso. Estou muito feliz, recomendo muito! 🥰',
  },
  {
    name: 'Alef 1509',
    rating: 5,
    date: '1 avaliação · 1 foto · um ano atrás',
    text: 'Venho parabenizar esta equipe, gostei muito do serviço da Papilon Couro. Bem atencioso, entrega no prazo combinado. Recomendo, serviço de qualidade nota mil!',
  },
]

const GOOGLE_ICON = (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill={i < count ? '#D4AF37' : 'rgba(255,255,255,0.15)'} width="15" height="15">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function VideoModal({ src, name, onClose }) {
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
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal__box" onClick={e => e.stopPropagation()}>
        <button className="video-modal__close" onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <video
          ref={videoRef}
          src={src}
          className="video-modal__video"
          controls
          playsInline
          autoPlay
        />
        <div className="video-modal__info">
          <div className="video-card__avatar">{name.charAt(0)}</div>
          <div>
            <p className="video-card__name">{name}</p>
            <Stars count={5} />
          </div>
        </div>
      </div>
    </div>
  )
}

function VideoCard({ src, name }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="video-card" onClick={() => src && setModalOpen(true)}>
        {src ? (
          <video src={src} className="video-card__video" playsInline preload="metadata" />
        ) : (
          <div className="video-card__placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2"/>
            </svg>
            <span>Depoimento em vídeo</span>
          </div>
        )}
        {src && (
          <div className="video-card__play">
            <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
        <div className="video-card__info">
          <div className="video-card__avatar">{name.charAt(0)}</div>
          <div>
            <p className="video-card__name">{name}</p>
            <Stars count={5} />
          </div>
        </div>
      </div>

      {modalOpen && <VideoModal src={src} name={name} onClose={() => setModalOpen(false)} />}
    </>
  )
}

const total = reviews.length
const loopedReviews = [...reviews, ...reviews, ...reviews]

function ReviewsCarousel() {
  const [current, setCurrent] = useState(total)
  const [animated, setAnimated] = useState(true)
  const [paused, setPaused] = useState(false)


  // Reinicia silenciosamente ao sair dos limites
  useEffect(() => {
    if (current >= total * 2) {
      const t = setTimeout(() => { setAnimated(false); setCurrent(current - total) }, 500)
      return () => clearTimeout(t)
    }
    if (current < total) {
      const t = setTimeout(() => { setAnimated(false); setCurrent(current + total) }, 500)
      return () => clearTimeout(t)
    }
  }, [current])

  // Auto-play sempre para frente
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => { setAnimated(true); setCurrent(c => c + 1) }, 4000)
    return () => clearInterval(id)
  }, [paused])

  const handleNext = () => { setAnimated(true); setCurrent(c => c + 1) }
  const handlePrev = () => { setAnimated(true); setCurrent(c => c - 1) }

  const dotIndex = current % total

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel__track"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: animated ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
      >
        {loopedReviews.map((r, i) => (
          <div className="carousel__slide" key={i}>
            <div className="review-card">
              <div className="review-card__top">
                <div className="review-card__avatar">{r.name.charAt(0)}</div>
                <div>
                  <p className="review-card__name">{r.name}</p>
                  <p className="review-card__date">{r.date}</p>
                </div>
                <span className="review-card__google">{GOOGLE_ICON}</span>
              </div>
              <Stars count={r.rating} />
              <p className="review-card__text">"{r.text}"</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel__btn carousel__btn--prev" onClick={handlePrev} aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button className="carousel__btn carousel__btn--next" onClick={handleNext} aria-label="Próximo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <div className="carousel__dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === dotIndex ? 'active' : ''}`}
            onClick={() => { setAnimated(true); setCurrent(total + i) }}
            aria-label={`Avaliação ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="avaliacoes">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="section-tag">O que dizem</span>
          <h2 className="testimonials__title">
            Avaliações dos <span className="gold-text">Clientes</span>
          </h2>
          <p className="testimonials__subtitle">
            A satisfação de quem confia na Papilon é o nosso maior prêmio
          </p>
        </div>

        <div className="testimonials__videos">
          {videos.map((v, i) => <VideoCard key={i} {...v} />)}
        </div>

        <div className="testimonials__google-header">
          {GOOGLE_ICON}
          <span>Avaliações no Google</span>
          <div className="testimonials__rating">
            <Stars count={5} />
            <span>5.0</span>
          </div>
        </div>

        <ReviewsCarousel />
      </div>
    </section>
  )
}
