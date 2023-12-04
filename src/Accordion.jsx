export default function Accordion(props) {
  return (
    <>
      <button className="accordion">{props.title}</button>
      <div class="accordion_panel">
        <p>{props.description}</p>
      </div>
    </>
  )
}