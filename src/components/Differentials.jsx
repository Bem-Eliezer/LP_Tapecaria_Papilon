import './Differentials.css'

const items = [
  {
    number: '01',
    title: 'Materiais Premium',
    desc: 'Trabalhamos apenas com couro legítimo e sintéticos de alta qualidade, selecionados para durabilidade e beleza.',
  },
  {
    number: '02',
    title: 'Mão de Obra Especializada',
    desc: 'Nossa equipe tem mais de 15 anos de experiência em estofamento automotivo e náutico.',
  },
  {
    number: '03',
    title: 'Atendimento Personalizado',
    desc: 'Cada cliente recebe um projeto exclusivo, adaptado ao seu estilo e necessidades.',
  },
  {
    number: '04',
    title: 'Garantia nos Serviços',
    desc: 'Todos os nossos trabalhos têm garantia. Sua satisfação é nossa prioridade absoluta.',
  },
]

export default function Differentials() {
  return (
    <section className="diff" id="diferenciais">
      <div className="diff__inner">
        <div className="diff__left">
          <span className="section-tag">Por que nos escolher</span>
          <h2 className="diff__title">
            Nossos <span className="gold-text">Diferenciais</span>
          </h2>
          <p className="diff__text">
            Na Papilon Couro, cada detalhe importa. Combinamos técnica apurada, materiais de primeira linha e paixão pelo que fazemos para entregar um resultado que supera suas expectativas.
          </p>
          <a
            className="btn-primary diff__cta"
            href="https://wa.me/5511931508898?text=Olá! Gostaria de saber mais sobre os serviços da Papilon."
            target="_blank"
            rel="noreferrer"
          >
            Fale Conosco
          </a>
        </div>

        <div className="diff__right">
          {items.map((item) => (
            <div className="diff-item" key={item.number}>
              <div className="diff-item__number">{item.number}</div>
              <div className="diff-item__content">
                <h3 className="diff-item__title">{item.title}</h3>
                <p className="diff-item__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
