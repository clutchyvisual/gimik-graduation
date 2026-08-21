export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Banner Informasi Plan */}
      <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg flex justify-between items-center">
        <div>
           <p className="text-purple-800 font-semibold text-sm">✨ Plan Pro Aktif</p>
           <p className="text-purple-600 text-xs">Booking tidak terbatas · Aktif hingga 14 Sep 2026</p>
        </div>
      </div>

      {/* Kotak-kotak Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Booking Aug</h3>
          <p className="text-3xl font-bold mt-2">43</p>
          <p className="text-green-500 text-sm font-medium mt-2">↑ +100% vs bulan lalu</p>
        </div>
        
        <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Revenue Aug</h3>
          <p className="text-3xl font-bold mt-2">Rp 550k</p>
          <p className="text-green-500 text-sm font-medium mt-2">↑ +100% vs bulan lalu</p>
        </div>

        <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Menunggu Pembayaran</h3>
          <p className="text-3xl font-bold mt-2">0</p>
          <p className="text-orange-500 text-sm font-medium mt-2">Rp 0.0jt total tagihan</p>
        </div>

        <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Sesi Hari Ini</h3>
          <p className="text-3xl font-bold mt-2">3</p>
          <p className="text-blue-500 text-sm font-medium mt-2">3 terkonfirmasi</p>
        </div>
      </div>

    </div>
  )
}