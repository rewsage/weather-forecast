import { Overview } from "../Overview";
import { WeeklyNavigationBar } from "../WeekNavigation";
import { fetchForecastData, fetchLocation } from "Features/";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.scss";

function App() {
	const dispatch = useDispatch();
	const forecastData = useSelector((state) => state.forecastData);
	const location = useSelector((state) => state.location);
	const unitGroup = useSelector((state) => state.unitGroup.value);

	useEffect(() => {
		dispatch(fetchLocation());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (location.status !== "idle" && location.status !== "loading") {
			dispatch(fetchForecastData({ location: location.value, unitGroup }));
		}
	}, [location, unitGroup, dispatch]);

	return (
		<div styleName="app">
			{forecastData.data !== null ? (
				<div styleName="container">
					<Overview />
					<WeeklyNavigationBar />
				</div>
			) : forecastData.status === "failed" ? (
				<div styleName="wrapper">
					<p styleName="error">{forecastData.error.message}</p>
					<p styleName="error">Try reloading the page</p>
				</div>
			) : (
				<div styleName="wrapper">
					<div styleName="spinner" />
				</div>
			)}
		</div>
	);
}

export { App };
