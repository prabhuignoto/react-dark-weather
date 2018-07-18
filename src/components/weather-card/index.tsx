import 'bulma/css/bulma.css';
import * as React from 'react';
import { IWeatherCard } from '../imports';
import Date from './date';
import { Container, Wrapper  } from './styled-components';
import Summary from './summary';
import Temperature from './temperature';
import WeatherDetails from "./weather-details";
import WeatherIcon from './weather-icon';

const WeatherCard: React.SFC<IWeatherCard> = ({
  temperatureHigh,
  temperatureLow,
  date,
  icon,
  summary,
  weatherDetails
}) => (
  <Wrapper className="column is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
    <Container>
      <Date {...date}/>
      <WeatherIcon  icon={icon} />
      <Summary summary={summary}/>  
      <Temperature highTemp={temperatureHigh} lowTemp={temperatureLow} />
      <WeatherDetails details={weatherDetails} />
    </Container>
  </Wrapper>
);

export default WeatherCard; 