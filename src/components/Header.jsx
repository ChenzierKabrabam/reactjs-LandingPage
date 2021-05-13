import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '60px',
    padding: theme.spacing(2, 20, 0, 20),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  group: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    alignItems: 'center',
    flexDirection: 'row',
    color: '#505F98',
    textTransform: 'capitalize',
  },
  group_buttons: {
    fontSize: '14px',
    textTransform: 'capitalize',
    color: '#505F98',
  },
  title: {
    fontWeight: 'bolder',
    fontSize: '26px',
    lineHeight: '36px',
    color: '#37447E',
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <div className={classes.group}>
          <Button
            className={classes.group_buttons}
            style={{
              marginRight: '30px',
            }}
          >
            home
          </Button>
          <Button
            className={classes.group_buttons}
            style={{
              marginRight: '30px',
            }}
          >
            about
          </Button>
          <Button className={classes.group_buttons}>contact</Button>
        </div>
        <Typography className={classes.title} variant='h4'>
          LAND
        </Typography>
        <Button
          style={{
            width: '160px',
            height: '26px',
            borderRadius: '2px',
            backgroundColor: '#111B47',
            lineHeight: '18px',
            fontSize: '12px',
            fontWeight: '500',
            color: '#fff',
            textTransform: 'capitalize',
          }}
        >
          buy now
        </Button>
      </div>
    </>
  )
}

export default Header
