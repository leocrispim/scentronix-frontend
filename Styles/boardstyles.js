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
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 100%;
  height: 80.3vh;
  margin-top: 50px;
  background-color: blue;
`

export const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 56px;
`

export const PageSubTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 36px;
`

export const RecipeTypeArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: green;
  margin-top: 30px;
`

export const RecipeTypeContainer = styled.div`
  display: grid;
  background-color: red;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  grid-column-gap: 10px;
`

export const RecipeTypeName = styled.h2`
  margin: 0;
  padding: 0;
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 30px;
`

export const RecipeTypeInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: purple;
  grid-row-start: 2;
  grid-row-end: 2;
  grid-row-gap: 2px;
`

export const RecipeTypeSubName = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
`

export const RecipeName = styled.p`
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 20px;
`