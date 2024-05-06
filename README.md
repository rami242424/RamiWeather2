# RamiWeather

RamiWeather는 사용자의 현재 위치를 기반으로 한 날씨 정보를 가져와 화면에 표시하는 React Native 애플리케이션입니다.

## 기능

- 사용자의 현재 위치를 기반으로 한 실시간 날씨 정보 표시
- 일주일간의 일기 예보 제공

## 사용 기술

- **React Native**: 모바일 앱을 개발하기 위한 JavaScript 프레임워크
- **Expo**: React Native 개발을 위한 툴과 서비스의 모음
- **OpenWeatherMap API**: 날씨 정보를 제공하는 외부 API

## 프로젝트 구현화면
![1loading](https://github.com/rami242424/RamiWeather2/assets/138556019/4c2badf5-095e-4040-9696-3e4cd0dc7f76)
![2scrollview](https://github.com/rami242424/RamiWeather2/assets/138556019/930e0a36-09e5-465e-b4d1-654717cd5a38)


### 코드 설명

#### 사용한 패키지 및 컴포넌트
- **Location**: Expo의 `expo-location` 패키지를 사용하여 사용자의 위치 정보를 가져오기 위해 import합니다.
- **React Hooks**: `useEffect`와 `useState`를 사용하여 함수형 컴포넌트에서 상태와 생명주기 관리를 합니다.
- **StatusBar**: Expo의 `expo-status-bar` 컴포넌트를 사용하여 상태 표시줄을 커스터마이징합니다.
- **ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator**: React Native에서 제공하는 기본 컴포넌트 및 스타일링에 관련된 기능을 사용합니다.
- **Fontisto**: Expo의 `@expo/vector-icons` 패키지를 사용하여 날씨 아이콘을 표시합니다.

#### API 키 및 상수
- **API_KEY**: OpenWeatherMap API를 사용하기 위한 API 키를 상수로 선언합니다.

#### 날씨 아이콘 매핑
- **Icons**: 날씨 상태에 따른 아이콘을 매핑한 객체입니다. 각 날씨 상태에 해당하는 아이콘 이름을 키로 가지고 있습니다.

### 주요 기능 설명

#### 사용자 위치 정보 가져오기
- `getWeather` 함수 내에서 `Location`을 사용하여 사용자의 현재 위치 정보를 가져옵니다.
- 위치 정보를 기반으로 OpenWeatherMap API에 요청하여 날씨 정보를 가져옵니다.
- `await`와 `async`를 사용하여 비동기적인 작업을 처리하고, 데이터를 기다렸다가 받아옵니다.

#### 날씨 정보 표시
- `ScrollView`를 사용하여 수평으로 스크롤 가능한 화면을 구성합니다.
- 날씨 정보가 로딩 중일 때는 `ActivityIndicator`를 표시하여 사용자에게 로딩 중임을 알립니다.
- 날씨 정보를 받아와 각 날짜별로 화면에 표시합니다. 날씨 상태에 따라 해당하는 아이콘과 온도를 표시합니다.

## 환경 설정

1. 프로젝트를 클론합니다.
   ```
   git clone <repository-url>
   ```

2. 프로젝트 디렉토리로 이동합니다.
   ```
   cd RamiWeather
   ```

3. 필요한 패키지를 설치합니다.
   ```
   npm install
   ```

## 사용 방법

1. 앱을 실행합니다.
   ```
   npm start
   ```
2. 앱이 실행되면 현재 위치의 날씨 정보가 화면에 표시됩니다.

## 참고

- [Expo Documentation](https://docs.expo.dev/)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)

---
