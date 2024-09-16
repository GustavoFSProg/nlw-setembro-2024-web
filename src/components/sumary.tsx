import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogClose, DialogTrigger } from './ui/dialog'

function Sumary() {
  return (
    <div
      className=" bg-zinc-900 
      flex 
        justify-center 
        items-center     
    h-screen 
    w-full"
    >
      <div
        className=" bg-zinc-800 
        gap-6 text-white py-10
       
    h-[800px] 
    w-[480px]
    -mt-10
    px-5"
      >
        <span className="text-lg font-semibold ">5 a 10 de agosto</span>
        <div className="flex items-center justify-between">
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="size-4 mr-1.5" />
              Cadastrar Meta
            </Button>
          </DialogTrigger>
        </div>
      </div>
    </div>
  )
}

export default Sumary
