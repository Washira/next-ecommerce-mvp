import { ReactNode } from 'react'

export default function PageHeader({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <h1 className="flex items-center">{children}</h1>
}
