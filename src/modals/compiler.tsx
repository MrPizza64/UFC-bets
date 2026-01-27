import SignupModal from './signupModal';
import LoginModal from './loginModal';
import { Wallet } from './wallet';
import { BetModal } from './betModal';

export const ModalCompiler = () => {
    return (
        <>
            <BetModal/>
            <Wallet/>
            <SignupModal/>
            <LoginModal/>
        </>
    )
};