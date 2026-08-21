export default function BookingPage() {
  const dataBooking = [
    { kode: "GMK-260815-043", nama: "Dien Fitriani Azzahra", tanggal: "16 Aug 2026", paket: "Group Package", status: "Scheduled", bayar: "Belum Bayar" },
    { kode: "GMK-260815-044", nama: "Ni Made Indira Destania", tanggal: "29 Aug 2026", paket: "Group Package", status: "Scheduled", bayar: "Lunas" },
    { kode: "GMK-260815-040", nama: "Muhammad Razzan", tanggal: "22 Aug 2026", paket: "Personal Package 2", status: "Scheduled", bayar: "Belum Bayar" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Daftar Booking</h1>
        <button className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-md font-semibold text-sm shadow-sm hover:bg-yellow-500">
          + Buat Booking Baru
        </button>
      </div>

      {/* Tabel Data */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase">
              <th className="p-4">Kode</th>
              <th className="p-4">Nama Klien</th>
              <th className="p-4">Tanggal Sesi</th>
              <th className="p-4">Paket</th>
              <th className="p-4">Status</th>
              <th className="p-4">Pembayaran</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {dataBooking.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 font-medium text-orange-600">{item.kode}</td>
                <td className="p-4 font-semibold">{item.nama}</td>
                <td className="p-4 text-gray-600">{item.tanggal}</td>
                <td className="p-4">
                  <span className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md text-xs font-medium">
                    {item.paket}
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                    {item.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    item.bayar === 'Lunas' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {item.bayar}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}