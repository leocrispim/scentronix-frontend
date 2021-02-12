import * as SC from '../../Styles/styledcomponents'
import React from 'react';
import Button from '@material-ui/core/Button';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Page</title>
      </Head>
      
      <SC.HeaderContainer>
        <Button size="large">SHOP</Button>
        <Button size="large" variant="outlined" >RECIPES</Button>
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

        <SC.ContentLeft>
          <SC.HistoryBox>
            RECIPES <SC.HistoryDivider>&gt;</SC.HistoryDivider>
            BREAD <SC.HistoryDivider>&gt;</SC.HistoryDivider> 
            QUICK BREAD <SC.HistoryDivider>&gt;</SC.HistoryDivider>
          </SC.HistoryBox>

          <SC.ObjectTitle>
            Whole-Grain Banana Bread
          </SC.ObjectTitle>

          <br /> <br />

          <SC.ObjectDescriptionBox>
            This one-bowl banana bread This one-bowl banana bread This one-bowl banana bread
            This one-bowl banana bread This one-bowl banana bread This one-bowl banana bread
            This one-bowl banana bread This one-bowl banana bread This one-bowl banana bread
            This one-bowl banana bread This one-bowl banana bread This one-bowl banana bread
            This one-bowl banana bread This one-bowl banana bread This one-bowl banana bread
            This one-bowl banana bread This one-bowl banana bread This one-bowl banana bread
          </SC.ObjectDescriptionBox>

        </SC.ContentLeft>

        <SC.ContentRight>
          <img 
          src="/images/eso.jpg"
          height={500}
          width={880}
          />
        </SC.ContentRight>
      </SC.MainContentContainer>

      {/* <Image
        src="/images/eso.jpg" // Route of the image file
        height={800} // Desired size with correct aspect ratio
        width={1024} // Desired size with correct aspect ratio
        alt="Cool Wallpaper"
      /> */}
            <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}