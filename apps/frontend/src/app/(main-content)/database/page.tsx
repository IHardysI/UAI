import DatabaseCardSet from "@/components/features/database-card-set"
import LevelProgress from "@/components/ui/LevelProgress"

export default function DatabasePage() {
  return (
    <div className="flex flex-col items-center min-h-[80vh]">
      <div className="w-full flex-1 flex justify-center items-center">
        <DatabaseCardSet />
      </div>
      <div className="flex justify-center absolute bottom-[56px]">
        <LevelProgress />
      </div>
    </div>
  )
}
