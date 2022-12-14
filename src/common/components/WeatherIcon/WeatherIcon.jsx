import * as icons from "Assets/icons/weatherIcons";

function WeatherIcon({ iconName }) {
	const toCamelCase = (str) => {
		return str.replace(/([-][a-z])/gi, (match) => {
			return match.toUpperCase().replace("-", "");
		});
	};

	const camelIconName = toCamelCase(iconName);

	return <img src={icons[camelIconName]} />;
}

export { WeatherIcon };
