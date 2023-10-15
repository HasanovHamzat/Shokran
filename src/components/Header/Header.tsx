
import logo from "../../shared/assets/icons/logo.svg"

import "./header.scss"
export const Header = ( ) => {
    return (
        <header>
                <img src={logo} alt="Icon: logo" className="hero-icon" />
                <div className="wrapper">
                {
                    [1, 2, 3, 4].map((el: number) => (
                        
                        <div key={el} className="progress active"/>
                        
                        ))
                        
                    }
                    </div>

                
    </header>
    )
}