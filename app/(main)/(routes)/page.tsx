import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div className="flex flex-col">
  <div className="flex items-center justify-between text-3xl font-bold leading-10 text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-md">
    Collaborator
    <div className="flex space-x-4">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  </div>
</div>
  

  )
}
