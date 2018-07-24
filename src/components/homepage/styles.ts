import Styled from 'styled-components';
import AppLogo from './assets/umbrella.svg';

const HomePage = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  min-height: 100vh;
  margin-top: 15px;
`;

const SearchBar = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  /* height: 100px; */
  margin-bottom: auto;
  margin-right: auto;
  /* border: 1px solid red; */
  padding: 2px 15px;
`;

const WeatherWrapper = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1C1C31;
  /* background: rgba(255,255,255,0.1); */
  min-height: 80vh;
  margin-top: 0.1rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  /* box-shadow: 0 0 10px 1px rgba(0,0,0,0.2); */
  /* background: linear-gradient(45deg, rgba(34,34,59,1) 0%, rgba(74,78,105,1) 59%, rgba(154,140,152,1) 100%); */
}
`;

const ToggleWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 30%; */
`;

const AutoSuggestWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 50%; */
`;

const Credit = Styled.a`
  font-size: 0.9em;
  font-family: Montserrat, Arial, sans-serif;
  color: #fff;
  height: 70px;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const Appheader = Styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: flex-start;
`;

const AppTitle = Styled.div`
  font-size: 1.5em;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 500;
  color: #fff;
  margin-left: 1px;
  position: relative;
  display: flex;
  align-items: center;
`;

const AppIcon = Styled.i`
  width: 40px;
  height: 40px;
  background: url(${AppLogo});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  margin-right: 10px;
`

export {
  HomePage,
  SearchBar,
  WeatherWrapper,
  ToggleWrapper,
  AutoSuggestWrapper,
  Credit,
  Appheader,
  AppTitle,
  AppIcon
};
