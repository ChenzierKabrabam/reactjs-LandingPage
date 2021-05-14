import { Card, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: '16px auto',
    marginTop: theme.spacing(8),
    border: '0',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      marginTop: theme.spacing(20),
      marginLeft: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      width: '599px',
      marginLeft: theme.spacing(13),
      marginTop: theme.spacing(32),
    },
  },
  title: {
    fontSize: '32px',
    lineHeight: '45px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'capitalize',
    color: '#091133',
    [theme.breakpoints.up('sm')]: {
      fontSize: '38px',
      lineHeight: '50px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '45px',
      lineHeight: '66px',
    },
  },
  bodyText: {
    [theme.breakpoints.up('md')]: {
      lineHeight: '30px',
      paddingRight: theme.spacing(16),
      fontSize: '16px',
    },
    marginTop: theme.spacing(2),
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#505F98',
  },
  bodyText_two: {
    [theme.breakpoints.down('md')]: {
      marginTop: '12px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '12px',
      lineHeight: '30px',
      paddingRight: theme.spacing(16),
      fontSize: '15px',
    },
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#505F98',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    marginTop: '75px',
  },
  buttonGroup_buttons: {
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
    width: '189px',
    height: '36px',
    borderRadius: '2px',
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '26px',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
}))

function Content() {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant='outlined'>
      <Typography className={classes.title} variant='h4'>
        introduce your product quickly & effectively
      </Typography>
      <Typography className={classes.bodyText} variant='body1' align='left'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </Typography>
      <Typography className={classes.bodyText_two}>
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim.
      </Typography>
      <Typography className={classes.buttonGroup} component='div'>
        <Button
          className={classes.buttonGroup_buttons}
          style={{
            marginRight: '30px',
            backgroundColor: '#111B47',
            color: '#fff',
          }}
        >
          Purchase UI Kit
        </Button>
        <Button
          className={classes.buttonGroup_buttons}
          style={{
            border: '2px solid #091133',
            color: '#091133',
          }}
        >
          Learn more
        </Button>
      </Typography>
    </Card>
  )
}

export default Content
