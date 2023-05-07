import React, { useState } from 'react'
import { DayBgColor, DayFontColor, NightBgColor, NightFontColor } from '../../style/variable'
import TopLineHOC from '../TopLineHOC'
import { BgWrapper, CardWrapper, DayNightWrapper, DivWrapper } from './style'


function StyledComponentsBase() {
  const dayTheme = {
    fontColor: DayFontColor,
    bgColor: DayBgColor
  };
  const nightTheme = {
    fontColor: NightFontColor,
    bgColor: NightBgColor
  };
  const [bgColor, setBgColor] = useState('#eee')
  const [dayNightTHeme, setDayNightTHeme] = useState(dayTheme)

  const toggleTheme = () => {
    if (dayNightTHeme.fontColor === DayFontColor) {
      setDayNightTHeme(nightTheme)
    } else {
      setDayNightTHeme(dayTheme);
    }
  }

  return (
    <DivWrapper>
      <h2>StyledComponentsBase</h2>
      设置背景颜色：<input type='color' value={bgColor} onChange={e => setBgColor(e.target.value)} />
      <CardWrapper bgColor={bgColor}>
        <div className='contents'>this is a paragraph content</div>
      </CardWrapper>

      <CardWrapper>
        <footer>使用默认样式</footer>
      </CardWrapper>

      <button onClick={e => toggleTheme()}>切换主题</button>
      <DayNightWrapper dayNightTHeme = {dayNightTHeme}>
        <footer>可以切换主题样式</footer>
      </DayNightWrapper>

      <BgWrapper>
        <footer>使用来自 ThemeProvider 样式组件的主题属性</footer>
      </BgWrapper>
    </DivWrapper>
  )
}

export default TopLineHOC(StyledComponentsBase)