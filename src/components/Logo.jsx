import logoImg from '../assets/logo.png'

export default function Logo({ size = 60 }) {
  return (
    <img
      src={logoImg}
      alt="Papilon Couro"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  )
}
