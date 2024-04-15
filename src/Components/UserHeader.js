import { Link } from 'react-router-dom'

const DashHeader = () => {

    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/">
                    <h1 className="dash-header__title">Roadster Rentals</h1>
                </Link>
                <nav className="dash-header__nav">
                    <ul className="dash-header__list">

                        <li className="dash-header__item">
                            <Link to="user_reservations">Reservations</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )

    return content
}
export default DashHeader

// maybe put a state here to determine which links to show or route to go to