import * as SC from '../styles/homestyles'
import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fork and Spoon Bakery Home Page!</title>
      </Head>
      
      <SC.HeaderContainer>
        <Button size="large">SHOP</Button>
        <Link href="/recipes/recipeboard"><Button size="large">RECIPES</Button></Link>
        <Link href="/learn/tech"><Button size="large">LEARN</Button></Link>
        <Link href="/"><Button size="large"><SC.SelectedPage>ABOUT</SC.SelectedPage></Button></Link>
        <Button size="large">BLOG</Button>
      </SC.HeaderContainer>

      <SC.CategoryContainer>
        <SC.MealLogo src="/images/meal.png" />
        <Button size="large">FORK AND SPOON BAKERY</Button>
        <Button size="large">IMAGINED BY LEONARDO CRISPIM</Button>
      </SC.CategoryContainer>

      <SC.MainContentContainer>

        <h1>Hello and welcome</h1>

        <h3>I have left a few page links here for you to check out.</h3>
        <SC.LinksWrapper>
          <Link href="/recipes/recipeboard"><Button color="primary" variant="contained" size="large">Recipe Board</Button></Link>
          <Link href="/recipes/wholegrainbananabread"><Button color="primary" variant="contained" size="large">Recipe 1</Button></Link>
          <Link href="/recipes/pepperonipizza"><Button color="primary" variant="contained" size="large">Recipe 2</Button></Link>
          <Link href="/learn/tech"><Button color="primary" variant="contained" size="large">Frameworks/Libs used</Button></Link>
        </SC.LinksWrapper>
        <h4>Or if you're feeling adventurous you can explore by yourself by clicking on either the RECIPES or LEARN link on the header.</h4>

      </SC.MainContentContainer>
    </>
  )
}