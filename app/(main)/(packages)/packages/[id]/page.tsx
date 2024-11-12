import { notFound } from 'next/navigation'
import PackageDetail from '@/components/packages/packageDetail'
import { getPackageById } from '@/lib/package'

export default async function PackagePage({ params }: { params: { id: string } }) {
  const pkg = await getPackageById(params.id)

  if (!pkg) {
    notFound()
  }

  return <PackageDetail package={{ 
    ...pkg, 
    imageUrl: pkg.imageData || '', 
    included: pkg.included.map((item, index) => ({ id: index.toString(), item })) 
  }} />
}