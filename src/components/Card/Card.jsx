import css from "./Card.module.css"
const Card = ({img , title, description}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}><img src={img} alt="image" /></div>
      <div className={css.textWrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card