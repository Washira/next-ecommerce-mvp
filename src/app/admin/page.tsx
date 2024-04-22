import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import db from '@/db/db'
import { formatCurrency, formatNumber } from '@/lib/formatters'

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

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: {
        pricePaid: true,
      },
    }),
  ])
  return {
    userCount,
    averageValuePerUser:
      userCount === 0 ? 0 : (orderData._sum?.pricePaid || 0) / userCount / 100,
  }
}

export default async function AdminDashboard() {
  const [salesData, userData] = await Promise.all([
    getSalesData(),
    getUserData(),
  ])
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <DashboardCard
        title="Total Sales"
        subtitle={formatNumber(salesData.numberOfSales)}
        body={formatCurrency(salesData.amount)}
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
