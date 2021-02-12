import * as SC from '../../Styles/styledcomponents'
import React from 'react';
import Button from '@material-ui/core/Button';
import Head from 'next/head'
import Link from 'next/link'
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';

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

          <SC.ObjectDetailsBox>
            <SC.IconWrapper>
              <AccessTimeRoundedIcon fontSize="inherit"/>
            </SC.IconWrapper>
            <SC.ObjectTimingsTitlesBox>
              <span>PREP</span>
              <span>PREP</span>
              <span>PREP</span>
            </SC.ObjectTimingsTitlesBox>
            <SC.ObjectTimingsValuesBox>
              <span>PREP</span>
              <span>PREP</span>
              <span>PREP</span>
            </SC.ObjectTimingsValuesBox>
          </SC.ObjectDetailsBox>


        </SC.ContentLeft>

        <SC.ContentRight>
          <img 
          src="/images/eso.jpg"
          height={500}
          width={860}
          />
        </SC.ContentRight>
      </SC.MainContentContainer>


            <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}