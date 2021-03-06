import getTemp from "./api/getTemp";

export function showResult() {
  return {
    type: "SHOW_OPACITY",
  };
}
export function hideResult() {
  return {
    type: "HIDE_OPACITY",
  };
}

export function setApiToStore(cityName, temp, feels_like, humidity, pressure) {
  return {
    type: "GET_API_DATA",
    cityName,
    temp,
    feels_like,
    humidity,
    pressure,
    isError: false,
  };
}

export function errorGetData() {
  return {
    type: "ERROR_GET_DATA",
  };
}

export function fetchReduxThunk(cityName) {
  return (dispatch) => {
    getTemp(cityName)
      .then((res) =>
        dispatch(
          setApiToStore(
            cityName,
            res.temp,
            res.feels_like,
            res.humidity,
            res.pressure
          )
        )
      )
      .catch(() => dispatch(errorGetData()));
  };
}
