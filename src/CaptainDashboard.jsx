import DashboardSeafare from "./DashboardSeafare"
import DashboardCrew from "./DashboardCrew"

export default function CaptainDashboard(props) {
    return(
        <>
        <div className="dashboard_title"><h2>Welcome back,</h2>
        <h3>{props.user_name}</h3></div>
        <section className="dash">
            <section id="options">
                <button></button>
            </section>
            <section id="seafares">
                <h4>Upcoming seafares</h4>
                <DashboardSeafare seafare_name="Selgtogt. 27" start_date="03.12.2023" end_date="15.01.2024" />
                <h4 className="viewmore">View More</h4>
                </section>
            </section>
            <section id="former_crew">
                <h4>Former Crewmember</h4>
                <DashboardCrew crew_name="Hanne Nielsen"/>
                <h4 className="viewmore">View More</h4>
            </section>
        </>
    )
}