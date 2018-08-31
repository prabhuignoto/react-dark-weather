import Styled from 'styled-components';

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
  margin-bottom: auto;
  padding: 2px 15px;
`;

const WeatherWrapper = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1C1C31;
  min-height: 80vh;
  margin-top: 0.1rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
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
  font-family: Open Sans, Arial, sans-serif;
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
  font-family: Open Sans, Arial, sans-serif;
  font-weight: 500;
  color: #fff;
  margin-left: 1px;
  position: relative;
  display: flex;
  align-items: center;
`;

const AppIcon = Styled.i`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  padding: 0.5rem;
  position: relative;
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
