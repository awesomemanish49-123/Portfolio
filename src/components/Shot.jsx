/**
 * Image frame for case-study screens.
 * Pass `src` once the Figma export exists (e.g. /shots/hrms-01.png);
 * until then a designed placeholder keeps the layout honest.
 */
export default function Shot({ src, alt, title, caption, tall = false }) {
  if (src) {
    return (
      <figure className="shot">
        <img src={src} alt={alt || title} loading="lazy" />
      </figure>
    )
  }

  return (
    <figure
      className="shot shot--placeholder"
      style={tall ? { minHeight: 320 } : undefined}
    >
      <figcaption>
        <span className="shot__caption">{title}</span>
        <span className="shot__note">{caption}</span>
      </figcaption>
    </figure>
  )
}
