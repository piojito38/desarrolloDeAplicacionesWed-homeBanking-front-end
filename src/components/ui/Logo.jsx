/**
 * Logo de marca de Surgir.
 * Isotipo: tres líneas amarillas tipo destello.
 *
 * @param {Object} props
 * @param {number}  [props.size=44]          Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true]    Mostrar el texto "Surgir".
 * @param {'dark'|'light'} [props.variant='dark'] Color del texto.
 * @param {string}  [props.subtitle='BANCA POR INTERNET'] Texto secundario bajo el nombre.
 */

export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'BANCA POR INTERNET',
}) {
  const textColor = variant === 'light' ? '#ffffff' : '#e2132b'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.85)' : '#6b6b7b'
  const nameSize = Math.round(size * 0.7)
  const subSize = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 900,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
              textTransform: 'uppercase'
            }}
          >
            Surgir
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: subSize,
                fontWeight: 700,
                color: subColor,
                letterSpacing: '1.2px',
              }}
            >
              {subtitle}
            </span>
          )}
        </span>
      )}
      
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Surgir"
        role="img"
      >
        <path d="M 12 12 L 28 20 M 8 24 L 26 24 M 12 36 L 28 28" stroke="#fca311" strokeWidth="7" strokeLinecap="round" />
      </svg>
    </span>
  )
}
