import * as SC from '../../styles/boardstyles'
import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function FirstPost() {

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  
  return (
    <>
      <Head>
        <title>Recipe Board! - Fork and Spoon Bakery</title>
      </Head>
      
      <SC.HeaderContainer>
        <Button size="large">SHOP</Button>
        <Button size="large"><SC.SelectedPage>RECIPES</SC.SelectedPage></Button>
        <Button size="large">LEARN</Button>
        <Button size="large">ABOUT</Button>
        <Button size="large">BLOG</Button>
      </SC.HeaderContainer>

      <SC.CategoryContainer>
        <SC.MealLogo src="/images/meal.png" />
        <Button size="large">CATEGORIES</Button>
        <Button size="large">COLLECTIONS</Button>
        <Button size="large">RESOURCES</Button>
      </SC.CategoryContainer>

      <SC.MainContentContainer>
        <SC.PageTitle>Welcome to our recipe board</SC.PageTitle>
        <SC.PageSubTitle>Feel free to pick one of the following recipes and start cooking!</SC.PageSubTitle>

        <SC.RecipeTypeArea>

        <SC.RecipeTypeContainer>
          <SC.RecipeTypeName>Bread</SC.RecipeTypeName>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Quick Bread</SC.RecipeTypeSubName>
            <Link href="/recipes/wholegrainbananabread"><Button><SC.RecipeName>Whole-Grain Banana Bread</SC.RecipeName></Button></Link>
            <Button><SC.RecipeName>Spicy Toast</SC.RecipeName></Button>
            <Button><SC.RecipeName>Ham 'n Cheese Rolls</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cooked Bread</SC.RecipeTypeSubName>
            <Button><SC.RecipeName>Buttered Toast</SC.RecipeName></Button>
            <Button><SC.RecipeName>Spicy Toast</SC.RecipeName></Button>
            <Button><SC.RecipeName>Ham 'n Cheese Rolls</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>
        </SC.RecipeTypeContainer>

        <SC.RecipeTypeContainer>
          <SC.RecipeTypeName>Pasta</SC.RecipeTypeName>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Quick Pasta</SC.RecipeTypeSubName>
            <p>List here</p>
          </SC.RecipeTypeInnerBox>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cooked Pasta</SC.RecipeTypeSubName>
            <p>List here 2</p>
          </SC.RecipeTypeInnerBox>
        </SC.RecipeTypeContainer>

        <SC.RecipeTypeContainer>
          <SC.RecipeTypeName>Sweets</SC.RecipeTypeName>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cold Sweets</SC.RecipeTypeSubName>
            <p>List here</p>
          </SC.RecipeTypeInnerBox>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cooked Sweets</SC.RecipeTypeSubName>
            <p>List here 2</p>
          </SC.RecipeTypeInnerBox>
        </SC.RecipeTypeContainer>

        <SC.RecipeTypeContainer>
          <SC.RecipeTypeName>Submitted</SC.RecipeTypeName>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Quick Recipes</SC.RecipeTypeSubName>
            <p>List here</p>
          </SC.RecipeTypeInnerBox>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Complex Recipes</SC.RecipeTypeSubName>
            <p>List here 2</p>
          </SC.RecipeTypeInnerBox>
        </SC.RecipeTypeContainer>


        </SC.RecipeTypeArea>
      </SC.MainContentContainer>
    </>
  )
}