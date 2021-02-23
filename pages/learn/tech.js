import * as SC from '../../styles/learnstyles'
import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button';

export default function Tech() {
  return (
    <>
      <Head>
        <title>Technologies - Fork and Spoon Bakery</title>
      </Head>

      <SC.HeaderContainer>
        <Button size="large">SHOP</Button>
        <Link href="/recipes/recipeboard"><Button size="large">RECIPES</Button></Link>
        <Button size="large"><SC.SelectedPage>LEARN</SC.SelectedPage></Button>
        <Link href="/"><Button size="large">ABOUT</Button></Link>
        <Button size="large">BLOG</Button>
      </SC.HeaderContainer>

      <SC.CategoryContainer>
        <SC.MealLogo src="/images/meal.png" />
        <Button size="large">NEXT.JS</Button>
        <Button size="large">MATERIAL-UI</Button>
        <Button size="large">STYLED-COMPONENTS</Button>
      </SC.CategoryContainer>

      <SC.MainContentContainer>

        <h2>This website was built using:</h2>

        <img
          src="/images/nextjsbanner.png"
          height={600}
          width={1080}
        />

        <SC.ImageWrapper>
          <img
            src="/images/materialuilogo.png"
            height={540}
            width={540}
          />
        </SC.ImageWrapper>

        <img
          src="/images/styledcomponentsbanner.png"
          height={600}
          width={1080}
        />
      </SC.MainContentContainer>
    </>
  )
}