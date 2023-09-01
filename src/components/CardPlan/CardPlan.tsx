import "./CardPlan.css"

export const CardPlan = () => {
  return (
    <article className="card-plan-container">
        <figure className="icon-plan"></figure>
        <div className="plan-detail">
            <p className="plan-name">Arcade</p>
            <p className="plan-price">$<span>19</span>/mo</p>
        </div>

    </article>
  )
}
