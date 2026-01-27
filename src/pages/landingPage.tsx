import { useDispatch } from "react-redux";
import { Button } from "../components/button";
import { openModal } from "../redux/modalsSlice";
import { useObserver } from "../common/observer";

export const LandingPage = () => {
    
    const dispatch = useDispatch();
    const {ref, visible} = useObserver()

    return (
        <>
            <img src="./octagon.png" className="fixed -z-10 h-screen w-[70%]     
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div 
                ref={ref}
                className={`
                    h-screen w-scren flex justify-center flex-col items-center
                    transition-all duration-[1.5s]
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                `}
            >
                <p className="text-strong-red text-3xl font-koho font-bold italic">- Bets -</p>
                <img className="w-100 h-60" src="./UFC.png" />
                <div>
                    <Button onClick={() => dispatch(openModal('signUpModal'))}>Sign up</Button>
                    
                    <Button variant="secondary" onClick={() => dispatch(openModal('loginModal'))}>Login</Button>
                </div>
            </div>
        </>
    )
};