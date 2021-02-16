import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 600px;
  margin-left: 18%;
`

export const SelectedPage = styled.span`
  margin: 0;
  padding: 0;
  border-bottom: solid red 2px;
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
  margin-left: 9.4%;
  margin-right: 2%;
`

export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0 12% 0 18%;
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HistoryBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
`

export const BreadcrumbText = styled.span`
  font-size: 16px;
  color: black;
  font-weight: bold;
  letter-spacing: 0.8px;
  padding: 0;
`

export const HistoryDivider = styled.p`
  margin: 0;
  padding: 0;
  color: red;
`

export const ObjectTitle = styled.h1`
  font-size: 56px;
  margin: 20px 0 80px 0;
  padding: 0;
  font-weight: 550;
  line-height: 60px;
`

export const ObjectDescriptionBox = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 21px;
`

export const ObjectDescriptionUnderlined = styled.span`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid black;
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
  display: flex;
  margin: 5px 0;
`

export const ObjectDetailInside1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 140px;
`

export const ObjectDetailInside2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  width: 200px;
`

export const ObjectDetailInside3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  width: 260px;
`

export const ObjectResultInside1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 220px;
  font-weight: 550;
  letter-spacing: 0.8px;
`

export const ObjectResultInside2 = styled.div`
  display: flex;
  margin: 20px 0 0 40px;
  width: 46%;
  height: 50px;
  justify-content: space-between;
`

export const ObjectDetailTop = styled.p`
  margin: 10px 0 5px 0;
  padding: 0;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.2px;
`

export const ObjectDetailBot = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 550;
  font-size: 21px;
  letter-spacing: 0px;
`

export const ResultButtonWrapper = styled.div`
  border: solid red 2px;
  border-radius: 1px;
`

export const ObjectPicture = styled.image`
  height: 200px;
  width: 200px;
`