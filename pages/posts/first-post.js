import * as SC from '../../Styles/styledcomponents'
import React from 'react';
import Button from '@material-ui/core/Button';
import Head from 'next/head'
import Link from 'next/link'
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Divider from '@material-ui/core/Divider';

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
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" color="secondary" />} aria-label="breadcrumb">
              <a color="inherit">
                RECIPES
              </a>
              <a color="inherit">
                BREAD
              </a>
              <a color="inherit">
                QUICK BREAD
              </a>
              <> </>{/* This line is here to provide an extra ">" at the end of the Breadcrumb */}
            </Breadcrumbs>
          </SC.HistoryBox>

          <SC.ObjectTitle>
            Whole-Grain Banana Bread
          </SC.ObjectTitle>

          <br /> <br />

          <SC.ObjectDescriptionBox>
          This one-bowl banana bread --- our 2018 Recipe of the Year ---- 
          uses the simplest ingredients, but is inscredibly moist and flavorful. 
          While the recipe calls for a 50/50 mix of flours (all-purpose and whole weat), 
          we often make teh bread 100% whole wheat, and honestly? 
          No one can tell, it's that good! And not only is this bread delicious --- it's versatile.
          </SC.ObjectDescriptionBox>

          <SC.ObjectDetailsBox>
            <SC.IconWrapper>
              <AccessTimeRoundedIcon fontSize="inherit"/>
            </SC.IconWrapper>
            <SC.ObjectDetailInside1>
              <SC.ObjectDetailTop>PREP</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>10 Mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside1>
            <SC.ObjectDetailInside2>
              <SC.ObjectDetailTop>BAKE</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>1 hr to 1 hr 15 mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside2>
            <SC.ObjectDetailInside3>
              <SC.ObjectDetailTop>TOTAL</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>1 hr 10 mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside3>
          </SC.ObjectDetailsBox>

          <Divider />
            
          <SC.ObjectDetailsBox>
            <SC.IconWrapper>
              <AccessTimeRoundedIcon fontSize="inherit"/>
            </SC.IconWrapper>
            <SC.ObjectDetailInside1>
              <SC.ObjectDetailTop>PREP</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>10 Mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside1>
            <SC.ObjectDetailInside2>
              <SC.ObjectDetailTop>BAKE</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>1 hr to 1 hr 15 mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside2>
            <SC.ObjectDetailInside3>
              <SC.ObjectDetailTop>TOTAL</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>1 hr 10 mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside3>
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