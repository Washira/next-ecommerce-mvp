import PageHeader from '@/app/admin/_components/PageHeader'
import { Button } from '@/components/ui/button'
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'

export default function AdminProductPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href={'/admin/products/new'}>Add Product</Link>
        </Button>
      </div>
    </>
  )
}

function ProductTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  )
}
