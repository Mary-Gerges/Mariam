/**
 * رسالة «لم تتم الإضافة بعد» لقسم فارغ
 */
export default function EmptyNotice({ icon, title, text }) {
  return (
    <div className="section-empty">
      <div className="section-empty-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
