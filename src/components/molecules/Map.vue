<template>
    <div id="map"></div>
</template>

<script setup>

import mapAxis from "@assets/mapAxis.json";
import {onMounted} from "vue";
import {useStore} from "@store/pinia";

const store = useStore();

onMounted(() => {
    // 카카오 디벨로퍼에서 발급받은 API_KEY
    const API_KEY = "d79c7ec5a798b761a162976810653d0a";

    if(window.kakao && window.kakao.map){
        this.initMap();
    } else{
        const script = document.createElement("script");
        // Global Kakao
        script.onload = () => kakao.maps.load(initMap);
        script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;
        document.head.appendChild(script);
}
});

function initMap(){
            const mapContainer = document.getElementById('map');
            const mapOption = {
                center: new kakao.maps.LatLng(36.73035, 127,967487),
                level: 13,
            };
            const map = new kakao.maps.Map(mapContainer, mapOption);
            const positions = mapAxis.map((position) => ({
                    latlng: new kakao.maps.LatLng(...position.latlng),
                    cityName: position.cityName,
            }));

            // 마커를 생성합니다.
            positions.forEach((item)=>{
                const marker = new kakao.maps.Marker({
                    position: item.latlng,
                });
                // 마커가 지도 위에 표시되도록 설정합니다.
                marker.setMap(map);

                // 마커를 클릭했을 때, 클릭이벤트 생성
                kakao.maps.event.addListener(marker, 'click', () => {
                    // 클릭한 위도, 경도 정보를 가져옵니다.
                    const res = marker.getPosition();

                    const axis ={
                        lat: res.Ma,
                        lon: res.La,
                        cityName: item.cityName,
                    };
                    //this.$store.dispatch("openWeatherApi/fetchApi", axis);
                    store.fetchApi(axis);
                });
            });
        }
</script>

<style lang="scss" scoped>
#map{
    width: 400px;
    height: 400px;

    border-radius: 16px;
    box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.1);
    background-color: beige;
}
</style>