export default function SeafareItem(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <p>{props.start_date} - {props.end_date} | {props.destination} ({props.seafare_area}) | {props.price}</p>
    <h3>Captain: {props.captain}</h3>
    </>
  )
}