import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      {/* <div className="w-16 h-16 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div> */}
      <Loader2 className="size-24 animate-spin" />
    </div>
  )
}
