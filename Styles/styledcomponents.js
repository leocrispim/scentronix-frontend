import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 600px;
  margin-left: 20%;
  /* background-color: blue; */
`

export const CategoryContainer = styled.div`
  display: flex;
  height: 70px;
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
  margin-top: 60px;
  /* background-color: blue; */
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0 20% 0 20%;
  background-color: purple;
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
  font-size: 48px;
`

export const ObjectDescriptionBox = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`

export const ObjectPicture = styled.image`
  height: 200px;
  width: 200px;
`