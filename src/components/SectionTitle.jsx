function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <div>
        <h2>{title}</h2>

        {subtitle && <p>{subtitle}</p>}
      </div>

      <button className="section-link" type="button">
        مشاهده همه
      </button>
    </div>
  );
}

export default SectionTitle;