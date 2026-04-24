import './Location.css'

const MAPS_URL = 'https://www.google.com/maps/dir//Papilon+Couro+-+Tape%C3%A7aria+-+Av.+Miguel+Badra,+2421+-+Cidade+Miguel+Badra,+Suzano+-+SP,+08690-010/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce7b9f07843fe3:0xc4c1c2c9e80e30b2?sa=X&ved=1t:57443&ictx=111'
const WHATSAPP_URL = 'https://wa.me/5511931508898?text=Olá! Gostaria de um orçamento.'

export default function Location() {
  return (
    <section className="location" id="localizacao">
      <div className="location__inner">
        <div className="location__info">
          <span className="section-tag">Onde estamos</span>
          <h2 className="location__title">
            Venha nos <span className="gold-text">Visitar</span>
          </h2>

          <div className="location__details">
            <div className="location__detail">
              <div className="location__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <strong>Endereço</strong>
                <p>Av. Miguel Badra, 2421<br />Cidade Miguel Badra – Suzano, SP<br />CEP: 08690-010</p>
              </div>
            </div>

            <div className="location__detail">
              <div className="location__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.25 9.11 19.79 19.79 0 01.22 2.36 2 2 0 012.2.17h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.34a16 16 0 006.56 6.56l.55-.55a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <p>(11) 93150-8898</p>
              </div>
            </div>

            <div className="location__detail">
              <div className="location__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <strong>Horário de Atendimento</strong>
                <p>Seg – Sex: 8h às 18h<br />Sábado: 8h às 13h</p>
              </div>
            </div>
          </div>

          <div className="location__actions">
            <a className="btn-primary" href={MAPS_URL} target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Como Chegar
            </a>
            <a className="btn-outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Enviar Mensagem
            </a>
          </div>
        </div>

        <div className="location__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.2!2d-46.5!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7b9f07843fe3%3A0xc4c1c2c9e80e30b2!2sPapilon+Couro+-+Tapecaria!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Papilon Couro"
          />
          <a className="location__map-overlay" href={MAPS_URL} target="_blank" rel="noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
