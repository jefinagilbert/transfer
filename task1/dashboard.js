import { useSelector } from "react-redux"

function Dashboard(){
    const currentUser = useSelector(state=> state.currentUser)
    return(
        <div>
            <h1>Dashboard {currentUser.email}</h1>
            <button className="btn btn-primary">Log out</button>
        </div>
    )
}

export default Dashboard