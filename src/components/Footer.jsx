import { makeStyles, Card, Typography, Avatar } from '@material-ui/core'
import * as FiIcons from 'react-icons/fi'
import BgImage from '../assets/image/mobile_login.png'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(12, 20),
    backgroundImage: 'url(' + BgImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 105px bottom 80px',
    backgroundSize: '440px 465px',
  },
  contentBody: {
    border: '0',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      width: '550px',
    },
  },
  title: {
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#091133',
  },
  bodyContent: {
    marginTop: '16px',
    color: '#6F7CB2',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '26px',
    fontStyle: 'normal',
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
      width: '255px',
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
          style={{ marginTop: '12px' }}
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
