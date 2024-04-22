import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import db from '@/db/db'
import { formatNumber } from '@/lib/formatters'

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: {
      pricePaid: true,
    },
    _count: true,
  })
  return {
    amount: (data._sum?.pricePaid || 0) / 100,
    numberOfSales: data._count,
  }
}
export default async function AdminDashboard() {
  const salesData = await getSalesData()
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <DashboardCard
        title="Total Sales"
        subtitle={formatNumber(salesData.numberOfSales)}
        body={formatNumber(salesData.amount)}
      />
    </div>
  )
}

type dashboardCardProps = {
  title: string
  subtitle: string
  body: string
}

export function DashboardCard({ title, subtitle, body }: dashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  )
}
