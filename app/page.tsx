import Stat from "@/components/Stat"
import StartButton from "@/components/StartButton"

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="font-carter-one uppercase text-5xl font-bold text-accent">test de pureté</h1>
      <Stat />
      <StartButton />
    </div>
  )
}