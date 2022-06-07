import DailyForecast from "../DailyForecast/DailyForecast.jsx";
import styles from "./WeeklySummaryBar.scss";

function WeeklySummaryBar({ forecastData }) {
	const weekDays = [0, 1, 2, 3, 4];

	const dailyForecastList = weekDays.map((dayNum) => {
		const dailyForecastData = forecastData.days[dayNum];
		const dayId = dailyForecastData.datetime;
		return <DailyForecast dailyForecastData={dailyForecastData} key={dayId} />;
	});

	return <div className={styles.wrapper}>{dailyForecastList}</div>;
}

export default WeeklySummaryBar;