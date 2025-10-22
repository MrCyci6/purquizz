import { QuestionProps } from "@/types/Question"

export default function Question({ data, handleScore } : QuestionProps) {
    const isClassic = data.method == "classic";

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-carter-one text-2xl">{data.question}</h1>
            <div className="flex flex-col justify-center items-center gap-2 text-xl font-bold">
            {
                isClassic ? 
                    <>
                        <button key="yes" onClick={() => handleScore(data.score["yes"], data.type)} className="bg-[#5cb85c] hover:bg-[#449d44] p-3 rounded-xl">Oui</button>
                        <button key="no" onClick={() => handleScore(data.score["no"], data.type)} className="bg-[#d9534f] hover:bg-[#c9302c] p-3 rounded-xl">Non</button>
                    </>
                : 
                    Object.entries(data.score).map(([key, value], i) => { 
                        const isFirst = i == 0;
                        const color = isFirst ? "bg-[#428bca] hover:bg-[#3071a9]" : "bg-[#d9534f] hover:bg-[#c9302c]"
                        
                        const isNumber = !isNaN(parseInt(key));
                        const size = isNumber ? "w-12 h-12" : "p-3"
                        
                        return (      
                            <button key={key} onClick={() => handleScore(value, data.type)} className={`${color} ${size} rounded-xl`}>{key}</button>            
                        )
                    })
            }
            </div>
        </div>
    )
}