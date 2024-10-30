import Die from './Die';

export default function Dice({values}) {
    return (
        <>
            {values.map((value, idx) => {
                return <Die key={idx} face={value} />
            })}
        </>
    )
}