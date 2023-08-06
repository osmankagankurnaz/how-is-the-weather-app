import Container from "@/components/container";
import { getDailyWeather, getForecastWeather } from "@/services/weather";

async function Home() {

  const dailyData = await getDailyWeather();
  const forecastData = await getForecastWeather();
  console.log(dailyData);

  return (
    <main className='justify-center items-center flex w-full h-full'>
      <Container daily={dailyData} forecast={forecastData} />
    </main>
  )
}

export default Home;