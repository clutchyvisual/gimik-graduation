import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Gimik Graduation Admin',
  description: 'Sistem Manajemen Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
        
        {/* SIDEBAR KIRI */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
          <div className="p-4 border-b border-gray-100 flex items-center space-x-2">
            <div className="w-8 h-8 bg-black text-white font-bold flex items-center justify-center rounded">GG</div>
            <h1 className="text-lg font-bold">Gimik Graduation</h1>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-1 text-sm font-medium text-gray-600">
            <Link href="/" className="block p-2 rounded-lg bg-orange-50 text-orange-600">Dashboard</Link>
            
            <div className="pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Operasional</div>
            <Link href="/booking-cepat" className="block p-2 rounded-lg hover:bg-gray-100">Booking Cepat (Import)</Link>
            <Link href="/booking" className="flex justify-between p-2 rounded-lg hover:bg-gray-100 font-medium text-gray-900">
              Booking <span className="bg-orange-100 text-orange-600 py-0.5 px-2 rounded-full text-xs">33</span>
            </Link>
            
            <div className="pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Produk & Harga</div>
            <Link href="#" className="block p-2 rounded-lg hover:bg-gray-100">Paket Foto</Link>
            <Link href="#" className="block p-2 rounded-lg hover:bg-gray-100">Add-ons</Link>
          </nav>
        </aside>

        {/* KONTEN UTAMA KANAN */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Header Atas */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
             <h2 className="text-xl font-bold">Dashboard</h2>
             <div className="flex items-center space-x-4">
                <button className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-md font-semibold text-sm shadow-sm hover:bg-yellow-500">
                  + Buat Booking
                </button>
             </div>
          </header>
          
          {/* Area Halaman */}
          <div className="flex-1 overflow-auto p-6">
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}