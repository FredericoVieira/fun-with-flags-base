import { Card, Footer, Header } from "./components";

const countries = [
  {
    id: 1,
    country: "Brazil",
    flag: "/api/placeholder/800/400",
    capital: "Brasília",
    region: "South America",
    population: 214300000,
  },
  {
    id: 2,
    country: "Japan",
    flag: "/api/placeholder/800/400",
    capital: "Tokyo",
    region: "Asia",
    population: 125700000,
  },
  {
    id: 3,
    country: "South Africa",
    flag: "/api/placeholder/800/400",
    capital: "Pretoria",
    region: "Africa",
    population: 60600000,
  },
  {
    id: 4,
    country: "Canada",
    flag: "/api/placeholder/800/400",
    capital: "Ottawa",
    region: "North America",
    population: 38250000,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map(
            ({ id, country, flag, capital, region, population }) => (
              <Card
                key={id}
                country={country}
                flag={flag}
                capital={capital}
                region={region}
                population={population}
              />
            )
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
