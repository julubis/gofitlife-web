import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="sm:ml-64 px-4">
        <h1>Hello world f</h1>
        <div className="bg-emerald-100 rounded-lg px-8 py-6">
          <div className="grid grid-cols-3 gap-8 mb-4">
            <section className="bg-white rounded-xl p-4 font-medium text-lg">
              <h3>Pengguna</h3>
            </section>
            <section className="bg-white rounded-xl p-4 font-medium text-lg">
              <h3>Resep</h3>
            </section>
            <section className="bg-white rounded-xl p-4 font-medium text-lg">
              <h3>Data </h3>
            </section>
          </div>
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between">
              <p className="font-medium mb-4 text-lg">Data Pengguna</p>
              <Link className="text-sm font-medium text-emerald-500" to="/user">Selengkapnya</Link>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-sm text-gray-700 ">
                        <tr className="bg-emerald-100 rounded-xl">
                            <th scope="col" className="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Umur
                            </th>
                            <th scope="col" className="px-6 py-3-4">
                                Jenis Kelamin
                            </th>
                            <th scope="col" className="px-6 py-3p-4">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3p-4">
                                BMI
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-emerald-50 odd:bg-gray-50 rounded-xl">
                            <th className="px-6 py-4 font-medium flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                                <p>Gading</p>
                            </th>
                            <td className="px-6 py-4">
                                25
                            </td>
                            <td className="px-6 py-4">
                                Laki-Laki
                            </td>
                            <td className="px-6 py-4">
                                10/11/2023
                            </td>
                            <td className="px-6 py-4">
                                25
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="even:bg-emerald-50 odd:bg-gray-50 rounded-xl">
                            <th className="px-6 py-4 font-medium flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                                <p>Citra</p>
                            </th>
                            <td className="px-6 py-4">
                                22
                            </td>
                            <td className="px-6 py-4">
                                Perempuan
                            </td>
                            <td className="px-6 py-4">
                                06/11/2023
                            </td>
                            <td className="px-6 py-4">
                                31
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="even:bg-emerald-50 odd:bg-gray-50 rounded-xl">
                        <th className="px-6 py-4 font-medium flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                                <p>Firman</p>
                            </th>
                            <td className="px-6 py-4">
                              30
                            </td>
                            <td className="px-6 py-4">
                                Laki-Laki
                            </td>
                            <td className="px-6 py-4">
                                01/11/2023
                            </td>
                            <td className="px-6 py-4">
                                25
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="even:bg-emerald-50 odd:bg-gray-50 rounded-xl">
                        <th className="px-6 py-4 font-medium flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                                <p>Tiara</p>
                            </th>
                            <td className="px-6 py-4">
                                25
                            </td>
                            <td className="px-6 py-4">
                                Perempuan
                            </td>
                            <td className="px-6 py-4">
                                23/10/2023
                            </td>
                            <td className="px-6 py-4">
                                18.8
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="even:bg-emerald-50 odd:bg-gray-50 rounded-xl">
                        <th className="px-6 py-4 font-medium flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                                <p>Laras</p>
                            </th>
                            <td className="px-6 py-4">
                                20
                            </td>
                            <td className="px-6 py-4">
                                Perempuan
                            </td>
                            <td className="px-6 py-4">
                                19/10/2023
                            </td>
                            <td className="px-6 py-4">
                                25
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

          </div>
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;