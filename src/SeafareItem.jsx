export default function SeafareItem(props) {
  return (
    <article className="seafareItem">
      <h2 className="seafareItem_title">{props.title}</h2>
      <p className="seafareItem_details">{props.start_date} - {props.end_date} | {props.destination} ({props.seafare_area})</p>
      <h3 className="seafareItem_captain">Captain: {props.captain}</h3>
    </article>
  )
}