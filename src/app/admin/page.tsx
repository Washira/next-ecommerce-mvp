export default function AdminDashboard({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </>
  )
}
