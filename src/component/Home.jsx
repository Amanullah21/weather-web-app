import React from 'react'
import style  from '../style/home.module.css'
import Hourly from './Hourly'
import Input from './Input'
import WeeklyField from './WeeklyField'

const Home = () => {
    const data={
        'hello':"aman",
        'degre':"35",
        'icon':"$$",
        'weather':'sunny'
    }
    const hourly={
      'current_temp':"30",
      'pressure':'1023',
      'humadity':'93',
      "sunrise_time":"7:20",
      'sunset_time':" 6:12"
    }
    const pdata = [
      {
        name: "9",
        temp: 20,
      },
      {
        name: "10",
        temp: 21,
      },
      {
        name: "11",
        temp: 22,
      },
      {
        name: "12",
        temp: 24,
      },
      {
        name: "13",
        temp: 29,
      },
      {
        name: "14",
        temp: 35,
      },
    ];

  return (
    <div className={style.home}>
        <Input/>
        <WeeklyField data={data}/>
        <Hourly hourly={hourly} pdata={pdata}/>
    </div>
  )
}

export default Home