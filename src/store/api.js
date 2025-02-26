import axios from "axios";

export default {
    // namespaced: 하나의 store에서 모듈화하여 사용될 수 있음을 명시적으로 나타내는 개념
    namespaced: true,
    state:{
        cityName: "",
        current:{
            temp:"", // 현재 온도
            desc:"", // 현재 날씨 묘사
            icon:"", // 현재 날씨 아이콘
            barometer:"", // 기압
            feelsLike:"", // 체감온도
            humidity:"", // 습도
            uvi: "", // 자외선 수치
        },
        hourly: [],
    },
    getter:{},
    mutations:{},
    actions:{
        async fetchApi({state}, payload){
            try{
                const API_KEY = "d90e7385e1e42abff27b929ccddf2ac5";
                // 위도 경도 좌표 변수
                let axisLat = payload.lat;
                let axisLon = payload.lon; 

                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.8/onecall?lat=${axisLat}&lon=${axisLon}&appid=${API_KEY}&units=metric`
                );
                console.log(res);
                const data = res.data;
                const current = res.data.current;
                const hourly = res.data.hourly;

                // 데이터 설정
                // context.state;
                state.cityName = payload.cityName;
                state.current.temp = Math.floor(current.temp);
                state.current.desc = current.weather[0].description;
                state.current.barometer = current.pressure;
                state.current.feelsLike = current.feels_like;
                state.current.humidity = current.humidity;
                state.current.uvi = current.uvi;
                state.current.icon = current.weather[0].icon;
                state.hourly = hourly.splice(23, hourly.length - 1);
            
                
                }catch(error){
                    console.log(error);
                }
            
        },
    },
};