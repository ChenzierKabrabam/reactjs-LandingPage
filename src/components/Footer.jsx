import { makeStyles, Card, Typography, Avatar } from '@material-ui/core'
import * as FiIcons from 'react-icons/fi'
import BgImage from '../assets/image/mobile_login.png'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundImage: 'url(' + BgImage + ')',
    backgroundRepeat: 'no-repeat',
    height: '990px',
    padding: theme.spacing(12, 1),
    backgroundPosition: 'right 0 bottom 80px',
    backgroundSize: '100% auto',
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      backgroundSize: '48% 465px',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 10),
      backgroundPosition: 'right 80px bottom 80px',
      backgroundSize: '440px 500px',
    },
  },
  contentBody: {
    border: '0',
    backgroundColor: 'transparent',
    width: '90%',
    margin: '16px auto',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
  },

  title: {
    fontSize: '32px',
    lineHeight: '42px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '36px',
      lineHeight: '48px',
    },
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#091133',
  },

  bodyContent: {
    [theme.breakpoints.up('sm')]: {
      lineHeight: '26px',
    },
    marginTop: '16px',
    color: '#6F7CB2',
    fontWeight: '400',
    fontStyle: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: '14px',
    },
  },

  cardGroup_wrapper: {
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'row',
  },

  avatar: {
    fontSize: '24px',
    backgroundColor: 'transparent',
    color: '#000',
  },

  cardGroup: {
    border: '0',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      width: '205px',
    },
    [theme.breakpoints.up('md')]: {
      width: '34%',
    },
  },

  cardGroup_title: {
    marginBottom: '6px',
    marginTop: '14px',
    color: '#091133',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '26px',
  },

  cardGroup_body: {
    color: '#5D6970',
    fontSize: '12px',
    lineHeight: '18px',
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.contentBody} variant='outlined'>
        <Typography className={classes.title} variant='h4'>
          Light, Fast & Powerful
        </Typography>
        <Typography className={classes.bodyContent} variant='body1'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </Typography>
        <Typography
          className={classes.bodyContent}
          style={{ marginTop: '12px', fontSize: '14px' }}
          variant='body1'
        >
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </Typography>

        <Typography className={classes.cardGroup_wrapper} component='div'>
          <Card
            className={classes.cardGroup}
            variant='outlined'
            style={{ marginRight: '30px' }}
          >
            <Avatar className={classes.avatar}>
              <FiIcons.FiEdit />
            </Avatar>
            <Typography className={classes.cardGroup_title} variant='h4'>
              Title Goes Here
            </Typography>
            <Typography className={classes.cardGroup_body} variant='body1'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Typography>
          </Card>

          <Card className={classes.cardGroup} variant='outlined'>
            <Avatar className={classes.avatar}>
              <FiIcons.FiEdit />
            </Avatar>
            <Typography className={classes.cardGroup_title} variant='h4'>
              Title Goes Here
            </Typography>
            <Typography className={classes.cardGroup_body} variant='body1'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Typography>
          </Card>
        </Typography>
      </Card>
    </div>
  )
}

export default Footer
