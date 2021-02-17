import * as SC from '../../styles/boardstyles'
import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default function RecipeBoard() {
  return (
    <>
      <Head>
        <title>Recipe Board! - Fork and Spoon Bakery</title>
      </Head>
      
      <SC.HeaderContainer>
        <Button size="large">SHOP</Button>
        <Button size="large"><SC.SelectedPage>RECIPES</SC.SelectedPage></Button>
        <Link href="/learn/tech"><Button size="large">LEARN</Button></Link>
        <Link href="/"><Button size="large">ABOUT</Button></Link>
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
            <Link href="/recipes/wholegrainbananabread"><Button><SC.RecipeName>Whole-Grain Banana Bread*</SC.RecipeName></Button></Link>
            <Button><SC.RecipeName>Chocolate Zucchini Bread</SC.RecipeName></Button>
            <Button><SC.RecipeName>Grandma's Onion Squares</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cooked Bread</SC.RecipeTypeSubName>
            <Button><SC.RecipeName>Lemoni Zucchini Bread</SC.RecipeName></Button>
            <Button><SC.RecipeName>Soft Sesame Breadsticks</SC.RecipeName></Button>
            <Button><SC.RecipeName>Cran-Almond Loaf</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>
        </SC.RecipeTypeContainer>

        <SC.RecipeTypeContainer>
          <SC.RecipeTypeName>Pasta</SC.RecipeTypeName>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Quick Pasta</SC.RecipeTypeSubName>
            <Button><SC.RecipeName>Spaghetti and Meatballs</SC.RecipeName></Button>
            <Button><SC.RecipeName>Soft Sesame Breadsticks</SC.RecipeName></Button>
            <Button><SC.RecipeName>Homemade Pasta</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cooked Pasta</SC.RecipeTypeSubName>
            <Link href="/recipes/pepperonipizza"><Button><SC.RecipeName>Pepperoni Pizza*</SC.RecipeName></Button></Link>
            <Button><SC.RecipeName>Spicy Tacos</SC.RecipeName></Button>
            <Button><SC.RecipeName>Pasta Puttanesca</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>
        </SC.RecipeTypeContainer>

        <SC.RecipeTypeContainer>
          <SC.RecipeTypeName>Sweets</SC.RecipeTypeName>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cold Sweets</SC.RecipeTypeSubName>
            <Button><SC.RecipeName>Homemade Ice-Cream</SC.RecipeName></Button>
            <Button><SC.RecipeName>Chocolate Covered Cream Pie</SC.RecipeName></Button>
            <Button><SC.RecipeName>Easy Cheesecake</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>

          <SC.RecipeTypeInnerBox>
            <SC.RecipeTypeSubName>Cooked Sweets</SC.RecipeTypeSubName>
            <Button><SC.RecipeName>Chocolate-Chip Cookies</SC.RecipeName></Button>
            <Button><SC.RecipeName>Boston Cream Donuts</SC.RecipeName></Button>
            <Button><SC.RecipeName>Varied Muffins</SC.RecipeName></Button>
          </SC.RecipeTypeInnerBox>
        </SC.RecipeTypeContainer>

        </SC.RecipeTypeArea>

        <SC.DisclaimerLabel>
          <PriorityHighIcon fontSize="large" />
            This is for the most part a static website; only links that are followed by a (*) are functional on this list.
        </SC.DisclaimerLabel>
      </SC.MainContentContainer>
    </>
  )
}