import { NavLink } from 'react-router-dom';

export const Error = () => {

    return (
        <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page not found</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt quod magnam expedita distinctio eius at incidunt eaque. Quisquam voluptate excepturi reiciendis tempora eos animi adipisci mollitia nam possimus consectetur?</p>
                <div className="btns">
                    <NavLink to="/"> return hone</NavLink>
                    <NavLink to="/contact"> report problem</NavLink>
                </div>
            </div>
        </section>
        </>
    )
};