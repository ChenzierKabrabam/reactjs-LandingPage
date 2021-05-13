import { Card, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    border: '0',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      width: '599px',
      marginLeft: theme.spacing(21),
      marginTop: theme.spacing(32),
    },
  },
  title: {
    fontSize: '45px',
    lineHeight: '66px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'capitalize',
    color: '#091133',
  },
  bodyText: {
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(16),
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '30px',
    color: '#505F98',
  },
  buttonGroup: {
    marginTop: '65px',
  },
  buttonGroup_buttons: {
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
      <Typography
        className={classes.bodyText}
        style={{ marginTop: '12px', paddingRight: '112px' }}
      >
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
