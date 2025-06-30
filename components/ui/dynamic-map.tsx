"use client"

import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./map'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-muted rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <p className="text-sm text-muted-foreground">Loading map...</p>
      </div>
    </div>
  ),
})

interface DynamicMapProps {
  className?: string
}

export default function DynamicMapWrapper({ className }: DynamicMapProps) {
  return <DynamicMap className={className} />
}
