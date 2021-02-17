import * as SC from '../../styles/recipestyles'
import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function PepperoniPizza() {
  return (
    <>
      <Head>
        <title>Pepperoni Pizza - Fork and Spoon Bakery</title>
      </Head>
      
      <SC.HeaderContainer>
        <Button size="large">SHOP</Button>
        <Link href="/recipes/recipeboard"><Button size="large"><SC.SelectedPage>RECIPES</SC.SelectedPage></Button></Link>
        <Link href="/learn/tech"><Button size="large">LEARN</Button></Link>
        <Link href="/"><Button size="large">ABOUT</Button></Link>
        <Button size="large">BLOG</Button>
      </SC.HeaderContainer>

      <SC.CategoryContainer>
        <SC.MealLogo src="/images/meal.png" />
        <Link href="/recipes/recipeboard"><Button size="large">CATEGORIES</Button></Link>
        <Button size="large">COLLECTIONS</Button>
        <Button size="large">RESOURCES</Button>
      </SC.CategoryContainer>

      <SC.MainContentContainer>
        <SC.ContentLeft>
          <SC.HistoryBox>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" color="secondary" />} aria-label="breadcrumb">
              <SC.BreadcrumbText color="inherit">
                RECIPES
              </SC.BreadcrumbText>
              <SC.BreadcrumbText color="inherit">
                PASTA
              </SC.BreadcrumbText>
              <SC.BreadcrumbText color="inherit">
                COOKED PASTA
              </SC.BreadcrumbText>
              <> </>{/* This line is here to provide an extra ">" at the end of the Breadcrumb */}
            </Breadcrumbs>
          </SC.HistoryBox>

          <SC.ObjectTitle>
            Pepperoni Pizza
          </SC.ObjectTitle>

          <SC.ObjectDescriptionBox>
          You won't miss the gluten in this crust! —
          Topped with cheesy goodness and turkey pepperoni, this pizza is bound to be a hit with
          the whole family.
          Practice makes perfect! Some ovens are stronger than others so feel free to experiment with
          the cook timer to see what fits best in your kitchen. Once you've hit the spot you certainly
          wont stop serving this delicious treat every other weekend to your family.
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
              <SC.ObjectDetailTop>COOK</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>15 to 20 Mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside2>
            <SC.ObjectDetailInside3>
              <SC.ObjectDetailTop>TOTAL</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>25 to 30 Mins</SC.ObjectDetailBot>
            </SC.ObjectDetailInside3>
          </SC.ObjectDetailsBox>

          <Divider />
            
          <SC.ObjectDetailsBox>
            <SC.IconWrapper>
              <GroupWorkOutlinedIcon fontSize="inherit"/>
            </SC.IconWrapper>
            <SC.ObjectResultInside1>
              <SC.ObjectDetailTop>YIELD</SC.ObjectDetailTop>
              <SC.ObjectDetailBot>1 large pizza, 8 slices</SC.ObjectDetailBot>
            </SC.ObjectResultInside1>
            <SC.ObjectResultInside2>
              <SC.ResultButtonWrapper>
                <Button size="large" style={{ borderRadius: 1}}><AddOutlinedIcon/> &nbsp; SAVE RECIPE</Button>
              </SC.ResultButtonWrapper>
              <SC.ResultButtonWrapper>
                <Button size="large" style={{ borderRadius: 1}}><PrintOutlinedIcon/> &nbsp; PRINT</Button>
              </SC.ResultButtonWrapper>
            </SC.ObjectResultInside2>
          </SC.ObjectDetailsBox>
        </SC.ContentLeft>

        <SC.ContentRight>
          <img 
          src="/images/pepperonipizza.jpg"
          height={500}
          width={860}
          />
          <SC.BackButtonWrapper>
            <Link href="/recipes/recipeboard">
              <Button color="secondary" variant="contained"><ArrowBackIcon /> Back to Recipe Board</Button>
            </Link>
          </SC.BackButtonWrapper>
        </SC.ContentRight>
      </SC.MainContentContainer>
    </>
  )
}