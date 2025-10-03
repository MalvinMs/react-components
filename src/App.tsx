import { Statbox } from "./components/Statbox/Statbox";
import { Cash, Users, ChartPie } from "flowbite-react-icons/solid";
import type { StatboxData } from "./components/Statbox/types";

const dataPenjualan = {
  title: "Total Penjualan",
  value: "Rp 275.450.000",
};

const dataPengguna = {
  title: "Pengguna Aktif Harian",
  value: 12.87,
};

const dataPertumbuhan = {
  title: "Pertumbuhan Bulanan",
  value: "+5.8%",
};

const dataError = {
  title: "Tingkat Error",
  value: "1.2%",
};

const dataPeringatan = {
  title: "Stok Rendah",
  value: "15 item",
};

const valueChange: StatboxData = {
  title: "Completion",
  value: "20.5k",
  change: {
    value: 1,
    trend: "down",
    label: "vs last month",
    percentage: true,
  },
};

const dataLengkap: StatboxData = {
  title: "Total Revenue",
  value: "Rp 275.450.000",
  subtitle: "Monthly performance",
  change: {
    value: 12,
    trend: "up",
    label: "vs last month",
    percentage: true,
  },
};
const dataMinimal: StatboxData = {
  value: "20.5k",
};

const dataValueSubtitle: StatboxData = {
  value: "98.5%",
  subtitle: "System uptime",
};

function App() {
  return (
    <div className="mx-auto max-w-5xl bg-gray-50 p-8 font-sans">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Dashboard Statistik
        </h1>
        <p className="mb-8 text-gray-600">
          Contoh penggunaan komponen Statbox: basic, with box, dan with icon.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">Basic</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Statbox data={dataPenjualan} />
              <Statbox data={dataPengguna} color="primary" />
              <Statbox data={dataPertumbuhan} color="success" />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              With Box
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Statbox
                data={dataError}
                boxed
                color="danger"
                onClick={() => alert("Error clicked")}
              />
              <Statbox
                data={dataPeringatan}
                boxed
                color="warning"
                onClick={() => alert("Warning clicked")}
              />
              <Statbox
                data={{ title: "Sesi Aktif", value: 345 }}
                boxed
                color="info"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              With Icon
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Statbox data={dataPenjualan} icon={Cash} boxed />
              <Statbox data={dataPengguna} icon={Users} boxed color="primary" />
              <Statbox
                data={dataPertumbuhan}
                icon={ChartPie}
                boxed
                color="success"
                className={"border shadow-lg"}
              />
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              With indicator change
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Statbox data={valueChange} color="success" boxed />
              <Statbox data={dataLengkap} color="info" boxed />
              <Statbox data={dataMinimal} color="danger" boxed />
              <Statbox data={dataValueSubtitle} color="primary" boxed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
