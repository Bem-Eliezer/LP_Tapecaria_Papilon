import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="18" width="40" height="22" rx="4" />
        <path d="M12 18V14a4 4 0 014-4h16a4 4 0 014 4v4" />
        <circle cx="24" cy="29" r="5" />
        <path d="M4 26h4M40 26h4" />
      </svg>
    ),
    title: 'Bancos Automotivos',
    desc: 'Reforma, revestimento e personalização de bancos em couro legítimo ou couro Ultra com garantia de 5 anos.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20 Q24 8 42 20" />
        <path d="M8 22 Q24 12 40 22V38H8V22Z" />
        <path d="M14 30h20M14 34h12" />
      </svg>
    ),
    title: 'Teto Interno',
    desc: 'Restauração e revestimento do teto do seu veículo, eliminando dobras e manchas com acabamento perfeito.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="10" width="14" height="28" rx="2" />
        <rect x="26" y="10" width="14" height="28" rx="2" />
        <path d="M22 16h4M22 24h4M22 32h4" />
      </svg>
    ),
    title: 'Painéis e Portas',
    desc: 'Revestimento completo de painéis e portas laterais com materiais premium e costura artesanal.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="5" />
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
        <path d="M24 19v-6M29 24h6" />
      </svg>
    ),
    title: 'Volantes',
    desc: 'Revestimento de volante em couro com diversas opções de cores e costuras decorativas.',
  },
]

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services__inner">
        <div className="services__header">
          <span className="section-tag">O que fazemos</span>
          <h2 className="services__title">
            Nossos <span className="gold-text">Serviços</span>
          </h2>
          <p className="services__subtitle">
            Soluções completas em tapeçaria e couro para transformar o interior do seu veículo
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
