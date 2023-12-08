import globe from './images/globe.png'

export default function DashboardSeafare(props) {
  return (<section className="seafare">
    <img src={globe} /><p>{props.seafare_name}</p> <p>D. {props.start_date} - {props.end_date}</p>
  </section>)
}