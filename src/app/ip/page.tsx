const Home = async () => {

  type LocationData = {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
  };

  const ip = '81.91.145.234';
  const data: LocationData = await callApi(ip);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-16 p-8">
      <h1 className="text-5xl">Country Detection</h1>

      <p className="text-lg">ip: {ip}</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

const callApi = async (ip: string) => {
  const response = await fetch('http://ip-api.com/json/' + ip);
  const data = await response.json();
  return data;
};

export default Home;
