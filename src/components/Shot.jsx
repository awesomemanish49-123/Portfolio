/**
 * Image frame for case-study screens.
 * Pass `src` once the export exists (e.g. /shots/hrms-admin-dashboard.png);
 * until then a designed placeholder keeps the layout honest.
 */
export default function Shot({ src, alt, title, caption, ratio = '16 / 10' }) {
  return (
    <figure className="shot">
      <div className="shot__frame" style={{ aspectRatio: ratio }}>
        {src ? (
          <img src={src} alt={alt || title} loading="lazy" decoding="async" />
        ) : (
          <span className="shot__empty mono">{title}</span>
        )}
      </div>
      <figcaption className="shot__cap">
        <span className="shot__title">{title}</span>
        {caption ? <span className="shot__note">{caption}</span> : null}
      </figcaption>
    </figure>
  )
}
