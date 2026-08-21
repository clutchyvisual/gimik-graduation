'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BookingCepatPage() {
  const router = useRouter()
  const [rawText, setRawText] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleImportData = () => {
    if (!rawText.trim()) return

    // Memecah teks dari spreadsheet berdasarkan baris baru
    const lines = rawText.split('\n').filter(line => line.trim() !== '')
    
    // Mengambil data lama dari localStorage (jika ada) atau membuat array baru
    const existingBookings = JSON.parse(localStorage.getItem('gimik_bookings') || '[]')

    // Mengubah baris teks mentah menjadi objek data booking baru
    const newBookings = lines.map((line, index) => {
      // Asumsi format kolom spreadsheet dipisahkan dengan Tab atau Titik Koma (;)
      // Contoh: Nama Klien | Paket | Tanggal
      const parts = line.split(/[\t;]/).map(p => p.trim())
      return {
        kode: `GMK-260815-${Math.floor(100 + Math.random() * 900)}`,
        nama: parts[0] || `Klien Import ${index + 1}`,
        tanggal: parts[2] || '25 Aug 2026',
        paket: parts[1] || 'Personal Package',
        status: 'Scheduled',
        bayar: 'Belum Bayar'
      }
    })

    // Gabungkan data lama dan data import baru, lalu simpan kembali
    const updatedBookings = [...newBookings, ...existingBookings]
    localStorage.setItem('gimik_bookings', JSON.stringify(updatedBookings))

    setSuccessMessage(`Berhasil mengimpor ${newBookings.length} data booking!`)
    setRawText('')

    // Arahkan kembali ke halaman tabel booking setelah 1.5 detik
    setTimeout(() => {
      router.push('/booking')
    }, 1500)
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">Booking Cepat & Import Spreadsheet</h1>
        <p className="text-sm text-gray-500">Salin baris data dari Excel atau Google Sheets Anda lalu tempel di bawah.</p>
      </div>

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-sm font-medium">
          {successMessage} Mengarahkan ke halaman daftar booking...
        </div>
      )}

      <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Data Spreadsheet (Format: Nama [Tab] Paket [Tab] Tanggal)
          </label>
          <textarea
            rows={8}
            className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
            placeholder={`Contoh:\nAndi Pratama \t Group Package \t 26 Aug 2026\nSiti Rahma \t Personal Package \t 27 Aug 2026`}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
          />
        </div>

        <button 
          onClick={handleImportData}
          className="bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition shadow-sm"
        >
          Proses & Masukkan ke Booking Utama
        </button>
      </div>
    </div>
  )
}