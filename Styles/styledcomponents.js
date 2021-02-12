import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 600px;
  margin-left: 20%;
  /* background-color: blue; */
`

export const CategoryContainer = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  background-color: #f8f5f0;
`

export const MealLogo = styled.img`
  display: relative;
  height: 128px;
  width: 128px;
  margin-top: -70px;
  margin-left: 12%;
  margin-right: 2%;
`

export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  /* background-color: blue; */
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 0 10% 0 15%;
  /* background-color: purple; */
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: green; */
`

export const HistoryBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
`

export const HistoryDivider = styled.p`
  margin: 0;
  padding: 0;
  color: red;
`

export const ObjectTitle = styled.h1`
  font-size: 60px;
  margin: 0;
  padding: 0;
  font-weight: 550;
`

export const ObjectDescriptionBox = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`

export const IconWrapper = styled.div`
  font-size: 60px;
  margin: 0;
  padding: 0;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
`

export const ObjectDetailsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 10px;
  background-color: red;
`

export const ObjectTimingsTitlesBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`

export const ObjectTimingsValuesBox = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
`

export const ObjectPicture = styled.image`
  height: 200px;
  width: 200px;
`