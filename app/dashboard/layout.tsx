export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="dashboard-layout">
        {/* Add any dashboard-specific layout elements here */}
        {children}
      </div>
    )
  }