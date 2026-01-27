import type React from "react";
import { Text_One, Tittle } from "../components/texts";
import { Button } from "../components/button";
import { useState } from "react";
import { FightCard, FightLogic } from "../common/fightLogic";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { useObserver } from "../common/observer";

interface FigtherSelection {
    children: React.ReactNode,
    onClick: () => void,
    disabled?: boolean,
}

const FighterSelection = ({ children, onClick, disabled }: FigtherSelection) => {
    return (
        <p
            onClick={!disabled ? onClick : undefined}
            className={`
                text-center font-koho text-2xl m-2 italic w-md rounded-xl p-4 select-none
                transition-all duration-500
                ${disabled
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed opacity-60"
                    : "bg-dark-red text-white cursor-pointer hover:opacity-90"
                }
            `}
        >
            {children}
        </p>
    );
};

export const BetsPage = () => {
    const [fight, setFight] = useState(0);
    const [fighter, setFighter] = useState('')
    const [winner, setWinner] = useState('')
    const [enableResults, setEnableResults] = useState(true)
    const navigate = useNavigate();
    const {ref, visible} = useObserver();
    const handleClick = () => {
        if (fighter !== '') {
            const result = FightLogic({
                fighterOne: FightCard.fights[fight].fighter_one,
                fighterTwo: FightCard.fights[fight].fighter_two,
            });
            setWinner(result);
            setEnableResults(true)
        }
    };

    const nextFight = () => {
        if (fight + 1 >= FightCard.fights.length) {
            navigate('/')
        } else {
            setFight(prev => prev + 1);
            setWinner('');
            setFighter('');
        }
    }


    return (
        <div 
            ref={ref}
            className={`
            transition-all duration-800
            ${visible ? 'opacity-100' : 'opacity-0'}
        `}>
            <Navbar/>
            {winner == '' && (
                <div className="fixed inset-0 flex -z-10 gap-7.25 px-32 pt-14">
                    <div className="w-[50vw] flex justify-center items-end">
                        <img
                            src={FightCard.fights[fight].fighter_one.img}
                            className=" object-contain h-[50vw]"
                        />
                    </div>

                    <div className="w-[50vw] flex justify-center items-end">
                        <img
                            src={FightCard.fights[fight].fighter_two.img}
                            className="scale-x-[-1] object-contain h-[50vw]"
                        />
                    </div>
                </div>
            )
            }
            <div className="h-screen flex-col flex items-center my-14 mx-32">
                <Tittle>{fight + 1} of {FightCard.fights.length} fights</Tittle>

                <div className=" h-11/12 flex flex-col justify-center items-center">
                    {fighter !== '' && winner !== '' ? (
                        winner === fighter ? (
                            <>
                                <Text_One>
                                    Congratulations! The winner is {winner} and you won $500
                                </Text_One>
                                <Button onClick={nextFight}>
                                    Next Fight
                                </Button>
                            </>
                        ) : (
                            <>
                                <Text_One>
                                    Better luck next time! The winner is {winner}
                                </Text_One>
                                <Button onClick={nextFight}>Next Fight</Button>
                            </>
                        )
                    ) : (
                        <>
                            <Text_One>Who will win?</Text_One>
                            <FighterSelection
                                disabled={
                                    fighter !== "" &&
                                    fighter !== FightCard.fights[fight].fighter_one.name
                                }
                                onClick={() => {
                                    if (fighter == '') {
                                        setFighter(FightCard.fights[fight].fighter_one.name)
                                        setEnableResults(false)
                                    }
                                }}>{FightCard.fights[fight].fighter_one.name}</FighterSelection>

                            <FighterSelection
                                disabled={
                                    fighter !== "" &&
                                    fighter !== FightCard.fights[fight].fighter_two.name
                                }
                                onClick={() => {
                                    if (fighter == '') {
                                        setEnableResults(false)
                                        setFighter(FightCard.fights[fight].fighter_two.name)
                                    }
                                }}>{FightCard.fights[fight].fighter_two.name}</FighterSelection>
                            <Button disabled={enableResults} onClick={handleClick}>Results</Button>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
};